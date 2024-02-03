<script>
	import '../app.css';
	export let data;
	import { countries } from '$lib/stores.js';
	import Card from '../lib/components/card.svelte';
	import Input from '../lib/components/input.svelte';
	export let country;
	$: countries.set(data.countries)
	$: countries.subscribe((data) => {
		country = data
	})
</script>

<section>
	<Input />
	<ul class="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
		{#each country as { name, population, region, capital, flag } (name)}
			<Card {data} {name} {population} {region} {capital} {flag} />
		{/each}
	</ul>
</section>
