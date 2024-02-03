<script>
    export let data
    export let name
    export let flag
    export let population
    export let region
    export let capital
</script>

<card class="dark:bg-[#2B3743] dark:text-white">
    <li class="rouded-xl shadow-lg">
        <a href="/name/{name}">
            <div class="h-full">
                <img src={flag} alt={name} class="object-contain sm:object-cover w-full h-[200px]"/>
                <div class="p-2">
                    <h1 class="font-black text-xl my-2">{name}</h1>
                    <div class="my-2">
                        <h3><span class=" font-bold">Population:</span> {population}</h3>
                        <h3><span class=" font-bold">Region:</span> {region}</h3>
                        <h3><span class=" font-bold">Capital:</span> {capital}</h3>
                    </div>
                </div>
            </div>
        </a>
    </li>
</card>