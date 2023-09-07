<script>
	import Paragraph from './Paragraph.svelte';

	export let image = 'https://placehold.co/400x400';
	export let text = '';
	export let secondaryText = '';

	//Observer
	import IntersectionObserver from 'svelte-intersection-observer';
	import { fly } from 'svelte/transition';

	let node;
</script>

<IntersectionObserver once element={node} let:intersecting>
	<div bind:this={node}>
		{#if intersecting}
			<div
				transition:fly={{ y: 400, delay: 800, duration: 800 }}
				class="text-center flex flex-col items-center"
			>
				<div class="w-72 h-72 2xl:w-96 2xl:h-96 overflow-hidden mb-4">
					<img class="h-full w-full object-cover" src={image} alt="" />
				</div>
				{#if text}
					<Paragraph>{text}</Paragraph>
				{/if}
				{#if secondaryText}
					<Paragraph italic="true">{secondaryText}</Paragraph>
				{/if}
			</div>
		{/if}
	</div>
</IntersectionObserver>
