import PocketBase from "pocketbase";

const url: string = "http://127.0.0.1:8090/";
const client = new PocketBase(url);
client.autoCancellation(false);

export { client };
