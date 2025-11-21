type SectionTitleProps = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <header className="mb-6">
      <h1 className="text-2xl md:text-3xl font-semibold mb-2">{title}</h1>

      {subtitle && (
        <p className="text-sm text-neutral-600 max-w-xl">{subtitle}</p>
      )}
    </header>
  );
}
