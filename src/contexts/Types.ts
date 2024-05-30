export type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export type Role = "USER" | "ADMIN" | "VIEWER";

export interface IUser {
  id: string;
  username: string;
  password: string;
  lastName?: string;
  role: Role;
  name?: string | null;
  email?: string | null;
  image?: string | null;
}
