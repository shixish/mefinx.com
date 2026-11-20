<script lang="ts">
	import type { Component } from 'svelte';
	import IconCalendar from '~icons/ph/calendar-dots';
	import IconFunnel from '~icons/ph/funnel';
	import IconGraph from '~icons/ph/graph';
	import IconLock from '~icons/ph/lock-key';
	import IconSearch from '~icons/ph/magnifying-glass';
	import IconPin from '~icons/ph/map-pin';
	import IconSparkle from '~icons/ph/sparkle';
	import IconUndo from '~icons/ph/arrow-counter-clockwise';
	import IconOffline from '~icons/ph/wifi-slash';
	import { features, type FeatureIcon } from '#lib/content.ts';
	import { reveal } from '#lib/reveal.ts';

	const icons: Record<FeatureIcon, Component> = {
		graph: IconGraph,
		search: IconSearch,
		filter: IconFunnel,
		pin: IconPin,
		calendar: IconCalendar,
		offline: IconOffline,
		undo: IconUndo,
		sparkle: IconSparkle,
		lock: IconLock
	};

	// Icon tiles cycle through the brand and graph colours so the grid doesn't read as one block.
	const tints = ['#59bfe0', '#df4c95', '#fad34a', '#3b82f6', '#10b981', '#a78bfa'];
</script>

<section id="features" class="py-24">
	<div class="mx-auto max-w-300 px-6">
		<header class="mx-auto mb-16 max-w-180 text-center" data-reveal {@attach reveal}>
			<span class="eyebrow">What it does</span>
			<h2 class="section-headline">{features.headline}</h2>
			<p class="section-subheadline">{features.subheadline}</p>
		</header>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each features.items as feature, index (feature.title)}
				{@const Icon = icons[feature.icon]}
				<div
					class="feature-card relative overflow-hidden rounded-[20px] border border-line p-8"
					data-reveal
					{@attach reveal}
					style="--tint: {tints[index % tints.length]}; --reveal-index: {index % 3}"
				>
					<div
						class="feature-icon mb-6 flex size-11 items-center justify-center rounded-xl text-[1.35rem]"
					>
						<Icon aria-hidden="true" />
					</div>
					<h3 class="mb-2 text-lg font-bold tracking-[-0.015em]">{feature.title}</h3>
					<p class="text-[0.95rem] leading-normal text-muted">{feature.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.feature-card {
		background: linear-gradient(180deg, rgb(255 255 255 / 0.035), rgb(255 255 255 / 0.01));
		transition:
			border-color 200ms ease,
			opacity 600ms ease,
			transform 600ms cubic-bezier(0.2, 0.7, 0.2, 1);
	}

	.feature-card::before {
		content: '';
		position: absolute;
		inset: -40% -40% auto auto;
		width: 70%;
		aspect-ratio: 1;
		background: radial-gradient(
			circle,
			color-mix(in srgb, var(--tint) 30%, transparent),
			transparent 65%
		);
		opacity: 0;
		transition: opacity 300ms ease;
		pointer-events: none;
	}

	.feature-card:hover {
		border-color: color-mix(in srgb, var(--tint) 45%, transparent);
	}

	.feature-card:hover::before {
		opacity: 1;
	}

	.feature-icon {
		color: var(--tint);
		background: color-mix(in srgb, var(--tint) 14%, transparent);
		border: 1px solid color-mix(in srgb, var(--tint) 30%, transparent);
	}
</style>
