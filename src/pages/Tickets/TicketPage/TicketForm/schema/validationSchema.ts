import * as Yup from "yup";
import differenceInYears from "date-fns/differenceInYears";

const feedback = {
  birthdateTest: {
    message: "Você precisa ter mais de 18 anos para participar do Codechella",
    test: "birth-date",
  },
  invalidEmailMessage: "Este e-mail não é válido",
  requiredBirthdateMessage: "Data de nascimento é obrigatória",
  requiredEmailMessage: "E-mail é obrigatório",
  requiredNameMessage: "Nome é obrigatório",
};

// https://yidaotus.medium.com/using-yup-and-typescript-for-typesafe-select-validation-e9ee9d4bceec

const validationSchema = Yup.object().shape({
  name: Yup.string().min(2).required(feedback.requiredNameMessage),
  email: Yup.string()
    .email(feedback.invalidEmailMessage)
    .required(feedback.requiredEmailMessage),
  select: Yup.string()
    .oneOf(["normal", "premium"], "Você precisa escolher um tipo de ingresso")
    .required("Você precisa escolher um tipo de ingresso"),
  birthdate: Yup.date()
    .required(feedback.requiredBirthdateMessage)
    .nullable()
    .test(
      feedback.birthdateTest.test,
      feedback.birthdateTest.message,
      (value) => {
        if (!value) return false;
        else return differenceInYears(new Date(), new Date(value)) >= 18;
      }
    ),
});

export default validationSchema;
