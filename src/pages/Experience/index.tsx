import { Card } from "../../components/Card";
import { Hero } from "./Hero";
import data from "./data.json";

const Experience = () => (
  <section>
    <Hero />
    {data.map((content, index, array) => (
      <Card
        isFirstCard={index === 0}
        length={array.length}
        image={content.image}
        title={content.title}
        text={content.text}
        key={content.id}
      />
    ))}
  </section>
);

export default Experience;
