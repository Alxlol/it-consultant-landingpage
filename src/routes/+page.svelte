<script>
	import BackgroundImage from '../lib/components/BackgroundImage.svelte';
	import ButtonPrimary from '../lib/components/ButtonPrimary.svelte';
	import Headline from '../lib/components/Headline.svelte';
	import Headshots from '../lib/components/Headshots.svelte';
	import ImageContainer from '../lib/components/ImageContainer.svelte';
	import Paragraph from '../lib/components/Paragraph.svelte';
	import Section from '../lib/components/Section.svelte';
	import SubHeadline from '../lib/components/SubHeadline.svelte';

	import { goto } from '$app/navigation';

	function bookACall() {
		goto('/book');
	}
</script>

<Section backgroundImage="true">
	<div class="hidden flex-1 lg:block" />
	<div class="flex-1">
		<Headline>
			We do <span class="text-white">IT</span> right.
		</Headline>
		<Paragraph>Jeffries and Madison, IT consultants</Paragraph>
		<ButtonPrimary>Book a call</ButtonPrimary>
	</div>
</Section>

<Section>
	<div class="w-full flex flex-col items-center">
		<SubHeadline>Meet the Team</SubHeadline>
		<div class="flex flex-col lg:flex-row gap-10">
			<Headshots
				text="Wilhelm Ballard"
				secondaryText="Chief Operations Officer"
				image="/src/lib/assets/wilhelm.jpg"
			/>
			<Headshots
				text="Leslie Boatwright"
				secondaryText="Chief Executive Officer"
				image="/src/lib/assets/leslie.jpg"
			/>
			<Headshots
				text="Viggo Cimmaron"
				secondaryText="Chief Technology Officer"
				image="/src/lib/assets/viggo.jpg"
			/>
		</div>
	</div>
</Section>

<Section backgroundImage="true" topGradient="true">
	<div>
		<SubHeadline>Services</SubHeadline>
		<div class="flex flex-col items-center lg:flex-row gap-40">
			<ImageContainer text="Cybersecurity" image="/src/lib/assets/cybersecurity.png" />
			<ImageContainer text="Risk Mitigation" image="/src/lib/assets/riskmitigation.png" />
			<ImageContainer text="IT Strategy Development" image="/src/lib/assets/strategy.png" />
		</div>
	</div>
</Section>
<Section>
	<div class="flex-1">
		<Headline>
			Whatever you need, we can solve <span class="text-white">IT</span>.
		</Headline>
		<Paragraph
			>Book a consultation through
			<br />
			<a class="text-lg lg:text-3xl underline" href="mailto:GreatCompany@gmail.com"
				>GreatCompany@gmail.com</a
			></Paragraph
		>
	</div>
	<BackgroundImage />
</Section>
