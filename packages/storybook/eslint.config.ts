import { baseConfig, ConfigArray, storybookConfig, tseslint } from '@janis.me/linter-config';

const config: ConfigArray = tseslint.config(...baseConfig, ...storybookConfig);

export default config;
