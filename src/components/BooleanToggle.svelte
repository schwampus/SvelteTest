<script lang="ts">
	export let label: string = 'Yes or No?';
	export let value: boolean;
	export let onChange: (val: boolean) => void;
</script>

<div style="display: flex; flex-direction: column; align-items: center; gap: 1em;">
	<h2>{label}</h2>
	<label class="switch">
		<input type="checkbox" bind:checked={value} on:change={() => onChange(value)} />
		<span class="slider"></span>
	</label>
</div>

<style>
	.switch {
		position: relative;
		display: inline-block;
		width: 40px;
		height: 22px;
	}

	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		transition: 0.4s;
		border-radius: 22px;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 18px;
		width: 18px;
		left: 2px;
		bottom: 2px;
		background-color: white;
		transition: 0.4s;
		border-radius: 50%;
	}

	input:checked + .slider {
		background-color: #ed7d3a;
	}

	input:checked + .slider:before {
		transform: translateX(18px);
	}

	h2 {
		color: #ed7d3a;
		font-weight: 800;
		text-shadow: #363537 2px 2px;
	}
</style>
