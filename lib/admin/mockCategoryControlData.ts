export type SubCategoryItem = {
  id: string;
  name: string;
  enabled: boolean;
};

export type CategoryItem = {
  id: string;
  name: string;
  enabled: boolean;
  isExpanded: boolean;
  subCategoriesExpanded: boolean;
  subCategories: SubCategoryItem[];
};

export const defaultCategories: CategoryItem[] = [
  {
    id: 'cleaning',
    name: 'Cleaning',
    enabled: true,
    isExpanded: true,
    subCategoriesExpanded: true,
    subCategories: [
      { id: 'home-cleaning', name: 'Home Cleaning', enabled: true },
      { id: 'gardening', name: 'Gardening', enabled: true },
      { id: 'dusting', name: 'Dusting', enabled: false },
    ],
  },
  {
    id: 'laundry',
    name: 'Laundry',
    enabled: false,
    isExpanded: true,
    subCategoriesExpanded: true,
    subCategories: [
      { id: 'laundry-dusting-1', name: 'Dusting', enabled: false },
      { id: 'laundry-dusting-2', name: 'Dusting', enabled: false },
    ],
  },
  {
    id: 'plumbing',
    name: 'Plumbing',
    enabled: true,
    isExpanded: true,
    subCategoriesExpanded: false,
    subCategories: [],
  },
];
