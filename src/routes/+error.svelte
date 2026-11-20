<script lang="ts">
	import { page } from '$app/state';
	import Seo from '#lib/components/Seo.svelte';
	import { APP_URL } from '#lib/content.ts';

	const notFound = $derived(page.status === 404);
</script>

<Seo title={notFound ? 'Page not found' : 'Something went wrong'} noindex />

<div class="mx-auto max-w-180 px-6 py-32 text-center">
	<div
		class="mb-6 bg-gradient-brand text-gradient text-[6rem] leading-none font-extrabold tracking-[-0.05em] opacity-30 sm:text-[10rem]"
	>
		{page.status}
	</div>
	<h1 class="mb-4 text-section leading-tight font-bold tracking-section">
		{notFound ? 'Page not found' : 'Something went wrong'}
	</h1>
	<p class="mb-12 text-lg text-muted">
		{notFound
			? "The page you're looking for doesn't exist or has been moved."
			: 'Try again in a moment.'}
	</p>
	<div class="flex flex-col justify-center gap-4 sm:flex-row">
		<a href="/" class="btn btn-primary btn-lg">Go home</a>
		<a href={APP_URL} class="btn btn-secondary btn-lg">Open mefinx</a>
	</div>
</div>
