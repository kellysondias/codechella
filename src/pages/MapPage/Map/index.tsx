import data from "./data.json";

export const Map = () => {
  const { url, alt } = data.image;
  const { title, lanes } = data;

  return (
    <div className="flex-center flex-col">
      <div>
        <img src={url} alt={alt} />
      </div>
      <div>
        <h4 className="text-xl font-bold dark:text-white">{title}</h4>
        <div>
          {lanes.map(({ id, color, text }) => (
            <div key={id}>
              <div className={`w-8`} style={{ backgroundColor: color }}>
                ff
              </div>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
