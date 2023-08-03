
import { TriggerClient } from "@trigger.dev/sdk";

export const client = new TriggerClient({
  id: "app-dirsetup",
  apiKey: process.env.TRIGGER_API_KEY,
  apiUrl: process.env.TRIGGER_API_URL,
});
  