import { useRef, useState, useEffect } from "react";
import PlayIcon from "./PlayIcon";

export default function AudioComponent({ audio, definition }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(audio));

    useEffect(() => {
      // Update the audio source when the audio prop changes
      audioRef.current.src = audio;
    }, [audio]);

  const playAudio = () => {
    if (!isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };
  const getPhoneticsText = (definition) => {
    return (
      definition.phonetics[0]?.text || definition.phonetics[1]?.text || "N/A"
    );
  };

  return (
    <button
      onClick={playAudio}
      src={audio}
      className=" border justify-center items-center border-gray-700 border-opacity-50 py-2 hover:bg-gray-700 hover:bg-opacity-50 px-8 rounded-[20px] flex flex-row gap-5"
    >
      <PlayIcon />
      <span>{getPhoneticsText(definition)}</span>
    </button>
  );
}
