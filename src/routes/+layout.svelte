<script>
	import Header from '../lib/components/header.svelte';
</script>

<main class="h-full">
	<header class="pb-4 dark:bg-[#2B3743]">
		<Header />
	</header>
	<section class="px-14 bg-[#FAFAFA] dark:bg-[#1F2D36]">
		<slot />
	</section>
</main>

