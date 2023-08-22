import data from "./data.json";

export const Map = () => {
  const { url, alt } = data.image;
  const { title, lanes } = data;

  return (
    <div className="flex-center flex-col lg:flex-row lg:mt-7 lg:gap-10">
      <div>
        <img src={url} alt={alt} />
      </div>
      <div className="lg:self-start lg:mt-24">
        <h2 className="font-text text-xl mt-8 font-bold text-gray-900 dark:text-white md:text-3xl">
          {title}
        </h2>
        <div>
          {lanes.map(({ id, color, text }) => (
            <div className="flex my-6" key={id}>
              <div
                className={`flex mr-4 w-7 h-7`}
                style={{ backgroundColor: color }}
              />
              <span className="text-gray-800 md:text-xl">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
