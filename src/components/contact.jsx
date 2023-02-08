import {useState} from 'react';
const Contact = () => {
const[name,setName]=useState("");
const[email,setEmail]=useState('');
const[message,setMessage]=useState('');
const ButtonClass=(!name && !email && !message)?"text-white border-2 hover:bg-grey-600 hover:border-grey-600 px-4 py-3 my-8 mx-auto flex items-center":"text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center";
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
          value={name}
          onChange={(e)=>setName(e.target.value)}

        />
        <input
          className="my-4 p-2 bg-[#ccd6f6] text-black"
          type="email"
          placeholder="Email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <textarea
          className="bg-[#ccd6f6] p-2 text-black "
          name="message"
          rows="10"
          placeholder="Message"
          value={message}
          onChange={e=>setMessage(e.target.value)}
        ></textarea>
        <button disabled={!name && !email && !message}className={ButtonClass}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
