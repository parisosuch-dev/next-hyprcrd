import { account } from "@/lib/appwrite/client";
import { ID } from "@/lib/appwrite/client";

// maybe there will be more functionality with this because
//  it seems like having a single line function is bad abstraction
//  maybe i am predicting scale lol
export async function SignUp(email: string, password: string, name: string) {
  const promise = account.create(ID.unique(), email, password, name);

  return promise;
}
