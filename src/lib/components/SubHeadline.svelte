<script>
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fade, fly } from 'svelte/transition';

	let node;
</script>

<IntersectionObserver once element={node} let:intersecting>
	<div bind:this={node}>
		{#if intersecting}
			<p
				transition:fade={{ duration: 800 }}
				class="text-white text-6xl font-semibold underline decoration-accent underline-offset-[16px] my-32"
			>
				<slot />
			</p>
		{/if}
	</div>
</IntersectionObserver>
