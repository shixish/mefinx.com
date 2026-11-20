import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import Icons from 'unplugin-icons/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			compilerOptions: {
				// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
				runes: ({ filename }) =>
					filename.split(/[/\\]/).includes('node_modules') ? undefined : true
			},
			// 404.html is served by Cloudflare for unknown paths (see wrangler.jsonc).
			adapter: adapter({ fallback: '404.html' })
		}),
		// Phosphor icons, compiled into Svelte components at build time. Only the ones imported ship.
		Icons({ compiler: 'svelte' })
	]
});
