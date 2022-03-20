import { fetchAllUsers, fetchSingleUser } from "@queries";

// returns all users from database
export const getUsers = () => {
  return fetchAllUsers();
};

export const getSingleUser = (email: string) => {
  return fetchSingleUser(email);
}