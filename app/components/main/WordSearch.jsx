export default function WordSearch({ definition }) {
  return (
    <>
      <h2 className=" text-5xl my-10">{definition.word}</h2>
      <div className="mx-2 sm:mx-4 lg:mx-8">
        <div className="flex flex-col border-r border-l border-b border-t border-gray-500 border-t-gray-400 border-opacity-50 md:flex-row">
          <div>
            {definition.meanings.map((meaning, index) => (
              <div
                key={index}
                className="mb-16 flex flex-col border-b border-gray-700 sm:mb-0 sm:flex-row"
              >
                <div className="border-t-0 border-b border-t-gray-700 border-b-gray-400 border-opacity-50 py-4 pl-4 text-left text-xl font-light sm:w-40 sm:border-t sm:border-b-0 sm:pl-0 sm:pr-10 sm:text-right">
                  {meaning.partOfSpeech}
                </div>

                <div className="w-full">
                  {meaning.definitions.map((def, index) => (
                    <div
                      key={index}
                      className="flex flex-col gap-2 border-r border-l border-t border-gray-700 border-opacity-50 p-4"
                    >
                      {index + 1}. {def.definition}
                      {/* <DefinitionExample
                                definition={definition.definition}
                                exampleUsage={definition.example}
                                index={index}
                            /> */}
                      {/* definition specific synonyms and antonyms */}
                      {/* {(definition.synonyms.length > 0 ||
                                definition.antonyms.length > 0) && (
                                    <SynonymsAntonyms
                                    synonyms={definition.synonyms}
                                    antonyms={definition.antonyms}
                                  handleWordClick={handleWordClick}
                                />
                              )} */}
                    </div>
                  ))}

                  {/* part of speech specific synonyms and antonyms */}
                  {/* {(meaning.synonyms.length > 0 ||
                          meaning.antonyms.length > 0) && (
                              <div className="flex w-full flex-col gap-4 border border-b-0 border-r-gray-700 border-l-gray-700 border-t-gray-500 border-opacity-50 p-4">
                          <SynonymsAntonyms
                          synonyms={meaning.synonyms}
                          antonyms={meaning.antonyms}
                          handleWordClick={handleWordClick}
                          />
                          </div>
                        )} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
