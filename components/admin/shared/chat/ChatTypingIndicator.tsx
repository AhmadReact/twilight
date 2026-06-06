type ChatTypingIndicatorProps = {
  className?: string;
};

export default function ChatTypingIndicator({ className = '' }: ChatTypingIndicatorProps) {
  return (
    <div
      className={`inline-flex items-center gap-1 rounded-bl-lg rounded-br-lg rounded-tr-lg border border-[#EAECF0] bg-[#F9FAFB] px-2.5 py-2.5 ${className}`}
      aria-label="Typing"
    >
      {[0, 1, 2].map((index) => (
        <span
          key={index}
          className="size-1 animate-bounce rounded-full bg-[#98A2B3]"
          style={{ animationDelay: `${index * 150}ms` }}
        />
      ))}
    </div>
  );
}
