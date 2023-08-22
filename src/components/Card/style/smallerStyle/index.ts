import applyClasses from "../../../../services/applyClasses";

export default function smallerCardStyle(smaller: boolean | undefined) {
  return {
    lgCardWidth: applyClasses(smaller, "lg:w-[24rem]"),
    paddingY: applyClasses(smaller, "max-[1435px]:py-8"),
    lgMarginLeftLastX: applyClasses(smaller, "min-[1435px]:last:ml-0"),
    lgMarginRightFirstX: applyClasses(smaller, "min-[1435px]:first:mr-0"),
    relativeEven: applyClasses(smaller, "min-[1435px]:even:relative"),
    staticEven: applyClasses(smaller, "xl:even:static"),
    paddginYEven: applyClasses(smaller, "lg:even:py-0"),
    topEven: applyClasses(smaller, "lg:even:top-32"),
    textWidth: applyClasses(smaller, "lg:w-full"),
  };
}
