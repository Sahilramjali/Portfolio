const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f] sm:pt-10"
    >
      <form
        method="POST"
        action="https://getform.io/f/e7e8e3c4-d434-426b-ad45-0c61ff8bbd57"
        className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-5/6 h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            {" "}
            Submit the form below or shoot me an email - ramjalixahil13@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2 text-black"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] text-black"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2 text-black "
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
