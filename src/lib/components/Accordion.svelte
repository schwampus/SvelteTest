<script lang="ts">
	type Item = {
		title: string;
		content: string;
	};

	interface $$Props {
		items: Item[];
	}

	let { items = [] }: $$Props = $props();

	let openIndex = $state(-1);

	function openClose(i: number) {
		openIndex = openIndex === i ? -1 : i;
	}
</script>

<aside class="accordion">
	{#each items as item, i}
		{@render accordionItem({
			title: item.title,
			content: item.content,
			isOpen: openIndex === i,
			openClose: () => openClose(1),
			index: i
		})}
	{/each}
</aside>

{#snippet accordionItem(props: {
  title: string;
  content: string;
  isOpen: boolean;
  openClose: () => void;
  index: number
})}
	<div data-test-id={`accordion-item-${props.index}`}>
		<button onclick={props.openClose} aria-expanded={props.isOpen}>
			{props.title}
			<span>{props.isOpen ? 'up' : 'down'}</span>
		</button>
		{#if props.isOpen}
			<div class="content">{props.content}</div>
		{/if}
	</div>
{/snippet}
