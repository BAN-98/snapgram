import { INewUser } from "@/types";
import { account } from "./config";
import { ID } from "appwrite";

export async function createUserAcount(user: INewUser) {
    try {
        const newAcount = await account.create(
            ID.unique(),
            user.email,
            user.username,
            user.name,
        );
        return newAcount;
    } catch (error) {
        console.log(error);
        return error;
    }
}