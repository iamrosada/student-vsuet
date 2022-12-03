export interface StudentCreateInput {
  email: string;
  telephone: string;
  IdStudent: string;
  firstName: string;
  lastName: string;

  ageStart: string;
  ageFinish: string;
  country: string;
  language: string[];
  whereLive: string;
  fullNameInLatin: string;
  diplomIsRed: boolean;

  whereDidThePreparatory: string;
  group: string;
  course: string[];
}
export interface StudentLoginInput {
  IdStudent?: string;
  password?: string;
}

export interface StudentUpdateInput {
  id: number;
  email: string;
  telephone: string;
  IdStudent: string;
  firstName: string;
  lastName: string;

  ageStart: string;
  ageFinish: string;
  country: string;
  language: string[];
  whereLive: string;
  fullNameInLatin: string;
  diplomIsRed: boolean;

  whereDidThePreparatory: string;
  group: string;
  course: string[];
}
export interface StudentDeleteInput {
  id: number;
}
