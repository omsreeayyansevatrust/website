import Image from "next/image";

type Props = {
  image: string;
  title: string;
  category: string;
};

export default function GalleryCard({
  image,
  title,
  category,
}: Props) {
  return (
    <div className="group overflow-hidden rounded-2xl shadow-lg bg-white hover:shadow-2xl transition">

      <div className="overflow-hidden">

        <Image
          src={image}
          alt={title}
          width={600}
          height={400}
          className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
        />

      </div>

      <div className="p-5">

        <p className="text-sm text-green-700 font-semibold">
          {category}
        </p>

        <h3 className="text-xl font-bold text-blue-900 mt-2">
          {title}
        </h3>

      </div>

    </div>
  );
}