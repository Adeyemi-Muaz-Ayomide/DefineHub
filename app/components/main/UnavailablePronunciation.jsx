import PlayIcon from "./PlayIcon";

export default function UnavailablePronunciation({ audio, definition }) {
  const getPhoneticsText = (definition) => {
    return (
      definition.phonetics?.[0]?.text ||
      definition.phonetics?.[1]?.text ||
      "N/A"
    );
  };
  return (
    <button
      onClick={() => alert("Pronunciation not available")}
      src={audio}
      className=" border justify-center items-center border-gray-700 border-opacity-50 py-2 hover:bg-gray-700 hover:bg-opacity-50 px-8 rounded-[20px] flex flex-row gap-5"
    >
      <PlayIcon />
      <span>{getPhoneticsText(definition)}</span>
    </button>
  );
}
