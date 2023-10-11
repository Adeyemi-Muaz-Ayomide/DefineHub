import "animate.css";

export default function Header() {
  return (
    <header className="mb-10 flex flex-col place-items-center gap-4 text-center">
      <h1 className="animate__animated animate__bounceInDown animate__delay-0.7s max-w-full mt-20 overflow-hidden truncate whitespace-nowrap bg-gradient-to-r from-blue-600 to-white bg-clip-text px-4 pb-4 text-5xl font-extrabold text-transparent sm:text-6xl xl:text-7xl">
        DefineHub
      </h1>
      <h3 className="animate__animated animate__bounceInLeft animate__delay-0.8s px-4 text-lg font-light text-gray-400 sm:text-2xl">
        Unlock Word Meanings, Synonyms, Antonyms, Origins, and Pronunciation in
        Seconds!
      </h3>
    </header>
  );
}
