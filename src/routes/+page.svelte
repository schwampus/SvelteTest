<script lang="ts">
	import { goto } from '$app/navigation';
	import RadioButtonGroup from '../components/RadioButtonGroup.svelte';
	import type { RadioOption } from '../types';
	import BooleanToggle from '../components/BooleanToggle.svelte';
	import type { GearSetup } from '../types';
	import { generateGearSetups } from '../gearGenerator';

	let selectedSport = 'Ski';
	const sportOptions: RadioOption[] = [
		{ label: 'Ski', value: 'Ski' },
		{ label: 'Snowboard', value: 'Snowboard' }
	];

	function handleSportChange(choice1: string) {
		selectedSport = choice1;
	}

	let selectedTerrain = 'Piste';
	const terrainOptions: RadioOption[] = [
		{ label: 'Piste', value: 'Piste' },
		{ label: 'Off-Piste', value: 'Off-Piste' },
		{ label: 'Forest', value: 'Forest' },
		{ label: 'Park', value: 'Park' },
		{ label: 'Beginner Area', value: 'Beginner Area' }
	];

	function handleTerrainChange(choice2: string) {
		selectedTerrain = choice2;
	}

	let isSunny: boolean = true;

	function handleSunnyChange(sunny: boolean) {
		isSunny = sunny;
	}

	let hasSnowed: boolean = false;

	function handleHasSnowedChange(snowy: boolean) {
		hasSnowed = snowy;

		if (!snowy) snowAmount = '';
	}

	let snowAmount: string = '';
	const snowAmountOptions: { label: string; value: string }[] = [
		{ label: 'Less than 5 cm', value: 'under5' },
		{ label: '5–15 cm', value: '5to15' },
		{ label: 'Over 15 cm', value: 'over15' }
	];

	let gearResults = [];

	let toggleGear: boolean = false;

	function showGear(show: boolean) {
		toggleGear = show;
	}

	function handleShowGear() {
		gearResults = generateGearSetups({
			selectedSport,
			selectedTerrain,
			isSunny,
			hasSnowed,
			snowAmount
		});
		toggleGear = true;
	}

	function goAbout() {
		goto('/about');
	}
</script>

<main class="app-container">
	<header class="header-card">
		<h1>GEAR.IO</h1>
		<h4>Your digital decider on what gear to use today.</h4>
	</header>
	<h3>
		The robot that will help you pick gear needs some basic info about your plans for the day and
		what the weather is like.
	</h3>

	<section class="question-card">
		<RadioButtonGroup
			name="sport"
			options={sportOptions}
			selected={selectedSport}
			label="⛷️ What sport are you in to? 🏂"
			onChange={handleSportChange}
		/>
	</section>
	<section class="question-card">
		<RadioButtonGroup
			name="terrain"
			options={terrainOptions}
			selected={selectedTerrain}
			label="Where are you going to do most of your riding?"
			onChange={handleTerrainChange}
		/>
	</section>

	<section class="question-card">
		<BooleanToggle label="☀️ Is the sun out?" value={isSunny} onChange={handleSunnyChange} />
		<p>{isSunny ? 'Yes, its lovely 😍' : 'No 😔'}</p>
	</section>
	<section class="question-card">
		<BooleanToggle
			label="❄️Has it snowed recently?"
			value={hasSnowed}
			onChange={handleHasSnowedChange}
		/>
		<p>{hasSnowed ? 'Yes!!!! 😍' : 'No 😔'}</p>

		{#if hasSnowed}
			<label for="snowAmount"><h2>How much has it snowed?</h2></label>
			<select bind:value={snowAmount} id="snowAmount">
				<option value="" disabled selected>How many cms?</option>
				{#each snowAmountOptions as opt}
					<option value={opt.value}>{opt.label}</option>
				{/each}
			</select>
		{/if}
	</section>
	<button on:click={() => showGear(!toggleGear)} class="gear-btn">
		{toggleGear ? 'HIDE MY GEAR' : 'SHOW ME MY GEAR'}
	</button>

	{#if toggleGear}
		{#each generateGearSetups( { selectedSport, selectedTerrain, isSunny, hasSnowed, snowAmount } ) as gear}
			<section class="gear-card">
				<h3>{gear.title}</h3>
				<ul>
					{#each gear.items as item}
						<li>{item}</li>
					{/each}
				</ul>
				{#if gear.description}
					<p>{gear.description}</p>
				{/if}
			</section>
		{/each}
	{/if}

	<button on:click={goAbout} class="bottom-btn">READ MORE</button>
</main>

<style>
	.app-container {
		max-width: 720px;
		margin: 40px auto;
		background: #363537;
		border-radius: 1.2rem;
		box-shadow: 0 6px 32px rgba(0, 0, 0, 0.08);
		padding: 32px 22px;
	}

	.header-card {
		text-align: center;
		margin-bottom: 2rem;
	}
	.question-card {
		background: #03313f;
		border-radius: 1rem;
		padding: 24px 18px;
		margin-bottom: 1.5rem;
		box-shadow: 0 1px 6px rgba(0, 0, 0, 0.05);
		text-align: center;
	}

	.gear-card {
		background: #fdfcdc;
		color: #03313f;
		border-radius: 1em;
		box-shadow: 0 2px 18px rgba(0, 0, 0, 0.07);
		padding: 22px;
		margin-top: 2rem;
	}

	.gear-card h3 {
		color: #03313f;
		font-weight: bold;
		margin-bottom: 0.5em;
	}
	.gear-card ul {
		margin: 0;
		padding-left: 1.3em;
	}

	.gear-btn {
		margin-top: 60px;
		margin-bottom: 10px;
		padding: 0.5em 2em;
		font-size: 1rem;
		font-weight: 800;
		background-color: #ed7d3a;
		color: #363537;
		border-radius: 20px;
		border: none;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		cursor: pointer;
		width: fit-content;
		text-align: center;
	}

	.gear-btn:hover {
		background-color: #fb994e;
	}
	.bottom-btn {
		margin-top: 60px;
		margin-bottom: 10px;
		padding: 0.5em 2em;
		font-size: 1rem;
		font-weight: 800;
		background-color: #ef2d56;
		color: white;
		border-radius: 20px;
		border: none;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		cursor: pointer;
		width: fit-content;
		text-align: center;
	}

	.bottom-btn:hover {
		background-color: #f8426a;
	}
	h2 {
		color: #ed7d3a;
		font-weight: 800;
		text-shadow: #363537 2px 2px;
	}
</style>
