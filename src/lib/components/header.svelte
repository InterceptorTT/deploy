<script>
	import dark from '../assets/night-mode.png';
	import light from '../assets/sun.png';
	import {base} from "$app/path"
    let isDarkMode = true

	function toggleTheme() {
        const html = document.getElementsByTagName('html')[0];
		html.classList.toggle('dark');    
        isDarkMode = !isDarkMode   
	}
</script>

<header class="flex justify-between p-10 px-8 sm:px-14 dark:text-white">
	<div>
		<h1 class="font-bold text-sm sm:text-lg"><a href="/">Where in the world?</a></h1>
	</div>
	<div>
		<div class="flex items-center gap-1 {isDarkMode ? "block" : "hidden"}">
			<img class="h-3 w-3" src={light} alt={light} />
			<button class="font-bold text-sm" on:click={toggleTheme}>Light mode</button>
		</div>
		<div class="flex items-center gap-1 {isDarkMode ? "hidden" : "block"}">
			<img class="h-3 w-3" src={dark} alt={dark} />
			<button class="font-bold text-sm" on:click={toggleTheme}>Dark mode</button>
		</div>
	</div>
</header>
<div class="h-[2px] bg-gray-300 dark:bg-[#2B3743]"></div>
