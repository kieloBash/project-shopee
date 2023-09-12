
export interface UserType {
  _id: string;
  name: string;
  email: string;
  image: string;
  role: UserRoles;
  createdAt: Date;
}

export type UserRoles = "user" | "admin";
