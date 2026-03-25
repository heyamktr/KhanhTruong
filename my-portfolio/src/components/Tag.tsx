type Props = {
  text: string;
};

export default function Tag({ text }: Props) {
  return (
    <span className="rounded-full bg-orange-500 px-3 py-1 text-sm text-white">
      {text}
    </span>
  );
}
