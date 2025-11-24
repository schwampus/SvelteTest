<script lang="ts">
	import type { GearSetup } from '../types';
	export let gearList: GearSetup[];
</script>

{#each gearList as gear}
	<div class="gear-card">
		<h3>{gear.title}</h3>
		<ul>
			{#each gear.items as item}
				<li>{item}</li>
			{/each}
		</ul>
		{#if gear.description}
			<p>{gear.description}</p>
		{/if}
	</div>
{/each}
