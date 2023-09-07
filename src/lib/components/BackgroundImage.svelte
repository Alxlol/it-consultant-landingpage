<div class="background-image flex-1 hidden lg:block min-h-screen -mx-12 lg:-mx-28 z-0">
	<slot />
</div>

<style>
	.background-image {
		background-image: linear-gradient(to left, rgba(255, 255, 255, 0), rgba(29, 37, 73, 1)),
			url('/Asset_1.png');

		background-size: cover;
	}
</style>
