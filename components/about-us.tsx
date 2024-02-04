import Image from "next/image";

const AboutUs = () => {
  return (
    <div
      id="about-us"
      className="relative flex flex-col items-center justify-center h-screen px-10"
    >
      <h1 className="text-4xl font-bold text-center mb-10 text-white">
        About Us
      </h1>
      <div className="container rounded-3xl mx-auto py-6 flex flex-wrap items-center bg-white px-6">
        <div className="w-full md:w-1/2 md:pr-8 mb-8 md:mb-0 px-16">
          <Image
            src="/images/about-us.jpg"
            alt="About Us"
            width={600}
            height={600}
            className=" rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2 px-16">
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            convallis lorem nec nulla tempus, sit amet convallis ipsum
            ultricies. Donec gravida enim et arcu malesuada, ut lacinia eros
            pulvinar. Sed auctor ex at nibh tristique vestibulum. Vivamus
            dignissim nisl vel nunc pharetra maximus. Nulla sit amet risus
            feugiat, rhoncus libero vel, varius arcu. Sed tristique metus
            mauris, a vehicula nisl iaculis vitae. Ut auctor nisi vel sapien
            venenatis, eget posuere nisi vulputate. Nam quis eros ac risus
            aliquet facilisis.
          </p>
          <p className="text-lg text-gray-800 leading-relaxed mb-8">
            Morbi sodales eros at velit posuere pharetra. Proin commodo
            sollicitudin tellus vel tincidunt. Duis fermentum, tortor vel
            scelerisque pharetra, urna velit lacinia lorem, nec faucibus neque
            lorem vitae justo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
