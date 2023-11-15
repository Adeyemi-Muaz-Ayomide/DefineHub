export const fetchDictionaryData = async (word) => {
  try {
    setIsLoading(true);
    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch");
    }
    const [data] = await response.json();
    const { word: wordText, phonetic, phonetics, origin, meanings } = data;

    return {
      word: wordText,
      phonetic,
      phonetics,
      origin,
      meanings: meanings.map((meaning) => ({
        partOfSpeech: meaning.partOfSpeech,
        definitions: meaning.definitions.map((definition) => ({
          definition: definition.definition,
          example: definition.example,
          synonyms: definition.synonyms || [],
          antonyms: definition.antonyms || [],
        })),
      })),
    };
  } catch (error) {
    console.error("Error fetching word definition:", error.message);
  }
};
