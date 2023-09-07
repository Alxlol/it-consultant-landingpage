<script>
	import { onMount } from 'svelte';
	import Section from '../../lib/components/Section.svelte';
	import { fly } from 'svelte/transition';
	let ready = false;
	onMount(() => {
		ready = true;
		console.log('hey');
	});
</script>

<Section backgroundImage="true">
	{#if ready}
		<form
			transition:fly={{ y: 600, duration: 500 }}
			class="flex flex-col gap-4 rounded-xl w-1/3 bg-dark-blue p-4"
			action=""
		>
			<input class="p-4 rounded-xl" placeholder="Enter your name" type="text" />
			<input class="p-4 rounded-xl" placeholder="Email" type="email" />
			<textarea
				class="p-4 rounded-xl"
				placeholder="Leave a message"
				name=""
				id=""
				cols="30"
				rows="10"
			/>
			<div class="flex gap-4 items-center justify-center">
				<button class="bg-blue-500 hover:bg-blue-400 py-4 px-8 text-white text-xl rounded-md"
					><a href="/">Back</a></button
				>
				<button class="bg-blue-500 hover:bg-blue-400 py-4 px-8 text-white text-xl rounded-md"
					>Submit</button
				>
			</div>
		</form>
	{/if}
</Section>
