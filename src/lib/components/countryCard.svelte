<script>
	import { goto } from '$app/navigation';
	import arrow from '$lib/assets/arrow.png';
	export let data;
	const {
		name,
		population,
		region,
		capital,
		flag,
		subregion,
		nativeName,
		topLevelDomain,
		languages,
		currencies,
		borders
	} = data.country;
</script>

<card class="h-full">
	<button
		on:click={() => {goto('/')}}
		class="p-1 translate-y-4 ml-[1.5rem] flex items-center gap-1 bg-white rounded-md dark:bg-[#2B3743] dark:text-white font-bold"
		><img src={arrow} alt={arrow} />Back</button
	>
	<section class="block sm:flex dark:text-white mt-4">
		<div class="flex-1 m-4 p-2">
			<img src={flag} alt={name} />
		</div>
		<div class="flex-1 m-4 p-2">
			<h1 class="font-black text-2xl my-5">{name}</h1>
			<div class="block md:flex md:gap-20">
				<div class="font-bold my-3">
					<h2>Native name: <span class="font-semibold">{nativeName}</span></h2>
					<h2>Population: <span class="font-semibold">{population}</span></h2>
					<h2>Region: <span class="font-semibold">{region}</span></h2>
					<h2>Subregion: <span class="font-semibold">{subregion}</span></h2>
					<h2>Capital: <span class="font-semibold">{capital}</span></h2>
				</div>
				<div class="font-bold my-5">
					<h2>Top level domain: <span class="font-semibold">{topLevelDomain}</span></h2>
					<h2>
						Currencies: {#each currencies as currency}
							<span class="font-semibold">{currency.code} </span>
						{/each}
					</h2>
					<h2>
						Languages: {#each languages as language}
							<span class="font-semibold">{language.name} </span>
						{/each}
					</h2>
				</div>
			</div>
			<div>
				<span class="font-bold">Borders:</span>
				<div class="flex">
					{#if !borders}
						<span class="bg-white py-1 px-2 m-2 text-xs dark:bg-[#2B3743]">Not found!</span>
					{:else}
						{#each borders as country}
							<span class="bg-white py-1 px-2 m-2 text-xs dark:bg-[#2B3743]">{country}</span>
						{/each}
					{/if}
				</div>
			</div>
		</div>
	</section>
</card>
