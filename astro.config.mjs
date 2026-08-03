// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
	site: 'https://liminghao0922.github.io',
	base: '/workshop-store',
	output: 'static',
	trailingSlash: 'always',
	devToolbar: { enabled: false },
});
