<script lang="ts">
	import { faq } from '#lib/content.ts';
	import { reveal } from '#lib/reveal.ts';
</script>

<section id="faq" class="py-24">
	<div class="mx-auto grid max-w-300 items-start gap-8 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
		<header class="lg:sticky lg:top-25" data-reveal {@attach reveal}>
			<span class="eyebrow">FAQ</span>
			<h2 class="section-headline">{faq.headline}</h2>
		</header>

		<div
			class="flex flex-col border-t border-line"
			data-reveal
			{@attach reveal}
			style="--reveal-index: 1"
		>
			{#each faq.items as item (item.question)}
				<details class="group border-b border-line" name="faq">
					<summary
						class="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-base font-semibold tracking-[-0.01em] transition-colors hover:text-brand-soft lg:text-lg [&::-webkit-details-marker]:hidden"
					>
						<span>{item.question}</span>
						<svg
							class="size-5 shrink-0 text-muted transition duration-200 group-open:rotate-45 group-open:text-accent"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							aria-hidden="true"
						>
							<path d="M12 5v14M5 12h14" />
						</svg>
					</summary>
					<p class="pr-10 pb-5.5 leading-[1.7] text-muted">{item.answer}</p>
				</details>
			{/each}
		</div>
	</div>
</section>
