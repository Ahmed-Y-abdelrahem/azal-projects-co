export default function Card({
  children,
  className = '',
}) {
  return (
    <div
      className={`
      bg-white
      rounded-2xl
      border
      border-border
      p-8
      shadow-sm
      hover:shadow-2xl
      hover:-translate-y-2
      transition-all
      duration-300
      ${className}
    `}
    >
      {children}
    </div>
  );
}