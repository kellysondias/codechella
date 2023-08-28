import * as Yup from "yup";
import differenceInYears from "date-fns/differenceInYears";

const feedback = {
  requiredNameMessage: "Nome é obrigatório",
  invalidEmailMessage: "Este e-mail não é válido",
  requiredEmailMessage: "E-mail é obrigatório",
};

const schema = Yup.object().shape({
  name: Yup.string().min(2).required(feedback.requiredNameMessage),
  email: Yup.string()
    .email(feedback.invalidEmailMessage)
    .required(feedback.requiredEmailMessage),
  birthDate: Yup.date()
    .required("Data de nascimento é obrigatória")
    .nullable()
    .test(
      "birth-date",
      "Você precisa ter mais de 18 anos para participar do Codechella",
      (value) => {
        if (!value) return false;
        else return differenceInYears(new Date(), new Date(value)) >= 18;
      }
    ),
});

export default schema;
