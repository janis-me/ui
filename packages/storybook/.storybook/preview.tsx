import { Description, Primary, Stories, Subtitle, Title } from '@storybook/addon-docs';
import type { Preview } from '@storybook/react-vite';
import { useEffect } from 'react';

import { deleteThemeFromLocalstorage, setDefaultTheme, setTheme, ThemeProvider } from '@janis.me/react-themed/js';

import '../src/styles/main.scss';

const preview: Preview = {
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['system', 'light', 'dark'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'system',
  },
  parameters: {
    docs: {
      page: () => {
        const selectedTheme = 'dark';

        useEffect(() => {
          if (selectedTheme === 'system') {
            deleteThemeFromLocalstorage();
            setDefaultTheme();
          } else {
            setTheme(selectedTheme);
          }
        }, [selectedTheme]);

        return (
          <ThemeProvider>
            <Title />
            <Subtitle />
            <Description />
            <Primary />
            <Stories />
          </ThemeProvider>
        );
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const selectedTheme = context.globals.theme || 'system';

      useEffect(() => {
        if (selectedTheme === 'system') {
          deleteThemeFromLocalstorage();
          setDefaultTheme();
        } else {
          console.log('Selected theme:', selectedTheme);
          setTheme(selectedTheme);
        }
      }, [selectedTheme]);

      return (
        <ThemeProvider>
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default preview;
