<script lang="ts">
	import { hero } from '#lib/content.ts';
	import { reveal } from '#lib/reveal.ts';
</script>

<section class="px-4 py-8 sm:px-6 sm:py-16">
	<div
		class="mx-auto grid max-w-300 items-center gap-12 lg:min-h-[min(78vh,760px)] lg:grid-cols-[1.05fr_1fr] lg:gap-16"
	>
		<div class="flex flex-col gap-6" data-reveal {@attach reveal}>
			<p
				class="inline-flex items-center gap-2 self-start rounded-full border border-line-strong bg-white/4 px-3.5 py-1.5 text-sm font-medium text-muted"
			>
				<span class="size-1.75 rounded-full bg-event shadow-[0_0_0_4px_rgb(16_185_129/0.18)]"
				></span>
				{hero.eyebrow}
			</p>
			<h1
				class="text-gradient-headline pb-[0.08em] text-display leading-[1.02] font-extrabold tracking-display"
			>
				{hero.headline}
			</h1>
			<p class="max-w-136 text-lg text-muted lg:text-xl">{hero.subheadline}</p>
			<div class="mt-2 flex flex-wrap gap-4">
				<a href={hero.primary.href} class="btn btn-primary btn-lg max-sm:flex-[1_1_100%]">
					{hero.primary.label}
					<span aria-hidden="true">→</span>
				</a>
				<a href={hero.secondary.href} class="btn btn-secondary btn-lg max-sm:flex-[1_1_100%]">
					{hero.secondary.label}
				</a>
			</div>
		</div>

		<div class="relative" data-reveal {@attach reveal} style="--reveal-index: 2">
			<div
				class="absolute inset-x-[4%] inset-y-[8%] -z-10 bg-gradient-spectrum opacity-28 blur-[70px]"
			></div>
			<div
				class="hero-frame relative animate-float overflow-hidden rounded-[28px] border border-line-strong shadow-window"
			>
				<img
					src="/hero-visual.svg"
					alt="A graph of people, places and events linked by their relationships"
					width="800"
					height="800"
					class="h-auto w-full"
				/>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-frame {
		background:
			radial-gradient(circle at 1px 1px, rgb(255 255 255 / 0.07) 1px, transparent 0) 0 0 / 22px 22px,
			linear-gradient(180deg, rgb(22 25 32 / 0.9), rgb(10 11 14 / 0.95));
	}
</style>
