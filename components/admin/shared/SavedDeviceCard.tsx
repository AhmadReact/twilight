'use client';

import IconButton from '@mui/material/IconButton';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import type { SavedDevice } from '@/lib/admin/userDetailTypes';
import { grayColors } from '@/lib/theme';

type SavedDeviceCardProps = {
  device: SavedDevice;
};

export default function SavedDeviceCard({ device }: SavedDeviceCardProps) {
  return (
    <div className="relative pr-8">
      <IconButton
        aria-label="Device options"
        size="small"
        sx={{
          position: 'absolute',
          right: 0,
          top: 0,
          color: grayColors[700],
        }}
      >
        <MoreVertOutlinedIcon fontSize="small" />
      </IconButton>
      <div className="space-y-2">
        <div>
          <p className="text-sm font-medium leading-5 text-[#212121]">
            Device ID: {device.deviceId}
          </p>
          <p className="text-sm font-normal leading-5 text-[#98A2B3]">
            Created : {device.created}
          </p>
        </div>
        <div className="space-y-1 text-[#616161]">
          <p className="text-[13px] font-normal leading-[19px]">
            Device Type: {device.deviceType}
          </p>
          <p className="text-[11px] font-light leading-4">FCM Token: {device.fcmToken}</p>
        </div>
      </div>
    </div>
  );
}
