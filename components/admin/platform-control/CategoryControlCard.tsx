'use client';

import { useState } from 'react';
import Button from '@mui/material/Button';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CategoryAccordionItem from '@/components/admin/platform-control/CategoryAccordionItem';
import { primaryButtonSx } from '@/lib/admin/adminButtonStyles';
import { defaultCategories, type CategoryItem } from '@/lib/admin/mockCategoryControlData';

export default function CategoryControlCard() {
  const [categories, setCategories] = useState<CategoryItem[]>(defaultCategories);

  const updateCategory = (categoryId: string, updater: (category: CategoryItem) => CategoryItem) => {
    setCategories((current) =>
      current.map((category) => (category.id === categoryId ? updater(category) : category)),
    );
  };

  return (
    <section className="flex w-full flex-col gap-[18px] rounded-[23px] border border-[#EAECF0] bg-white p-4 sm:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="text-xl font-semibold leading-7 tracking-[-0.08px] text-[#021326]">
          All Categories
        </h2>
        <Button
          disableElevation
          startIcon={<AddOutlinedIcon sx={{ fontSize: 18 }} />}
          sx={{
            ...primaryButtonSx,
            alignSelf: 'flex-start',
            px: '12px',
            py: '9px',
            fontSize: '13px',
          }}
        >
          New Category
        </Button>
      </div>

      <div className="h-px w-full bg-[#EAECF0]" />

      {categories.map((category, index) => (
        <CategoryAccordionItem
          key={category.id}
          category={category}
          isLast={index === categories.length - 1}
          onCategoryToggle={(enabled) =>
            updateCategory(category.id, (current) => ({ ...current, enabled }))
          }
          onCategoryExpandToggle={() =>
            updateCategory(category.id, (current) => ({
              ...current,
              isExpanded: !current.isExpanded,
            }))
          }
          onSubCategoriesExpandToggle={() =>
            updateCategory(category.id, (current) => ({
              ...current,
              subCategoriesExpanded: !current.subCategoriesExpanded,
            }))
          }
          onSubCategoryToggle={(subCategoryId, enabled) =>
            updateCategory(category.id, (current) => ({
              ...current,
              subCategories: current.subCategories.map((subCategory) =>
                subCategory.id === subCategoryId ? { ...subCategory, enabled } : subCategory,
              ),
            }))
          }
        />
      ))}
    </section>
  );
}
