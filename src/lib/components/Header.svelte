<script lang="ts">
	import type { NovuUI } from "@novu/js/ui";

	import { onMount } from "svelte";
	import { browser } from "$app/environment";

	interface Props {
		[key: string]: any;
		novu: NovuUI;
	}

	let { novu, ...props }: Props = $props();

	let notifications: HTMLElement;
	onMount(() => {
		if (browser)
			novu.mountComponent({
				name: "Inbox",
				props: {},
				element: notifications,
			});
	});
</script>

<header {...props}>
	<p>This is my header</p>
	<div id="notification-inbox" bind:this={notifications}></div>
</header>

<style>
	header {
		background-color: #800;
		color: #fff;
		padding: 1rem;
	}

	p {
		font-size: 1.5rem;
		font-weight: bold;
	}
</style>
