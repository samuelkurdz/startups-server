import { addNewUser, getSingleUser, getUsers } from "@controllers"
import { CreateUserPayload, SingleUserQuery, } from "@interfaces";
import { Request } from "express";

export const usersResolvers = {
  users: () => {
    return getUsers();
  },

  user: ({ email }: SingleUserQuery, context: any) => {
    console.log(context.user.isAuth);
    return getSingleUser(email);
  },

  newUser: ({ payload }: CreateUserPayload) => {
    const { email, user_name, first_name, last_name, password } = payload;
    return addNewUser({ email, user_name, first_name, last_name, password });
  }
}