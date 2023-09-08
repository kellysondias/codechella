import React from "react";
import { Field, ErrorMessage } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import applyClasses from "../../../../../services/applyClasses";

interface Props {
  title: string;
  name: string;
  type?: string | undefined;
  as?: string;
  placeholder?: string | undefined;
  options?: { [key: string]: string }[];
  icon?: IconProp | undefined;
}

export const Input: React.FC<Props> = ({
  title,
  name,
  type,
  as,
  placeholder,
  options,
  icon,
}) => {
  const inputType = type ?? "text";
  const isSelect = as === "select";
  const birthdate = name === "birthdate";
  const select = as === "select";

  const customClasses = {
    birthdate: {
      mdWidth: applyClasses(birthdate, "md:w-[25rem]"),
      lgWidth: applyClasses(birthdate, "lg:w-full"),
      xlWidth: applyClasses(birthdate, "xl:w-[17rem] max-xl:bg-red-700"),
      mdSelfStart: applyClasses(birthdate, "md:self-start"),
      lgSelfCenter: applyClasses(birthdate, "lg:self-center"),
    },
    select: {
      xlWidth: applyClasses(select, "xl:w-[17rem]"),
      xlMarginRight: applyClasses(select, "xl:mr-5"),
    },
  };

  return (
    <div
      className={`flex justify-center flex-col mb-5 md:w-full ${customClasses.birthdate.mdWidth} ${customClasses.birthdate.lgWidth} ${customClasses.birthdate.xlWidth} ${customClasses.birthdate.mdSelfStart} ${customClasses.birthdate.lgSelfCenter} ${customClasses.select.xlWidth}`}
    >
      <label
        htmlFor={name}
        className="text-xl text-left text-gray-800 font-bold dark:text-white"
      >
        {title}
        {icon && <FontAwesomeIcon icon={icon} />}
      </label>
      {!isSelect ? (
        <Field
          className={`w-full p-2`}
          as={as}
          type={inputType}
          name={name}
          id={name}
        />
      ) : (
        <Field
          as="select"
          id={name}
          name={name}
          className={`w-full text-[1.375rem] p-2`}
        >
          <option value="" className="hidden">
            {placeholder}
          </option>
          {options &&
            options.map(({ option, value }, index) => (
              <option key={index} value={value}>
                {option}
              </option>
            ))}
        </Field>
      )}
      <ErrorMessage
        component="span"
        name={name}
        className="text-red-700 dark:text-white"
      />
    </div>
  );
};
