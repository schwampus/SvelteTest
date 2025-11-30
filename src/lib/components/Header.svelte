<script lang="ts">
	let {
		title
	}: {
		title: string;
	} = $props();
</script>

<h1>{title}</h1>

<style>
	h1 {
		font-size: 4rem;
		margin: 0;
		padding: 0;
	}
</style>
