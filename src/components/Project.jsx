const Project = ({
  link,
  title,
  subtitle,
  image,
  children,
  reverse = false,
  techs = [],
}) => {
  return (
    <div className={"flex flex-col gap-8 mt-16" + (reverse? " lg:flex-row-reverse " : " lg:flex-row " )}>
      <div className="lg:hidden">
        <h3 className="text-center text-3xl font-black">
          <a className="hover:underline" target="_blank" href={link}>
            {title}
          </a>
        </h3>
        <h5 className="text-center text-sm">{subtitle}</h5>
      </div>
      <div className="max-w-full lg:max-w-[50%] flex-1 flex justify-center">
        <a className="hover:opacity-90" target="_blank" href={link}>
          <img className="lg:max-h-[700px]" src={image} alt="" />
        </a>
      </div>
      <div className="p-8 lg:p-0 lg:max-w-md flex-1 flex flex-col gap-4">
        <div className="hidden lg:block mt-4">
          <h3 className="text-center text-3xl font-black">
            <a className="hover:underline" target="_blank" href={link}>
              {title}
            </a>
          </h3>
          <h5 className="text-center text-sm">{subtitle}</h5>
        </div>
        <div>
          <p className="font-bold text-base mb-2">Description: </p>
          {children}
        </div>
        <div className="mt-4">
          <p className="font-bold text-base mb-2">Technologies used: </p>
          <ul className="text-sm list-disc flex flex-col gap-2">
            {techs.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
