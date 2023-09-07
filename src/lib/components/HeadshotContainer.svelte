<script>
	import Headshots from './Headshots.svelte';
</script>

<div class="flex flex-col lg:flex-row gap-10">
	<Headshots
		text="Wilhelm Ballard"
		secondaryText="Chief Operations Officer"
		image="/src/lib/assets/wilhelm.jpg"
		delay="200"
	/>
	<Headshots
		text="Leslie Boatwright"
		secondaryText="Chief Executive Officer"
		image="/src/lib/assets/leslie.jpg"
		delay="600"
	/>
	<Headshots
		text="Viggo Cimmaron"
		secondaryText="Chief Technology Officer"
		image="/src/lib/assets/viggo.jpg"
		delay="1000"
	/>
</div>
