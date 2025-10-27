import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({
  id: "Sansei",
  signingKey: process.env.INNGEST_SIGNING_KEY,
});
