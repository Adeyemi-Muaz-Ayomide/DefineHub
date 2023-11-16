import DefinitionExamples from "./DefinitionExamples";
import SourceLicense from "./SourceLicense";
import SynonymsAntonyms from "./SynonymsAntonyms";

export default function WordSearch({ definition, handleWordClick }) {
  return (
    <>
      <h2 className=" font-raleway font-extrabold text-5xl my-10 lg:ml-20 ml-2">
        {definition.word}
      </h2>
      <div className="mx-2 sm:mx-4 lg:mx-20">
        <div className="flex flex-col border-r border-l border-b border-t border-gray-500 border-t-gray-400 border-opacity-50 md:flex-row">
          <div>
            {definition &&
              definition.meanings.map((meaning, index) => (
                <div
                  key={index}
                  className="mb-8  font-raleway font-bold flex flex-col border-b border-gray-700 sm:mb-0 sm:flex-row"
                >
                  <div className=" flex flex-col justify-start items-start ml-5 max-md:ml-0 border-t-0 border-b border-t-gray-700 border-b-gray-400 border-opacity-50 py-4 pl-4 font-raleway text-lg  max-sm:text-2xl font-bold text-left sm:w-40 sm:border-t sm:border-b-0 sm:pl-0 sm:pr-10 sm:text-right">
                    {meaning.partOfSpeech}
                  </div>

                  <div className="w-full">
                    {meaning.definitions.map((def, index) => (
                      <div
                        key={index}
                        className="flex flex-col gap-2 border-r  border-l border-t border-gray-700 border-opacity-50 p-4"
                      >
                        {index + 1}. {def.definition}
                        <DefinitionExamples
                          definition={def.definition}
                          exampleUsage={def.example}
                          index={index}
                        />
                        {/* definition specific synonyms and antonyms */}
                        {(def.synonyms.length > 0 ||
                          def.antonyms.length > 0) && (
                          <SynonymsAntonyms
                            synonyms={def.synonyms}
                            antonyms={def.antonyms}
                            handleWordClick={handleWordClick}
                          />
                        )}
                      </div>
                    ))}

                    {/* part of speech specific synonyms and antonyms */}
                    {(meaning.synonyms.length > 0 ||
                      meaning.antonyms.length > 0) && (
                      <div className="flex w-full flex-col gap-4 border border-b-0 border-r-gray-700 border-l-gray-700 border-t-gray-500 border-opacity-50 p-4">
                        <SynonymsAntonyms
                          synonyms={meaning.synonyms}
                          antonyms={meaning.antonyms}
                          handleWordClick={handleWordClick}
                        />
                      </div>
                    )}
                 
                  </div>
                </div>
              ))}
          </div>
          {/* <SourceLicense
            sourceUrl={definition.sourceUrls[0]}
            //   licenseDetails={wordData.license}
          /> */}
        </div>
      </div>
    </>
  );
}

// export default function WordDisplay({ wordData }) {
//   const { word, phonetic, phonetics, origin, meanings } = wordData;

//   return (
//     <div className="mt-4">
//       <h2 className="text-2xl font-bold">{word}</h2>
//       {phonetic && <p>Phonetic: {phonetic}</p>}
//       {phonetics && (
//         <div>
//           <p>Phonetics:</p>
//           <ul>
//             {phonetics.map((item, index) => (
//               <li key={index}>
//                 {item.text}
//                 {item.audio && (
//                   <audio controls>
//                     <source src={`https:${item.audio}`} type="audio/mp3" />
//                     Your browser does not support the audio tag.
//                   </audio>
//                 )}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       {origin && <p>Origin: {origin}</p>}
//       {meanings && (
//         <div>
//           <p>Meanings:</p>
//           {meanings.map((meaning, index) => (
//             <div key={index}>
//               <p>{meaning.partOfSpeech}</p>
//               <ul>
//                 {meaning.definitions.map((definition, index) => (
//                   <li key={index}>
//                     {definition.definition}
//                     {definition.example && <p>Example: {definition.example}</p>}
//                     {definition.synonyms.length > 0 && (
//                       <p>Synonyms: {definition.synonyms.join(", ")}</p>
//                     )}
//                     {definition.antonyms.length > 0 && (
//                       <p>Antonyms: {definition.antonyms.join(", ")}</p>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };
