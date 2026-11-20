<script lang="ts">
	import './layout.css';
	import Footer from '#lib/components/Footer.svelte';
	import Header from '#lib/components/Header.svelte';
	import type { LayoutProps } from './$types';

	let { children }: LayoutProps = $props();
</script>

<Header />
<main class="min-h-[calc(100vh-200px)]">
	{@render children()}
</main>
<Footer />
