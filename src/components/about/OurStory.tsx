import Image from "next/image";

export default function OurStory() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <span className="uppercase text-blue-700 font-semibold tracking-widest">
              Our Story
            </span>

            <h2 className="text-4xl font-bold mt-4">
              Building Hope Through Service
            </h2>

            <p className="mt-8 text-gray-600 leading-8">
              Om Sree Ayyan Seva Trust was established with the vision of
              supporting underprivileged communities through sustainable
              development initiatives. We believe that education,
              healthcare, environmental protection and community
              participation together create lasting positive change.
            </p>

            <p className="mt-6 text-gray-600 leading-8">
              Our volunteers and supporters work together to bring
              meaningful improvements to society through compassion,
              transparency and dedication.
            </p>

          </div>

          <div>

            <Image
              src="/logo.png"
              alt="Trust"
              width={500}
              height={500}
              className="mx-auto"
            />

          </div>

        </div>

      </div>
    </section>
  );
}