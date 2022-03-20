import { hashUserPassword } from "@helpers";
import { CreateUser, User } from "@interfaces";
import { createUser, fetchAllUsers, fetchSingleUser } from "@queries";

// returns all users from database
export const getUsers = () => {
  return fetchAllUsers();
};

export const getSingleUser = (email: string) => {
  return fetchSingleUser(email);
}

export const addNewUser = async (payload: CreateUser) => {
  const hashedPassword = await hashUserPassword(payload.password);
  const hashedPasswordPayload: CreateUser = { ...payload, password: hashedPassword };
  return createUser(hashedPasswordPayload);
}