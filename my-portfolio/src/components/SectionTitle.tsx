type Props = {
  title: string;
  highlight?: string;
};

export default function SectionTitle({ title, highlight }: Props) {
  return (
    <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-slate-100 md:text-4xl">
      {title}{" "}
      {highlight && <span className="text-orange-400">{highlight}</span>}
    </h2>
  );
}
