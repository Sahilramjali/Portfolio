import Encryption from "../assets/ed_warden.png";
import EducationW from "../assets/educationw.png";
import ud1 from "../assets/ud1.png";
import news from '../assets/newsapp.png';
const Projects = () => {
  return (
    <div
      name="Projects"
      className="w-full md:h-screen text-gray-300 bg-[#0a192f] sm:pt-10"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6"> Check out some of my recent projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{ backgroundImage: `url(${ud1})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white  text-center tracking-wider ">
                Ultimodeal Version 2
              </span>
              <div className="pt-2 text-center">
                <a href="https://play.google.com/store/apps/details?id=com.user.ultimodeal">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    PlayStore link
                  </button>
                </a>
              </div>
              <div className=" text-center">
                <a href="https://apps.apple.com/np/app/ultimodeal-shopping/id1608846487?platform=ipad">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    AppStore link
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Encryption})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider text-center">
                ED warden
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Sahilramjali/encryption-decryption-flutter">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    SourceCode
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${news})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                News App
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Sahilramjali/Task-MORU">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Source code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${EducationW})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Education Sansar
              </span>
              <div className="pt-8 text-center">
                <a href="https://github.com/Sahilramjali/educationsansar-website">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Sourcecode
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* Grid Item */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
