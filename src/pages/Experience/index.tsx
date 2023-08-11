import { Card } from "../../components/Card";
import { Hero } from "./Hero";
import data from "./data.json";

const Experience = () => (
  <section>
    <Hero />
    {data.map((content, index, array) => (
      <Card
        title={content.title}
        text={content.text}
        image={content.image}
        index={index}
        length={array.length}
        key={content.id}
      />
    ))}
  </section>
);

export default Experience;
