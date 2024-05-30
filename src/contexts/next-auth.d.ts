import NextAuth, { DefaultSession } from "next-auth";
import { Role, IUser } from "@/contexts/Types"; 

declare module "next-auth" {
  interface Session {
    user: IUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user?: IUser;
  }
}

// If the library doesn't provide types
declare module 'auth-library' {
  interface SignInResponse {
    user: {
      role: string;
      // ... other user properties
    };
  }
}

// Accessing the user role:
const userRole = callback.user.role;