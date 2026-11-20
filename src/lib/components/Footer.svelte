<script lang="ts">
	import { footerColumns, site } from '#lib/content.ts';

	const year = new Date().getFullYear();
</script>

<footer class="mt-16 border-t border-line bg-linear-to-b from-transparent to-white/2">
	<div class="mx-auto grid max-w-300 gap-12 px-6 pt-16 pb-12 md:grid-cols-[1fr_2fr]">
		<div>
			<span class="inline-flex items-center gap-2.5 text-lg font-extrabold tracking-[-0.03em]">
				<img src="/logo.svg" alt="" width="26" height="26" class="size-6.5" />
				<span>{site.title}</span>
			</span>
			<p class="mt-4 text-sm text-muted">{site.tagline}</p>
		</div>
		<div class="grid grid-cols-2 gap-8 sm:grid-cols-3">
			{#each footerColumns as column (column.heading)}
				<div>
					<h4 class="mb-4 text-xs font-bold tracking-[0.12em] text-faint uppercase">
						{column.heading}
					</h4>
					{#each column.links as link (link.href)}
						<a
							href={link.href}
							class="block py-1 text-sm text-muted transition-colors hover:text-text"
						>
							{link.label}
						</a>
					{/each}
				</div>
			{/each}
		</div>
	</div>
	<div
		class="mx-auto flex max-w-300 flex-col items-center justify-between gap-4 border-t border-line p-6 text-center text-sm text-faint md:flex-row md:text-left"
	>
		<p>&copy; {year} {site.title}</p>
	</div>
</footer>
