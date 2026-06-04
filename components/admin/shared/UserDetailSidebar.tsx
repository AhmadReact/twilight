import LocationRow from '@/components/admin/shared/LocationRow';
import SavedDeviceCard from '@/components/admin/shared/SavedDeviceCard';
import type { SavedDevice, UserLocation } from '@/lib/admin/userDetailTypes';

type UserDetailSidebarProps = {
  locations: UserLocation[];
  lastLogin: string;
  devices: SavedDevice[];
};

export default function UserDetailSidebar({
  locations,
  lastLogin,
  devices,
}: UserDetailSidebarProps) {
  return (
    <aside className="w-full shrink-0 space-y-6 xl:max-w-[360px]">
      <section className="space-y-4">
        <h2 className="text-lg font-semibold leading-7 text-[#101828]">Locations List</h2>
        <div className="flex flex-col gap-4 divide-y divide-[#EAECF0]">
          {locations.map((location, index) => (
            <div key={`${location.label}-${index}`} className={index > 0 ? 'pt-4' : ''}>
              <LocationRow location={location} />
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold leading-7 text-[#101828]">Saved Devices</h2>
          <p className="mt-1 truncate text-sm font-normal leading-5 text-[#475467]">
            Last Login: {lastLogin}
          </p>
        </div>
        <div className="flex flex-col gap-4 divide-y divide-[#EAECF0]">
          {devices.map((device, index) => (
            <div key={`${device.deviceId}-${index}`} className={index > 0 ? 'pt-4' : ''}>
              <SavedDeviceCard device={device} />
            </div>
          ))}
        </div>
      </section>
    </aside>
  );
}
