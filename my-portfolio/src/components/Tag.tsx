type Props = {
  text: string;
};

export default function Tag({ text }: Props) {
  return (
    <span className="rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-sm text-orange-300">
      {text}
    </span>
  );
}
