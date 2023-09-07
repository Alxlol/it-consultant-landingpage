<script>
	import Paragraph from './Paragraph.svelte';

	export let image = 'https://placehold.co/400x400';
	export let text = '';
	export let secondaryText = '';

	//Observer
	import IntersectionObserver from 'svelte-intersection-observer';
	let element;
	let intersecting;
</script>

<header class:intersecting>
	{intersecting ? console.log('Element is in view') : console.log('Element is not in view')}
</header>
<IntersectionObserver {element} bind:intersecting>
	<div bind:this={element} class="text-center flex flex-col items-center">
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
</IntersectionObserver>
