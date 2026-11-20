<script lang="ts">
	import { page } from '$app/state';
	import { site } from '#lib/content.ts';

	interface Props {
		title?: string;
		description?: string;
		noindex?: boolean;
	}

	let { title, description = site.description, noindex = false }: Props = $props();

	const fullTitle = $derived(
		title ? `${title} — ${site.title}` : `${site.title} — ${site.tagline}`
	);
	const canonical = $derived(`${site.url}${page.url.pathname === '/' ? '' : page.url.pathname}`);
	const image = `${site.url}/logo512.png`;
</script>

<svelte:head>
	<title>{fullTitle}</title>
	<meta name="description" content={description} />
	{#if noindex}
		<meta name="robots" content="noindex" />
	{:else}
		<link rel="canonical" href={canonical} />
	{/if}
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content={site.title} />
	<meta property="og:title" content={fullTitle} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={image} />
	<meta name="twitter:card" content="summary" />
</svelte:head>
