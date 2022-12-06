export interface CourseCreateInput {
  course: string;
  graduation: string;
  mastersDegree: string;
}

export interface CourseUpdateInput {
  id: number;
  course: string;
  graduation: string;
  mastersDegree: string;
}
export interface CourseDeleteInput {
  id: number;
}
