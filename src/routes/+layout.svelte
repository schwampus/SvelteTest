<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />

	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link href="https://fonts.googleapis.com/css2?family=Prompt&display=swap" rel="stylesheet" />
</svelte:head>

{@render children()}

<style lang="postcss" global>
	:global(html),
	:global(body) {
		margin: 0;
		padding: 0;
		font-family: 'Prompt', system-ui, sans-serif;
	}
</style>
