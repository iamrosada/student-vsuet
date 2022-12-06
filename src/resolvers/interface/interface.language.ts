export interface LanguageCreateInput {
  language: string;
  nativeLanguage: string;
  otherLanguage: string;
}

export interface LanguageUpdateInput {
  id: number;
  nativeLanguage: string;
  otherLanguage: string;
}
export interface LanguageDeleteInput {
  id: number;
}
