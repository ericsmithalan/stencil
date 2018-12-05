import { Client } from "./Client";

const client = Client;

if (!client.isRunning) {
    client.isRunning = true;
    client.run();
}

export { client };
