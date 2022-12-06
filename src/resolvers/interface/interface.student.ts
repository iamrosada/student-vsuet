import { LanguageCreateInput } from "./interface.language";
import { CourseCreateInput } from "./interface.course";
export interface StudentCreateInput {
  email: string;
  telephone: string;
  IdStudent: string;
  firstName: string;
  lastName: string;

  ageStart: string;
  ageFinish: string;
  country: string;

  whereLive: string;
  fullNameInLatin: string;
  diplomIsRed: boolean;

  whereDidThePreparatory: string;
  group: string;

  languages: LanguageCreateInput;
  courses: CourseCreateInput;
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
  whereLive: string;
  fullNameInLatin: string;
  diplomIsRed: boolean;

  whereDidThePreparatory: string;
  group: string;
  language: [LanguageCreateInput];
  course: [CourseCreateInput];
}
export interface StudentDeleteInput {
  id: number;
}
