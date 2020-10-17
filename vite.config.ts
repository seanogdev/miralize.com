import type { UserConfig } from 'vite';
import svgPlugin from 'vite-plugin-svg';
import path from 'path';

const config: UserConfig = {
  https: true,
  alias: {
    '/@/': path.resolve(__dirname, 'src'),
  },
  plugins: [
    svgPlugin(),
  ],
};

export default config;
