export default function Input(props) {
  return (
    <input
      {...props}
      className="
      w-full
      h-14
      px-5
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