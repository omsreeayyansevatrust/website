import GalleryCard from "./GalleryCard";

const photos = [
  {
    image: "/gallery/medical1.jpg",
    title: "Medical Camp",
    category: "Healthcare",
  },
  {
    image: "/gallery/food1.jpg",
    title: "Food Distribution",
    category: "Community Service",
  },
  {
    image: "/gallery/tree1.jpg",
    title: "Tree Plantation",
    category: "Environment",
  },
  {
    image: "/gallery/education1.jpg",
    title: "Education Support",
    category: "Education",
  },
  {
    image: "/gallery/volunteer1.jpg",
    title: "Volunteer Activity",
    category: "Volunteer",
  },
  {
    image: "/gallery/event1.jpg",
    title: "Special Event",
    category: "Events",
  },
];

export default function GalleryGrid() {
  return (
    <section className="py-20 bg-gray-100">

      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {photos.map((photo) => (
            <GalleryCard
              key={photo.title}
              {...photo}
            />
          ))}

        </div>

      </div>
    </section>
  );
}