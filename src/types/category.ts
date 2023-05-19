export interface categoryInfo {
  category: string;
  subcategories: subCategoryInfo[];
}

export interface subCategoryInfo {
  id: number;
  subcategory: string;
  checklist: string;
  options: string[];
  isDisable: boolean;
}
