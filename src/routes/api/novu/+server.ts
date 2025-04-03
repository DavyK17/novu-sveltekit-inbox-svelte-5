import { Client } from "@novu/framework";
import { serve } from "@novu/framework/sveltekit";

import { env } from "$env/dynamic/private";

// Serve Novu workflows
export const { GET, POST, OPTIONS } = serve({
	workflows: [],
	client: new Client({
		secretKey: env.NOVU_SECRET_KEY,
	}),
});
