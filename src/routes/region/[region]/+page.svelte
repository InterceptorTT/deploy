<script>
	import Input from '$lib/components/input.svelte';
	import Card from '$lib/components/card.svelte';
	export let data;
	$:region = data.region;
</script>

<Input />

<ul class="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
	{#each region as { name, population, region, capital, flag } (name)}
		<Card {data} {name} {population} {region} {capital} {flag} />
	{/each}
</ul>
