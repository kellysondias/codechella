export default function applyClasses(
  isTrue: boolean | undefined,
  trueStyle: string,
  falseClasses?: string
) {
  const falseStyle = falseClasses ? falseClasses : "";

  return isTrue ? trueStyle : falseStyle;
}
