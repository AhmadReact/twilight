'use client';

import IconButton from '@mui/material/IconButton';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import { grayColors } from '@/lib/theme';

type SubCategoriesHeaderProps = {
  expanded: boolean;
  onExpandToggle: () => void;
  onAddSubCategory?: () => void;
};

export default function SubCategoriesHeader({
  expanded,
  onExpandToggle,
  onAddSubCategory,
}: SubCategoriesHeaderProps) {
  return (
    <div className="flex flex-col gap-3 pl-4 sm:flex-row sm:items-center sm:justify-between">
      <p className="text-base font-medium leading-6 text-[#021326]">Sub Categories</p>

      <div className="flex items-center gap-2">
        <IconButton
          aria-label="Add sub category"
          size="small"
          onClick={onAddSubCategory}
          sx={{
            p: '9px',
            color: grayColors[700],
            '&:hover': { bgcolor: '#F9FAFB' },
          }}
        >
          <AddOutlinedIcon sx={{ fontSize: 18 }} />
        </IconButton>

        <IconButton
          aria-label={expanded ? 'Collapse sub categories' : 'Expand sub categories'}
          size="small"
          onClick={onExpandToggle}
          sx={{
            p: '9px',
            color: grayColors[700],
            '&:hover': { bgcolor: '#F9FAFB' },
          }}
        >
          {expanded ? (
            <ExpandMoreOutlinedIcon sx={{ fontSize: 18 }} />
          ) : (
            <ChevronRightOutlinedIcon sx={{ fontSize: 18 }} />
          )}
        </IconButton>
      </div>
    </div>
  );
}
