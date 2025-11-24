<script lang="ts">
	import type { RadioOption } from '../types';

	export let name: string;
	export let label: string;
	export let options: RadioOption[];
	export let selected: string;
	export let onChange: (value: string) => void;
</script>

<div>
	{#if label}
		<h2>{label}</h2>
	{/if}

	{#each options as option}
		<label>
			<input
				type="radio"
				{name}
				value={option.value}
				checked={option.value === selected}
				on:change={() => onChange(option.value)}
			/>
			{option.label}
		</label>
	{/each}
</div>

<style>
	h2 {
		color: #ed7d3a;
		font-weight: 800;
		text-shadow: #363537 2px 2px;
	}
</style>
