import { getService } from "@/services/getServices";
import Service from "../cards/Service";

export default async function Services() {
  const { services } = await getService();

  return (
    <div className="bg-white text-gray-800">
      <section className="text-center py-12">
        <h2 className="text-red-500 text-lg font-semibold">Service</h2>
        <h1 className="text-4xl font-bold mt-2">Our Service Area</h1>
        <p className="text-gray-500 mt-4 max-w-md mx-auto">
          The Majority Have Suffered Alteration In Some Form, By Injected
          Humour, Or Randomised Words Which Don&apos;t Look Even Slightly
          Believable.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {services.map((service) => (
            <Service key={service._id} service={service} />
          ))}
        </div>
      </section>
    </div>
  );
}
