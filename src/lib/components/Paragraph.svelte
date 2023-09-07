<script>
	export let italic = false;
</script>

<p class="text-3xl text-white {italic ? 'italic' : ''}">
	<slot />
</p>
