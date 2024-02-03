<script>
	import { goto } from '$app/navigation';
	import {countries} from "$lib/stores.js"

    function handleInputText(e){
        const value = e.target.value
        goto(`/name/${value.charAt(0).toUpperCase() + value.slice(1)}`)
    }
   
   function handleRegionChange(e){
		/* $countries = countries.filter((country) => country.region === e.target.value) */
		goto(`/region/${e.target.value}`)
   }
</script>

<section class="flex flex-col gap-10 mx-auto sm:flex-row sm:justify-between p-8">
	<input
        autocomplete="on"
		type="text"
		placeholder="Search for a country"
		class="shadow-md shadow-slate-500 rounded-md p-3 dark:bg-[#2B3743] dark:text-white"
        on:change={handleInputText}
	/>

	<select class="p-2 font-semibold px-4 dark:text-white dark:bg-[#2B3743]" on:change={handleRegionChange}>
		<option value="">Find By Region</option>
		<option value="Africa">Africa</option>
		<option value="Americas">America</option>
		<option value="Asia">Asia</option>
		<option value="Europe">Europe</option>
		<option value="Oceania">Oceania</option>
	</select>
</section>
