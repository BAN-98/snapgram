import { Account, Avatars, Client, Databases, Storage } from "appwrite"

export const appWriteConfig = {
    projectId: '661d2198ebbd7a7bb6a0',
    url:'https://cloud.appwrite.io/v1',
}


export const client = new Client();
client.setProject(appWriteConfig.projectId);

client.setEndpoint(appWriteConfig.url);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);