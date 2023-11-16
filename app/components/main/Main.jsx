"use client";

import { useState } from "react";
import { ErrorStatus, NotFoundStatus } from "./Status";
import Spinner from "./Spinner";
import WordSearch from "./WordSearch";
import FormField from "./FormField";
import "animate.css";

export default function Main() {
  const [searchQuery, setSearchQuery] = useState("");
  const [userInput, setUserInput] = useState("");
  const [definition, setDefinition] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    if (searchQuery.trim() == "") return;
    e.preventDefault();
    setUserInput(searchQuery);
    fetchDictionaryData(searchQuery);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const fetchDictionaryData = async () => {
    setStatus("loading");
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchQuery}`
      );
      setUserInput(searchQuery);
      if (!response.ok) {
        setStatus("Not Found");
      } else {
        setStatus("Definition Found");
        const data = await response.json();
        setDefinition(data[0]);
        setSearchQuery("");
      }
    } catch (error) {
      if (error.message === "An error occurred: 404") {
        setStatus("Not Found");
      } else {
        setStatus("error");
      }
    }
  };

  const handleWordClick = async (word) => {
    setStatus("loading");
    setSearchQuery(word);
    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      if (!response.ok) {
        setStatus("Not Found");
      } else {
        setStatus("Definition Found");
        const data = await response.json();
        setDefinition(data[0]);
        setUserInput(word);
      }
    } catch (error) {
      if (error.message === "An error occurred: 404") {
        setStatus("Not Found");
      } else {
        setStatus("error");
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className={` flex-grow`}>
      <FormField
        onSubmit={handleSubmit}
        onInputChange={handleInputChange}
        value={searchQuery}
        onFetchData={fetchDictionaryData}
      />

      {status === "loading" && <Spinner />}
      {status === "Not Found" && <NotFoundStatus userInput={userInput} />}
      {status === "error" && <ErrorStatus />}
      {status === "Definition Found" && (
        <WordSearch definition={definition} handleWordClick={handleWordClick} />
      )}
    </div>
  );
}
