import Image from "next/image";

interface Props {
  imageUrl?: string;
  title?: string;
}

export default function ImagePreview({
  imageUrl,
  title,
}: Props) {
  if (!imageUrl) return null;

  return (
    <Image
      src={imageUrl}
      alt={title || "Preview"}
      width={300}
      height={200}
      className="rounded-xl object-cover border"
      unoptimized
    />
  );
}