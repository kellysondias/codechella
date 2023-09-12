import React from "react";
import { Formik, Form } from "formik";
import { Button } from "../../../../components/Button";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Input } from "./Input";
import validationSchema from "./schema/validationSchema";
import data from "./data.json";

export const TicketForm: React.FC = () => {
  const initialValues = {
    name: "",
    email: "",
    birthdate: "",
    select: "",
  };

  const { inputs, buttonText } = data;

  const handleSubmit = (e: any) => {
    console.log("EVENTO:", e);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Form submitted with values:", values);
        // resetForm()
      }}
    >
      <Form className="mt-4 md:px-10">
        <div className="flex justify-center items-center flex-wrap max-lg:flex-col mb-3 xl:px-20 xl:justify-evenly">
          {inputs.map((input, index) => (
            <Input
              title={input.title}
              name={input.name}
              type={input.type}
              as={input.as}
              placeholder={input.placeholder}
              options={input.options}
              key={index}
            />
          ))}
        </div>
        <Button buttonclasses="mt-0 px-5" icon={faArrowRightLong}>
          {buttonText}
        </Button>
      </Form>
    </Formik>
  );
};
