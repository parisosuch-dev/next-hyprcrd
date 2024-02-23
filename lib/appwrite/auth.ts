import { account } from "@/lib/appwrite/client";
import { ID } from "@/lib/appwrite/client";

export async function SignUp(email: string, password: string, name: string) {
  const promise = account.create(ID.unique(), email, password, name);

  return promise;
}
