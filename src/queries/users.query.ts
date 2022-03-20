import { postgresClient } from "@database";
import { User } from "@interfaces";

/** fetch users from database */
export const fetchAllUsers = async (): Promise<User[]> => {
  const { rows: users } = await postgresClient.query<User>(`Select * from users`);
  return users;
}

/** fetch single user from database using email */
export const fetchSingleUser = async (email: string): Promise<User> => {
  const data = await postgresClient.query<User>(`SELECT * FROM users WHERE email = '${email}'`);
  return data.rows[0];
}
export const namas = [];

