import { UserModel } from "../model/user.model";

export async function findUser(email, password) {
    const User = UserModel.find((data) => { return data["email"] == email });

    // If can't find the user we're looking
    if(!User) {
        throw new Error("User Not Found!");
    }

    // If we found the user
    if(User) {
        // Check the password
        if(User["password"] === password) return User;
        else throw new Error("Wrong Password");
    } 
} 