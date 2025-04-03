import type { Novu } from "@novu/api";
import type { SubscriberResponseDto } from "@novu/api/models/components";

// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			novu: {
				client: Novu;
				subscriber: SubscriberResponseDto;
			};
		}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};
