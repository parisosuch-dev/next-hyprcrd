import { Query, Models, Permission, Role } from "appwrite";
import { databases } from "./client";

const DB_ID = process.env.DB_ID!;
const USER_COLLECTION_ID = process.env.DB_USER_ID!;

const BLACK_LIST_USERNAMES: string[] = [
  "my-account",
  "sign-in",
  "sign-up",
  "settings",
  "create-card",
  "edit-card",
];

export const usernameExists = async (name: string) => {
  // check black listed user names
  if (BLACK_LIST_USERNAMES.includes(name)) {
    return true;
  }
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

export const validateUserName = (username: string): boolean => {
  // check if username matches rules
  if (username.length < 0 || username.length > 30) {
    return false;
  }
  if (!/^[A-Za-z0-9]*$/.test(username)) {
    return false;
  }
  return true;
};

export const addNewUser = async (user: Models.User<Models.Preferences>) => {
  const data = { user_name: user.name };
  try {
    await databases.createDocument(DB_ID, USER_COLLECTION_ID, user.$id, data, [
      Permission.write(Role.user(user.$id)),
    ]);
  } catch (err) {
    console.log(err);
  }
};
