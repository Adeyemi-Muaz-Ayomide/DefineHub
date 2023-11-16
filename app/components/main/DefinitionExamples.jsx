export default function DefinitionExamples({ exampleUsage }) {
  return (
    <>
      {/* example usage */}
      {exampleUsage && (
        <p className="text-base font-raleway font-light text-gray-400 sm:text-lg">
          “{exampleUsage}”
        </p>
      )}
    </>
  );
}
