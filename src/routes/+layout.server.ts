import type { LayoutServerLoad } from "./$types";
import { env } from "$env/dynamic/private";

/* Return Novu data from load function */
export const load: LayoutServerLoad = async ({ locals: { novu } }) => ({
	novu: {
		applicationIdentifier: env.NOVU_APP_ID,
		subscriberId: novu.subscriber?.subscriberId,
	},
});
