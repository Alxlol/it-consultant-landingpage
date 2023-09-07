<script>
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fade } from 'svelte/transition';

	let node;
</script>

<IntersectionObserver once element={node} let:intersecting>
	<div bind:this={node}>
		{#if intersecting}
			<div transition:fade={{ delay: 400, duration: 1000 }}>
				<slot />
			</div>
		{/if}
	</div>
</IntersectionObserver>
