export default function SectionTitle({
  children,
  light = false,
  className = '',
}) {
  return (
    <h2
      className={`
        font-display
        text-4xl
        lg:text-5xl
        font-bold
        leading-tight
        ${light ? 'text-white' : 'text-primary'}
        ${className}
      `}
    >
      {children}
    </h2>
  );
}