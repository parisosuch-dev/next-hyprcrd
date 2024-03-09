import { Query, Models, Permission, Role } from "appwrite";
import { databases } from "./client";

const DB_ID = process.env.NEXT_PUBLIC_DB_ID!;
const USER_COLLECTION_ID = process.env.NEXT_PUBLIC_DB_USER_ID!;

export const usernameExists = async (name: string) => {
  // query db for user name
  const docs: Models.DocumentList<Models.Document> =
    await databases.listDocuments(DB_ID, USER_COLLECTION_ID, [
      Query.equal("user_name", name),
    ]);

  // if the total of the query is zero, it does not
  if (docs.total === 0) {
    return false;
  }
  return true;
};

export const addNewUser = async (user: Models.User<Models.Preferences>) => {
  // TODO: add a new user to the user collection
  const data = { user_name: user.name };
  try {
    await databases.createDocument(DB_ID, USER_COLLECTION_ID, user.$id, data, [
      Permission.write(Role.user(user.$id)),
    ]);
  } catch (err) {
    console.log(err);
  }
};