<script>
	export let handleClick = function () {
		console.log('clickity click');
	};
</script>

<button
	on:click={handleClick}
	class="bg-accent hover:bg-accent-200 text-black underline py-4 px-10 text-xl font-semibold mt-16"
>
	<slot />
</button>
