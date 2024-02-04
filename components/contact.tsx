import Image from "next/image";

const Contact = () => {
  return (
    <div
      id="contact"
      className="relative flex flex-col items-center justify-center h-screen"
    >
      <h1 className="text-4xl font-bold text-center mb-10 text-white">
        Contact Us
      </h1>
      <div className="min-h-screen flex flex-col justify-center items-center bg-white shadow-outline rounded-2xl px-2 mt-3 ">
        <div className="max-w-4xl py-4 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:mb-0">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Send us a message
              </h2>
              <form>
                <div className="mb-4">
                  <label className="block font-bold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-bold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block font-bold text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48 resize-none"
                  ></textarea>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
            <div className="flex flex-col justify-center items-center md:border-l md:pl-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Contact Information
              </h2>
              <div className="flex flex-col justify-center items-center">
                <Image
                  src="/images/contact.jpg"
                  alt="contact us"
                  width={500}
                  height={300}
                  className="w-full md:w-64 h-64 object-cover rounded-full shadow-lg mb-4"
                />
                <div className="text-gray-700 font-medium text-center">
                  <p>123 Main St,</p>
                  <p>Suite 1</p>
                  <p>New York, NY 10001</p>
                  <p className="mt-2">
                    <a href="tel:1234567890">123-456-7890</a>
                  </p>
                  <p>
                    <a href="mailto:info@example.com">info@example.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
