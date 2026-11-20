/*
	Serves the prerendered site from build/. run_worker_first sends every request through here
	so www.mefinx.com can be redirected to the bare domain; everything else goes straight to the
	static assets, with build/404.html for unknown paths.
*/

interface Env {
	ASSETS: Fetcher;
}

const CANONICAL_HOST = 'mefinx.com';

export default {
	fetch(request, env) {
		const url = new URL(request.url);
		if (url.hostname === `www.${CANONICAL_HOST}`) {
			url.hostname = CANONICAL_HOST;
			return Response.redirect(url.toString(), 301);
		}
		return env.ASSETS.fetch(request);
	}
} satisfies ExportedHandler<Env>;
