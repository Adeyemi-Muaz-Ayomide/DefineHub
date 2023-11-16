export const ErrorStatus = () => {
  return (
    <div className="animate__animated animate__fadeIn mt-8 flex flex-col items-center justify-center text-xl text-gray-400">
      <p>There was an error... Check network connection</p>
    </div>
  );
};

export const NotFoundStatus = ({ userInput }) => {
  return (
    <div className="animate__animated animate__fadeIn mt-8 flex flex-col items-center justify-center text-center leading-relaxed text-gray-400 sm:text-xl">
      <p>
        {`Oops! No definition found for
        "${userInput}". Try searching another word`}
        .
      </p>
    </div>
  );
};
