'use client';

import CategoryControlRow from '@/components/admin/shared/CategoryControlRow';
import SubCategoriesHeader from '@/components/admin/shared/SubCategoriesHeader';
import type { CategoryItem, SubCategoryItem } from '@/lib/admin/mockCategoryControlData';

type CategoryAccordionItemProps = {
  category: CategoryItem;
  isLast: boolean;
  onCategoryToggle: (enabled: boolean) => void;
  onCategoryExpandToggle: () => void;
  onSubCategoriesExpandToggle: () => void;
  onSubCategoryToggle: (subCategoryId: string, enabled: boolean) => void;
};

export default function CategoryAccordionItem({
  category,
  isLast,
  onCategoryToggle,
  onCategoryExpandToggle,
  onSubCategoriesExpandToggle,
  onSubCategoryToggle,
}: CategoryAccordionItemProps) {
  return (
    <div className="flex flex-col gap-[18px]">
      <CategoryControlRow
        label={category.name}
        enabled={category.enabled}
        onToggle={onCategoryToggle}
        toggleSize="md"
        showExpand
        expanded={category.isExpanded}
        onExpandToggle={onCategoryExpandToggle}
      />

      {category.isExpanded ? (
        <>
          <SubCategoriesHeader
            expanded={category.subCategoriesExpanded}
            onExpandToggle={onSubCategoriesExpandToggle}
          />

          {category.subCategoriesExpanded
            ? category.subCategories.map((subCategory: SubCategoryItem) => (
                <CategoryControlRow
                  key={subCategory.id}
                  label={subCategory.name}
                  enabled={subCategory.enabled}
                  onToggle={(enabled) => onSubCategoryToggle(subCategory.id, enabled)}
                  toggleSize="sm"
                  labelClassName="text-sm font-normal leading-5 text-[#021326]"
                  paddingClassName="pl-7 pr-0 sm:pr-4"
                />
              ))
            : null}
        </>
      ) : null}

      {!isLast ? <div className="h-px w-full bg-[#EAECF0]" /> : null}
    </div>
  );
}
