export default function SectionLabel({
  children,
  light = false,
}) {
  return (
    <p
      className={`
        text-xs
        font-mono
        uppercase
        tracking-[0.2em]
        font-medium
        mb-4
        ${light ? 'text-accent' : 'text-accent'}
      `}
    >
      {children}
    </p>
  );
}