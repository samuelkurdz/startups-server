import { postgresClient } from "@database";
import { User } from "@interfaces";

export const fetchAllUsers = async (): Promise<User[]> => {
  const { rows: users } = await postgresClient.query<User>(`Select * from users`);
  return users;
}

export const fetchSingleUser = async (email: string): Promise<User> => {
  const data = await postgresClient.query<User>(`SELECT * FROM users WHERE email = '${email}'`);
  return data.rows[0];
}
