import tailwind from "@astrojs/tailwind";
import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  // server: {
  //   port: 12345,
  //   host: '0.0.0.0'
  // },
  devToolbar: {
    enabled: false
  },
  integrations: [tailwind(), react()]
});