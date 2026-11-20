<script lang="ts">
	import { APP_URL, nav, site } from '#lib/content.ts';

	let scrolled = $state(false);
</script>

<svelte:window onscroll={() => (scrolled = window.scrollY > 8)} />

<header
	class={[
		'sticky top-0 z-50 border-b transition-colors duration-200',
		scrolled
			? 'border-line bg-bg/72 backdrop-blur-[14px] backdrop-saturate-[1.6]'
			: 'border-transparent'
	]}
>
	<nav class="mx-auto flex max-w-300 items-center gap-8 px-6 py-4">
		<a
			href="/"
			class="inline-flex items-center gap-2.5 text-xl font-extrabold tracking-[-0.03em]"
			aria-label="{site.title} home"
		>
			<img src="/logo.svg" alt="" width="30" height="30" class="size-7.5" />
			<span>{site.title}</span>
		</a>
		<div class="ml-auto hidden gap-8 md:flex">
			{#each nav as link (link.href)}
				<a
					href={link.href}
					class="text-sm font-medium text-muted transition-colors hover:text-text"
				>
					{link.label}
				</a>
			{/each}
		</div>
		<a href={APP_URL} class="btn btn-primary ml-auto px-4.5 md:ml-0">Open mefinx</a>
	</nav>
</header>
