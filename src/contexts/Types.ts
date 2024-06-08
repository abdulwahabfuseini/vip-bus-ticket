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

export type FareProps = {
  id?: number;
  from: string;
  arrival: string;
  price: number;
};

export type TicketProps = {
  id?: number;
  departure: string;
  arrival: string;
  schedule?: string;
  type?: string;
  seats?: number;
  time?: string;
  arrivalTime?: string;
  date?: string;
  terminal?: string;
  price: number;
  ticket?: string;
};
