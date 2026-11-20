<script lang="ts">
	import { callToAction } from '#lib/content.ts';
	import { reveal } from '#lib/reveal.ts';
</script>

<section id="start" class="px-4 py-16 sm:px-6">
	<div
		class="cta-panel mx-auto max-w-240 overflow-hidden rounded-4xl border border-line-strong px-6 py-12 text-center sm:px-8 sm:py-16"
	>
		<div class="flex flex-col items-center gap-6" data-reveal {@attach reveal}>
			<p
				class="inline-flex items-center gap-2 rounded-full border border-line-strong bg-white/4 px-3.5 py-1.5 text-sm font-medium text-muted"
			>
				<span class="size-1.75 rounded-full bg-event shadow-[0_0_0_4px_rgb(16_185_129/0.18)]"
				></span>
				{callToAction.eyebrow}
			</p>
			<h2
				class="bg-gradient-spectrum text-gradient pb-[0.08em] text-section leading-[1.02] font-extrabold tracking-display"
			>
				{callToAction.headline}
			</h2>
			<p class="max-w-136 text-lg text-muted">{callToAction.subheadline}</p>
			<a href={callToAction.primary.href} class="btn btn-primary btn-lg mt-2 max-sm:w-full">
				{callToAction.primary.label}
				<span aria-hidden="true">→</span>
			</a>
		</div>
	</div>
</section>

<style>
	.cta-panel {
		background:
			radial-gradient(40rem 20rem at 50% 0%, rgb(89 191 224 / 0.16), transparent 70%),
			radial-gradient(30rem 16rem at 50% 100%, rgb(223 76 149 / 0.14), transparent 70%),
			var(--color-surface);
	}
</style>
