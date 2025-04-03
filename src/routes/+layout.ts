import type { LayoutLoad } from "./$types";
import { NovuUI } from "@novu/js/ui";

export const load: LayoutLoad = async ({
	data: {
		novu: { applicationIdentifier, subscriberId },
	},
}) => {
	// Initialise Novu UI
	const novu = new NovuUI({
		options: {
			applicationIdentifier,
			subscriberId,
		},
	});

	// // Return data
	return { novu };
};
