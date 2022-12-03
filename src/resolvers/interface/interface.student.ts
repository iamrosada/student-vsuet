export interface StudentCreateInput {
  email: string;
  telephone: string;
  IdStudent: string;
  firstName: string;
  lastName: string;
  password: string;
}
export interface StudentLoginInput {
  IdStudent?: string;
  password?: string;
}

export interface StudentUpdateInput {
  password: string;
  id: number;
  email: string;
  telephone: string;
  IdStudent: string;
  firstName: string;
  lastName: string;
}
export interface StudentDeleteInput {
  id: number;
}
