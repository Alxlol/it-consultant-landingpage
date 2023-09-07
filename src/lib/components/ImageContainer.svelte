<script>
	import Paragraph from './Paragraph.svelte';

	export let image = 'https://placehold.co/400x400';
	export let text = '';
	export let secondaryText = '';
</script>

<div class="text-center flex flex-col items-center">
	<img class="mb-4" src={image} alt="" />

	{#if text}
		<Paragraph>{text}</Paragraph>
	{/if}
	{#if secondaryText}
		<Paragraph>{secondaryText}</Paragraph>
	{/if}
</div>
