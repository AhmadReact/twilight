type AdminBulletListProps = {
  items: string[];
  className?: string;
};

function BulletItem({ children }: { children: string }) {
  return (
    <li className="flex gap-2 text-xs font-normal leading-4 tracking-[0.04px] text-[#616161]">
      <span className="mt-1.5 h-2.5 w-1 shrink-0 rounded-full bg-[#616161]" aria-hidden />
      <span>{children}</span>
    </li>
  );
}

export default function AdminBulletList({ items, className = '' }: AdminBulletListProps) {
  return (
    <ul className={`flex flex-col gap-1.5 ${className}`}>
      {items.map((item, index) => (
        <BulletItem key={`${item}-${index}`}>{item}</BulletItem>
      ))}
    </ul>
  );
}
