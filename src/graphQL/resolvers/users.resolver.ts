import { addNewUser, getSingleUser, getUsers } from "@controllers"
import { CreateUserPayload, SingleUserQuery, } from "@interfaces";

export const usersResolvers = {
  users: () => {
    return getUsers();
  },

  user: ({ email }: SingleUserQuery) => {
    return getSingleUser(email);
  },

  newUser: ({ payload }: CreateUserPayload) => {
    const { email, user_name, first_name, last_name, password } = payload;
    return addNewUser({ email, user_name, first_name, last_name, password });
  }
}