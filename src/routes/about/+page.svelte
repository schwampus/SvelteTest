<script lang="ts">
	import { goto } from '$app/navigation';

	function goHome() {
		goto('/');
	}
</script>

<main>
	<button on:click={goHome}>Go back to Home</button>
	<h1>I chose to use svelte in this project to learn it.</h1>
	<h2>It's similar to vue, using script, html and scoped styles in the same file.</h2>
	<h3>The big change is how logic is built and used.</h3>
</main>

<style>
	main {
		box-sizing: border-box;
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: #ed7d3a;
		color: #363537;
		padding: 0 80px 0 80px;
	}

	h1 {
		font-size: 6rem;
	}
	h2 {
		font-size: 4rem;
	}
	h3 {
		font-size: 2rem;
	}
</style>
