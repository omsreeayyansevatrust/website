import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function ContactInfo() {
  return (
    <section className="py-16 bg-white">

      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 rounded-2xl shadow-lg text-center">

            <PhoneIcon className="w-10 h-10 mx-auto text-blue-900" />

            <h3 className="mt-4 text-xl font-bold">
              Phone
            </h3>

            <p className="mt-2 text-gray-600">
              +91 97105 27964
            </p>

          </div>

          <div className="p-8 rounded-2xl shadow-lg text-center">

            <EnvelopeIcon className="w-10 h-10 mx-auto text-green-700" />

            <h3 className="mt-4 text-xl font-bold">
              Email
            </h3>

            <p className="mt-2 text-gray-600 break-all">
              omsreeayyansevatrust@gmail.com
            </p>

          </div>

          <div className="p-8 rounded-2xl shadow-lg text-center">

            <MapPinIcon className="w-10 h-10 mx-auto text-red-600" />

            <h3 className="mt-4 text-xl font-bold">
              Address
            </h3>

            <p className="mt-2 text-gray-600">
              54/1, Manali New Town,<br />
              Chennai – 600103
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}