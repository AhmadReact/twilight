'use client';

import Button from '@mui/material/Button';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { outlineButtonSx } from '@/lib/admin/adminButtonStyles';

type TablePaginationProps = {
  pages?: (number | '...')[];
  activePage?: number;
};

const defaultPages: (number | '...')[] = [1, 2, 3, '...', 8, 9, 10];

export default function TablePagination({
  pages = defaultPages,
  activePage = 1,
}: TablePaginationProps) {
  return (
    <div className="flex items-center justify-between border-t border-[#EAECF0] px-6 py-4">
      <Button
        disableElevation
        startIcon={<KeyboardArrowLeftOutlinedIcon />}
        sx={outlineButtonSx}
      >
        Previous
      </Button>
      <div className="flex items-center gap-1">
        {pages.map((page, index) =>
          page === '...' ? (
            <span key={`ellipsis-${index}`} className="px-2 text-sm text-[#667085]">
              ...
            </span>
          ) : (
            <button
              key={page}
              type="button"
              className={`flex size-9 items-center justify-center rounded-lg text-sm font-medium ${
                page === activePage
                  ? 'bg-[#F9FAFB] text-[#182230]'
                  : 'text-[#475467] hover:bg-[#F9FAFB]'
              }`}
            >
              {page}
            </button>
          ),
        )}
      </div>
      <Button
        disableElevation
        endIcon={<KeyboardArrowRightOutlinedIcon />}
        sx={outlineButtonSx}
      >
        Next
      </Button>
    </div>
  );
}
