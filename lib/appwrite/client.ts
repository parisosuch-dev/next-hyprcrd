import { Client, Account, Databases } from "appwrite";

const client = new Client();

// validate if process env exists before deploying
if (!process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID) {
  throw new Error(
    "Appwrite Project ID Does Not Exist. (NEXT_PUBLIC_APPWRITE_PROJECT_ID)"
  );
}

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID);

// create account

const account = new Account(client);

const databases = new Databases(client);

// export it
export { client, account, databases };
