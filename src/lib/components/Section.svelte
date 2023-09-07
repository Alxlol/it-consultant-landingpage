<script>
	export let backgroundImage = false;
	export let topGradient = false;
</script>

<section
	class="min-h-screen flex justify-center items-center bg-dark-blue px-12 lg:px-28
		{backgroundImage ? 'background-image' : ''} {topGradient ? 'top-gradient' : ''}"
>
	<slot />
</section>

<style>
	.background-image {
		background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(29, 37, 73, 1)),
			url('../assets/bg_img.jpg');

		background-size: cover;
	}

	.top-gradient {
		background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(29, 37, 73, 1)),
			linear-gradient(to top, rgba(255, 255, 255, 0), rgba(29, 37, 73, 1)),
			url('../assets/bg_img.jpg');

		background-size: cover;
	}
</style>
