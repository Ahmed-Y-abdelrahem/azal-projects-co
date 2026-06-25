export default function Textarea(props) {
  return (
    <textarea
      {...props}
      className="
      w-full
      min-h-[180px]
      p-5
      rounded-xl
      border
      border-border
      bg-white
      focus:outline-none
      focus:ring-2
      focus:ring-accent
      transition-all
      "
    />
  );
}