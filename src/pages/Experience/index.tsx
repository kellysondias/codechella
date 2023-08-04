import { Card } from "../../components/Card";
import { Hero } from "./Hero";
import data from "./data.json";

const Experience = () => (
  <section>
    <Hero />
    {data.map((content, index) => (
      <Card
        image={content.image}
        title={content.title}
        text={content.text}
        key={content.id}
        listIndex={index}
      />
    ))}
  </section>
);

export default Experience;
