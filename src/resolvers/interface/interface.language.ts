export interface LanguageCreateInput {
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
