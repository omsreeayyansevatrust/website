import Image from "next/image";

type Props = {
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
};

export default function EventCard({
  title,
  date,
  location,
  description,
  image,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">

      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">

        <p className="text-sm text-blue-700 font-semibold">
          📅 {date}
        </p>

        <p className="text-sm text-gray-500 mt-1">
          📍 {location}
        </p>

        <h3 className="text-2xl font-bold mt-4 text-blue-900">
          {title}
        </h3>

        <p className="mt-4 text-gray-600 leading-7">
          {description}
        </p>

        <button className="mt-6 bg-green-700 text-white px-5 py-3 rounded-full hover:bg-green-600 transition">
          Register Now
        </button>

      </div>

    </div>
  );
}