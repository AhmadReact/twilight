type ChatDateDividerProps = {
  label: string;
};

export default function ChatDateDivider({ label }: ChatDateDividerProps) {
  return (
    <div className="flex w-full items-center gap-2">
      <div className="h-px flex-1 bg-[#EAECF0]" />
      <span className="shrink-0 text-sm font-medium leading-5 text-[#475467]">{label}</span>
      <div className="h-px flex-1 bg-[#EAECF0]" />
    </div>
  );
}
