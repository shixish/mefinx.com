<script lang="ts">
	import { conversation } from '#lib/content.ts';
	import { reveal } from '#lib/reveal.ts';
</script>

<section id="how" class="py-24">
	<div class="mx-auto grid max-w-300 items-center gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
		<header data-reveal {@attach reveal}>
			<span class="eyebrow">How it works</span>
			<h2 class="section-headline">{conversation.headline}</h2>
			<p class="section-subheadline">{conversation.subheadline}</p>
			<p class="mt-6 border-l-2 border-accent pl-4 text-sm text-muted">{conversation.caption}</p>
		</header>

		<div
			class="overflow-hidden rounded-[20px] border border-line-strong bg-linear-to-b from-surface-raised to-surface shadow-window"
			data-reveal
			{@attach reveal}
			style="--reveal-index: 1"
		>
			<div
				class="relative flex items-center justify-center border-b border-line bg-white/2 px-4 py-2.75"
			>
				<span class="absolute left-4 flex gap-1.5" aria-hidden="true">
					{#each [0, 1, 2] as dot (dot)}
						<i class="size-2.5 rounded-full bg-white/14"></i>
					{/each}
				</span>
				<span class="inline-flex items-center gap-1.5 text-sm font-semibold text-muted">
					<img src="/logo.svg" alt="" width="16" height="16" />
					mefinx
				</span>
			</div>

			<ol class="flex flex-col gap-3 p-6">
				{#each conversation.messages as message, index (index)}
					<li
						class={[
							'max-w-[92%] rounded-[18px] px-4 py-3 text-[0.95rem] leading-normal sm:max-w-[85%]',
							message.speaker === 'you'
								? 'self-end rounded-br-md bg-gradient-brand font-medium text-bg'
								: 'self-start rounded-bl-md border border-line bg-white/5 text-text'
						]}
						data-reveal
						{@attach reveal}
						style="--reveal-index: {index + 1}"
					>
						<span class="sr-only">{message.speaker === 'you' ? 'You:' : 'mefinx:'}</span>
						{message.text}
					</li>
				{/each}
			</ol>

			<div
				class="mx-6 mb-6 flex items-center justify-between rounded-full border border-line bg-black/25 py-2.5 pr-2.5 pl-4 text-sm text-faint"
				aria-hidden="true"
			>
				<span>Tell mefinx about someone…</span>
				<span
					class="grid size-7.5 place-items-center rounded-full bg-gradient-brand font-bold text-bg"
				>
					↑
				</span>
			</div>
		</div>
	</div>
</section>
