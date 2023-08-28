import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import schema from "./schema/schema";
import { Button } from "../../../components/Button";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const TicketForm: React.FC = () => {
  const initialValues = {
    name: "",
    email: "",
    birthDate: "",
  };

  const handleSubmit = () => {};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="name">Nome Completo:</label>
          <Field type="text" id="name" name="name" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="ticketType">Tipo de ingresso:</label>
          <Field as="select" id="ticketType" name="ticketType">
            <option value="#">Tipo de ingresso</option>
            <option value="normal">Normal</option>
            <option value="premium">Premium</option>
          </Field>
        </div>

        <div>
          <label htmlFor="birthDate">Data de nascimento:</label>
          <Field type="date" id="birthDate" name="birthDate" />
          <ErrorMessage name="birthDate" component="div" />
        </div>

        <Button type="submit" icon={faArrowRightLong}>
          Enviar
        </Button>
      </Form>
    </Formik>
  );
};

export default TicketForm;
