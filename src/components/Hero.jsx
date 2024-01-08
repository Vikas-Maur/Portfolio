const Hero = () => {
  return (
    <div className="h-[60vh] flex flex-col gap-6 justify-center items-center mt-8 lg:mt-12 max-w-2xl mx-auto">
      <h4 className="text-lg lg:text-xl text-center">
        Namaste! 🙏 <br /> My Name is{" "}
        <span className="font-black">Vikas Maur</span> <br />
        And I am your
      </h4>
      <h2 className="text-center text-2xl lg:text-5xl font-black">
        Friendly Neighbourhood <br /> Frontend Developer
      </h2>
      {/* <p className="text-center">I  can help you create responsive interfaces using modern frameworks, optimizing for speed and scalability. With expertise in UI/UX design collaboration and active participation in code reviews, I stay updated on emerging front-end technologies to enhance development quality.</p> */}
      <p className="text-sm lg:text-base text-center">
        I can help you build modern products using the latest of technologies,
        optimized for speed and scalability.
      </p>
      <div className="flex">
        <a
          id="check_portfolio"
          href="#portfolio"
          className="shadow-xl px-8 py-5 rounded-full bg-amber-500 font-bold text-lg transition hover:bg-amber-400"
        >
          Checkout My Portfolio
        </a>
      </div>
    </div>
  );
};

export default Hero;
