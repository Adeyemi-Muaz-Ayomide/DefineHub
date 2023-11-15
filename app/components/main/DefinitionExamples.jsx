export default function DefinitionExamples({
  definition,
  index,
  exampleUsage,
}) {
  return (
    <>
      {/* defintion */}
      {/* <p>
        <span className="text-lg font-normal sm:text-xl">
          {index + 1}. {definition}
        </span>
      </p> */}

      {/* example usage */}
      {exampleUsage && (
        <p className="text-base font-light text-gray-400 sm:text-lg">
          “{exampleUsage}”
        </p>
      )}
    </>
  );
}
