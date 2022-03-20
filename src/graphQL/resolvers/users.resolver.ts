import { getSingleUser, getUsers } from "@controllers"
import { SingleUserQuery } from "@interfaces";

export const usersResolvers = {
  users: () => {
    return getUsers();
  },

  user: ({email}: SingleUserQuery) => {
    return getSingleUser(email);
  }
}