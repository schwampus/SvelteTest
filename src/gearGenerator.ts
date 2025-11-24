import type { GearSetup } from './types';

export interface GearInputs {
  selectedSport: string;
  selectedTerrain: string;
  isSunny: boolean;
  hasSnowed: boolean;
  snowAmount: string;
}

export function generateGearSetups(inputs: GearInputs): GearSetup[] {
  const { selectedSport, selectedTerrain, isSunny, hasSnowed, snowAmount } = inputs;

  const setups: GearSetup[] = [];



		if (
			selectedSport === 'Ski' &&
			selectedTerrain === 'Piste' &&
			isSunny &&
			(!hasSnowed || snowAmount === 'under5')
		) {
			setups.push({
				title: 'Classic Piste Setup',
				items: [
					'All-mountain skis, our pro would recommend: Black Crows Serpo ',
					'Light shell jacket',
					'UV sunglasses/goggles',
				],
				description: 'Enjoy quick turns and faster speeds on well-groomed slopes.'
			});
		}

		if (
			selectedSport === 'Snowboard' &&
			selectedTerrain === 'Piste' &&
			isSunny &&
			(!hasSnowed || snowAmount === 'under5')
		) {
			setups.push({
				title: 'Classic Piste Setup',
				items: [
					'All-mountain board, our pro would recommend: Salomon Super 8 ',
					'Light shell jacket',
					'UV sunglasses/goggles',
				],
				description: 'Enjoy quick turns and faster speeds on well-groomed slopes.'
			});
		}


    if (
			selectedSport === 'Snowboard' &&
			selectedTerrain === 'Off-Piste' &&
			hasSnowed &&
			snowAmount === 'over15'
		) {
			setups.push({
				title: 'Powder Slayer',
				items: [
					'Korua Dart!',
					'Avalanche safety kit',
					'Insulated, waterproof pants',
					'Snow-specific goggles'
				],
				description: 'Deep snow means powder boards and safety gear are essential.'
			});
		}
    if (
			selectedSport === 'Ski' &&
			selectedTerrain === 'Off-Piste' &&
			hasSnowed &&
			snowAmount === 'over15'
		) {
			setups.push({
				title: 'Powder Slashers',
				items: [
					'Armada ARV 16, they are so cool.',
					'Avalanche safety kit',
					'Insulated, waterproof pants',
					'Snow-specific goggles'
				],
				description: 'Deep snow means you need a pair of fattys, these are might fine.'
			});
		}
    if (
			selectedSport === 'Ski' &&
			selectedTerrain === 'Park' 
		) {
			setups.push({
				title: 'Spin Sticks',
				items: [
					'K2 Poacher - sick in the park but can still rip in the pow',
					'Avalanche safety kit',
					'Insulated, waterproof pants',
					'Snow-specific goggles'
				],
				description: 'With this setup you can catch some first tracks in the morning and later on hit up the park and impress some noobs riding the lift.'
			});
		}


    	if (setups.length === 0) {
			setups.push({
				title: 'Default Gear Recommendation',
				items: ['Multi-purpose skis/snowboard', 'Basic safety gear', 'Weather-appropriate clothing']
			});
		}



  return setups;
}




