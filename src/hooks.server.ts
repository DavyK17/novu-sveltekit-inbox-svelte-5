import type { Handle } from "@sveltejs/kit";
import type { SubscriberResponseDto } from "@novu/api/models/components";

import { Novu } from "@novu/api";
import { sequence } from "@sveltejs/kit/hooks";

import { env } from "$env/dynamic/private";

// Novu
export const novuHandle: Handle = async ({ event, resolve }) => {
	// Create subscriber
	const subscriber: SubscriberResponseDto = {
		subscriberId: "ab4cd89d-3b55-4c96-b6fe-7f75c7817c30",
		firstName: "John",
		lastName: "Test",
		phone: "254712345678",
		timezone: "Africa/Nairobi",
		locale: "en_KE",
		data: { pseudonym: "JDtest" },
		organizationId: "",
		environmentId: "",
		deleted: false,
		createdAt: new Date().toISOString(),
		updatedAt: new Date().toISOString(),
	};

	// Initialise Novu client and subscriber
	const client = new Novu({ secretKey: env.NOVU_SECRET_KEY });
	event.locals.novu = { client, subscriber };

	// Return resolved event
	return resolve(event);
};

// Handlers
export const handle = sequence(novuHandle);
export const handleError = ({ error }) => {
	console.error("An unexpected server error occurred.", error);
	return { message: "An unexpected server error occurred. Kindly try again." };
};
