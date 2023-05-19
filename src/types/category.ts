export interface categoryInfo {
  category: string;
  subcategories: subCategoryInfo[];
}

export interface subCategoryInfo {
  subcategory: string;
  checklist: string;
  options: string[];
  isDisable: boolean;
}
