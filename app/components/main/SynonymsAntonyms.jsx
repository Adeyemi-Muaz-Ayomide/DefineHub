export default function SynonymsAntonyms({
  synonyms,
  antonyms,
  handleWordClick,
}) {
  const renderComma = (index, length) => {
    return index !== length - 1 ? <span>, </span> : null;
  };

  return (
    <>
      {/* synonyms */}
      {synonyms.length > 0 && (
        <div>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
            <p className="font-light font-raleway text-gray-400">synonyms</p>
            <p>
              {synonyms.map((synonym, index) => (
                <span key={index}>
                  <span
                    className="cursor-pointer font-light text-blue-400 transition-all hover:text-white focus:text-gray-400"
                    onClick={() => handleWordClick(synonym)}
                  >
                    {synonym}
                  </span>
                  {renderComma(index, synonyms.length)}
                </span>
              ))}
            </p>
          </div>
        </div>
      )}

      {/* antonyms */}
      {antonyms.length > 0 && (
        <div>
          <div className="flex flex-col gap-1 sm:flex-row sm:gap-2">
            <p className="font-light font-raleway text-gray-400">antonyms</p>
            <p>
              {antonyms.map((antonym, index) => (
                <span key={index}>
                  <span
                    className="cursor-pointer font-light text-blue-400 transition-all hover:text-white focus:text-gray-400"
                    onClick={() => handleWordClick(antonym)}
                  >
                    {antonym}
                  </span>
                  {renderComma(index, antonyms.length)}
                </span>
              ))}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
