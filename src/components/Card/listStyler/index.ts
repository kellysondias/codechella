export default function listStyler(isList: boolean, index: number | undefined) {
  const applyListStyle = (condition: boolean, listStyle: string) =>
    condition ? listStyle : "";

  const isOdd = index !== undefined && index % 2 !== 0;

  return {
    reverseList: applyListStyle(isList, "lg:odd:flex-row-reverse"),
    textAlign: {
      alignEven: {
        title: applyListStyle(isList, "xl:self-start"),
        text: applyListStyle(isList, "xl:text-left"),
      },
      alignOdd: {
        title: applyListStyle(isOdd, "xl:self-end"),
        text: applyListStyle(isOdd, "xl:text-right"),
      },
    },
  };
}
