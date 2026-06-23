export const adminTablePaperSx = {
  overflow: 'hidden',
  borderRadius: '11px',
  border: '1px solid #EAECF0',
  bgcolor: '#FFFFFF',
  boxShadow:
    '0px 1px 2px 0px rgba(16,24,40,0.06),0px 1px 3px 0px rgba(16,24,40,0.1)',
} as const;

export const adminTableHeadCellSx = {
  borderBottom: '1px solid #EAECF0',
  px: { xs: 2, sm: 3 },
  py: 1.5,
  fontSize: '12px',
  fontWeight: 500,
  lineHeight: '16px',
  color: '#475467',
  bgcolor: '#F9FAFB',
  whiteSpace: 'nowrap',
} as const;

export const adminTableBodyCellSx = {
  borderBottom: '1px solid #EAECF0',
  px: { xs: 2, sm: 3 },
  py: 2,
  fontSize: '14px',
  color: '#475467',
} as const;

export const adminTableRowHoverSx = {
  cursor: 'pointer',
  transition: 'background-color 0.15s ease',
  '&:hover': {
    bgcolor: '#F9FAFB',
  },
} as const;

export const adminTablePurpleStripeSx = {
  bgcolor: '#FCFAFF',
} as const;
