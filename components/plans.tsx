import Image from "next/image";
import Card from "./layout/card";
import Plans from "../data/plans.json";

const Service = () => {
  return (
    <div
      id="plans"
      className="relative flex flex-col items-center justify-center h-screen"
    >
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-center mb-10 text-white">
          Plans
        </h1>
        <div className="container mx-auto my-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {Plans.map((plan, index) => (
              <Card
                key={index}
                title={plan?.title}
                description={plan?.description}
                image={plan?.image}
                price={plan?.price}
                features={plan?.features}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
