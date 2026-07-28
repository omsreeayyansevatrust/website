import Image from "next/image";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function ProjectCard({
  title,
  description,
  image,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">

      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold text-blue-900">
          {title}
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          {description}
        </p>

        <button className="mt-6 bg-blue-900 text-white px-5 py-3 rounded-full hover:bg-blue-700 transition">
          Read More
        </button>

      </div>

    </div>
  );
}