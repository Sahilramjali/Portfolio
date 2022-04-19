const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Sahil, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I am passionate about building mobile applications and websites
              that improves the lives of those around me.Currently pursuing CSIT
              degree from Asian College of Higher Studies affiliated to
              Tribhuvan University. I'm learning flutter framework for mobile
              application development and react js for frontend development
              seeking internship on those mentioned(mobile app and web
              development) domain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
