<script lang="ts">
	import type { NovuUI } from "@novu/js/ui";
	import Header from "$lib/components/Header.svelte";

	interface Props {
		novu: NovuUI;
	}

	let { novu }: Props = $props();
</script>

<Header {novu} />

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>
