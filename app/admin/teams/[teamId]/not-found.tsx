import Link from 'next/link';
import Button from '@mui/material/Button';
import { outlineButtonSx } from '@/lib/admin/adminButtonStyles';

export default function TeamNotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-8">
      <h1 className="text-2xl font-semibold text-[#101828]">Team not found</h1>
      <p className="text-base text-[#475467]">The team you are looking for does not exist.</p>
      <Button component={Link} href="/admin/teams" disableElevation sx={outlineButtonSx}>
        Back to Teams
      </Button>
    </div>
  );
}
