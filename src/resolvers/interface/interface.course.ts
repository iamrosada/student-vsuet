export interface CourseCreateInput {
  graduation: string;
  mastersDegree: string;
}

export interface CourseUpdateInput {
  id: number;
  graduation: string;
  mastersDegree: string;
}
export interface CourseDeleteInput {
  id: number;
}
