'use client';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import KeyboardArrowLeftOutlinedIcon from '@mui/icons-material/KeyboardArrowLeftOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import { outlineButtonSx } from '@/lib/admin/adminButtonStyles';

type TablePaginationProps = {
  totalPages?: number;
  activePage?: number;
  onPageChange?: (page: number) => void;
};

export default function TablePagination({
  totalPages = 1,
  activePage = 1,
  onPageChange,
}: TablePaginationProps) {
  const isControlled = typeof onPageChange === 'function';
  const safeTotalPages = Math.max(1, totalPages);

  const handlePrevious = () => {
    if (!isControlled || activePage <= 1) {
      return;
    }

    onPageChange(activePage - 1);
  };

  const handleNext = () => {
    if (!isControlled || activePage >= safeTotalPages) {
      return;
    }

    onPageChange(activePage + 1);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        borderTop: '1px solid #EAECF0',
        px: 3,
        py: 2,
        flexWrap: 'wrap',
      }}
    >
      <Button
        disableElevation
        startIcon={<KeyboardArrowLeftOutlinedIcon />}
        sx={outlineButtonSx}
        disabled={!isControlled || activePage <= 1}
        onClick={handlePrevious}
      >
        Previous
      </Button>

      <Pagination
        count={safeTotalPages}
        page={activePage}
        onChange={(_, page) => {
          if (isControlled) {
            onPageChange(page);
          }
        }}
        shape="rounded"
        siblingCount={1}
        boundaryCount={1}
        hidePrevButton
        hideNextButton
        disabled={!isControlled}
        sx={{
          '& .MuiPaginationItem-root': {
            minWidth: 36,
            height: 36,
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: 500,
            color: '#475467',
          },
          '& .Mui-selected': {
            bgcolor: '#F9FAFB !important',
            color: '#182230',
          },
        }}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            slots={{
              previous: KeyboardArrowLeftOutlinedIcon,
              next: KeyboardArrowRightOutlinedIcon,
            }}
          />
        )}
      />

      <Button
        disableElevation
        endIcon={<KeyboardArrowRightOutlinedIcon />}
        sx={outlineButtonSx}
        disabled={!isControlled || activePage >= safeTotalPages}
        onClick={handleNext}
      >
        Next
      </Button>
    </Box>
  );
}
