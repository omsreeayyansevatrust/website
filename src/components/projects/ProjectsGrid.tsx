import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Education Support",
    image: "/projects/education.jpg",
    description:
      "Providing educational support, learning materials, and scholarships for deserving students.",
  },
  {
    title: "Medical Camps",
    image: "/projects/medical.jpg",
    description:
      "Organizing free health check-up camps and medical awareness programs for the community.",
  },
  {
    title: "Food Distribution",
    image: "/projects/food.jpg",
    description:
      "Providing nutritious meals to families in need during special events and emergencies.",
  },
  {
    title: "Tree Plantation",
    image: "/projects/tree.jpg",
    description:
      "Promoting environmental sustainability through tree plantation and awareness campaigns.",
  },
  {
    title: "Women Empowerment",
    image: "/projects/women.jpg",
    description:
      "Supporting women through skill development, awareness, and community programs.",
  },
  {
    title: "Volunteer Service",
    image: "/projects/volunteer.jpg",
    description:
      "Creating opportunities for volunteers to participate in meaningful social service activities.",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="py-20 bg-gray-100">

      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}

        </div>

      </div>

    </section>
  );
}