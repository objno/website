import adapter from '@sveltejs/adapter-static';
import { imagePreprocessor } from 'svimg';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		imagePreprocessor({
			inputDir: 'src/assets',
			outputDir: 'static/assets/images',
			publicPath: '/assets/images',
			webp: true,
			avif: true
		})
	],

	kit: {
		adapter: adapter()
	}
};

export default config;
