import data from "./data.json";

export const Map = () => {
  const { url, alt } = data.image;
  const { title, lanes } = data;

  return (
    <div className="flex-center flex-col">
      <div>
        <img src={url} alt={alt} />
      </div>
      <div className="">
        <h4 className="text-xl mt-8 font-bold text-gray-900 dark:text-white">
          {title}
        </h4>
        <div>
          {lanes.map(({ id, color, text }) => (
            <div className="flex my-6 mb-0" key={id}>
              <div
                className={`flex mr-4 w-7 h-7`}
                style={{ backgroundColor: color }}
              />
              <span className="text-gray-800">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
