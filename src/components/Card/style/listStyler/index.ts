import applyClasses from "../../../../services/applyClasses";

export default function listStyler(isList: boolean, index: number | undefined) {
  const isOdd = index !== undefined && index % 2 !== 0;

  return {
    reverseList: applyClasses(isList, "lg:odd:flex-row-reverse"),
    textAlign: {
      alignEven: {
        title: applyClasses(isList, "xl:self-start"),
        text: applyClasses(isList, "xl:text-left"),
      },
      alignOdd: {
        title: applyClasses(isOdd, "xl:self-end"),
        text: applyClasses(isOdd, "xl:text-right"),
      },
    },
  };
}
