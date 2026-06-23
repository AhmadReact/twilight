'use client';

import { useMemo, useState, type ReactNode } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import AdminTableCardHeader from '@/components/admin/shared/AdminTableCardHeader';
import TablePagination from '@/components/admin/shared/TablePagination';
import {
  adminTableBodyCellSx,
  adminTableHeadCellSx,
  adminTablePaperSx,
  adminTablePurpleStripeSx,
  adminTableRowHoverSx,
} from '@/lib/admin/adminTableStyles';

export type AdminTableColumn<T> = {
  id: string;
  header: ReactNode;
  align?: 'left' | 'center' | 'right';
  width?: number | string;
  minWidth?: number | string;
  render: (row: T, index: number) => ReactNode;
  stopRowClick?: boolean;
};

export type AdminDataTableProps<T> = {
  title?: string;
  badge?: string;
  description?: string;
  headerActions?: ReactNode;
  header?: ReactNode;
  filters?: ReactNode;
  columns: AdminTableColumn<T>[];
  rows: T[];
  getRowKey: (row: T, index: number) => string;
  onRowClick?: (row: T) => void;
  striped?: 'purple';
  loading?: boolean;
  fetching?: boolean;
  emptyMessage?: string;
  minWidth?: number;
  pageSize?: number;
  enableClientPagination?: boolean;
  page?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
};

const DEFAULT_PAGE_SIZE = 10;

function getRowSx(onRowClick: boolean, isPurpleStripe: boolean) {
  return {
    ...(onRowClick ? adminTableRowHoverSx : {}),
    ...(isPurpleStripe ? adminTablePurpleStripeSx : {}),
    '&:last-child td': { borderBottom: 0 },
  };
}

export default function AdminDataTable<T>({
  title,
  badge,
  description,
  headerActions,
  header,
  filters,
  columns,
  rows,
  getRowKey,
  onRowClick,
  striped,
  loading = false,
  fetching = false,
  emptyMessage = 'No records found.',
  minWidth = 640,
  pageSize = DEFAULT_PAGE_SIZE,
  enableClientPagination = false,
  page,
  totalPages,
  onPageChange,
}: AdminDataTableProps<T>) {
  const [clientPage, setClientPage] = useState(1);
  const isServerPaginated =
    typeof page === 'number' &&
    typeof totalPages === 'number' &&
    typeof onPageChange === 'function';

  const effectivePage = isServerPaginated ? page : clientPage;
  const effectiveTotalPages = isServerPaginated
    ? totalPages
    : enableClientPagination
      ? Math.max(1, Math.ceil(rows.length / pageSize))
      : 1;

  const displayedRows = useMemo(() => {
    if (isServerPaginated || !enableClientPagination) {
      return rows;
    }

    const start = (effectivePage - 1) * pageSize;
    return rows.slice(start, start + pageSize);
  }, [effectivePage, enableClientPagination, isServerPaginated, pageSize, rows]);

  const handlePageChange = (nextPage: number) => {
    if (isServerPaginated) {
      onPageChange(nextPage);
      return;
    }

    setClientPage(nextPage);
  };

  const renderHeader = () => {
    if (header) {
      return header;
    }

    if (!title) {
      return null;
    }

    return (
      <AdminTableCardHeader
        title={title}
        badge={badge}
        description={description ?? ''}
        actions={headerActions}
      />
    );
  };

  return (
    <Paper elevation={0} sx={adminTablePaperSx}>
      {renderHeader()}
      {filters ? <Box sx={{ px: { xs: 2, sm: 3 }, pb: 2 }}>{filters}</Box> : null}

      <TableContainer
        sx={{
          opacity: fetching ? 0.6 : 1,
          transition: 'opacity 0.15s ease',
        }}
      >
        <Table sx={{ minWidth }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align ?? 'left'}
                  sx={{
                    ...adminTableHeadCellSx,
                    width: column.width,
                    minWidth: column.minWidth,
                  }}
                >
                  {column.header}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={columns.length} align="center" sx={{ py: 8 }}>
                  <CircularProgress size={28} sx={{ color: '#7F56D9' }} />
                </TableCell>
              </TableRow>
            ) : displayedRows.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  align="center"
                  sx={{ py: 8, fontSize: '14px', color: '#475467' }}
                >
                  {emptyMessage}
                </TableCell>
              </TableRow>
            ) : (
              displayedRows.map((row, index) => {
                const absoluteIndex = isServerPaginated
                  ? index
                  : enableClientPagination
                    ? (effectivePage - 1) * pageSize + index
                    : index;

                return (
                  <TableRow
                    key={getRowKey(row, absoluteIndex)}
                    hover={Boolean(onRowClick)}
                    onClick={onRowClick ? () => onRowClick(row) : undefined}
                    sx={getRowSx(
                      Boolean(onRowClick),
                      striped === 'purple' && absoluteIndex % 2 === 0,
                    )}
                  >
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align ?? 'left'}
                        sx={adminTableBodyCellSx}
                        onClick={
                          column.stopRowClick
                            ? (event) => event.stopPropagation()
                            : undefined
                        }
                      >
                        {column.render(row, absoluteIndex)}
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        activePage={effectivePage}
        totalPages={effectiveTotalPages}
        onPageChange={handlePageChange}
      />
    </Paper>
  );
}
