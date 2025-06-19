import { ConfigArray, reactConfig, tseslint } from '@janis.me/linter-config';

export const config: ConfigArray = tseslint.config(...reactConfig, {
  rules: {
    'react/display-name': 'off',
  },
});
