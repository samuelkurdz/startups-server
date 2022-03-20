export interface User {
  id: string;
  email: string;
  user_name: string;
  first_name: string;
  last_name: string;
  password: string;
}

export interface CreateUserPayload {
  payload: CreateUser
}
export interface CreateUser {
  email: string;
  user_name: string;
  first_name: string;
  last_name: string;
  password: string;
}

export interface SingleUserQuery {
  email: string
}