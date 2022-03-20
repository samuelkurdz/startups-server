import { postgresClient } from "@database";
import { CreateUser, ResponsePayload, User } from "@interfaces";

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

/** create new user onto database */
export const createUser = async (
  { email, first_name, last_name, password, user_name }: CreateUser
): Promise<ResponsePayload<any>> => {

  try {
    const data = await postgresClient.query<User>(
      `INSERT INTO users
        (user_name, first_name, last_name, email, password)
      VALUES
        ('${user_name}', '${first_name}', '${last_name}', '${email}', '${password}');
      `
    );
    return {
      message: 'new user created successfully',
      status: 'success',
      data: [],
    }
  } catch (error) {
    return {
      message: 'error creating new user',
      status: 'error',
      data: [],
    }
  }
}