import { ElementType, ReactNode, CSSProperties } from "react";

export type AccordionProps = {
  children: ReactNode;
  open: boolean;
  className?: string;
  onChange?: () => void;
  color?: string;
  disabled?: boolean;
  customTranslate?: string;
  icon?: ElementType;
  slot?: string;
  style?: CSSProperties;
  title?: string;
  animate?: boolean;
  onClick?: () => void;
  placeholder?: string;
  onPointerEnterCapture?: () => void;
  onPointerLeaveCapture?: () => void;
};

export type AccordionHeaderProps = {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  color?: string;
  disabled?: boolean;
  customTranslate?: string;
  slot?: string;
  style?: CSSProperties;
  title?: string;
  onChange?: () => void;
  key?: string;
  placeholder?: string;
  onPointerEnterCapture?: () => void;
  onPointerLeaveCapture?: () => void;
  type?: string;
};

export type AccordionBodyProps = {
  children: ReactNode;
  className?: string;
  open?: boolean;
};

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

export type PathProps = {
  path: string;
};

export interface Route {
  from: string;
  to: string;
  type: string;
  schedule: {
    date: string;
    time: string;
  }[];
  price: number;
  seats: number;
  arrival: string;
}
