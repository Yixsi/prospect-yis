'use client'
import { useState, useEffect } from "react";
import useModal from "../../hooks/useModal";
import NewNoteModal from "./NewNoteModal";
import SearchBar from "../SearchBar";
import Note from "./Note";

const Notes = ({ data }) => {
  const [isOpen, openModal, closeModal] = useModal(false);
  const [search, setSearch] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(data);

  useEffect(() => {
    const filtered = data.filter(
      (note) =>
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.text.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredNotes(filtered);
  }, [data, search]);

  const renderNotes = () => {
    return filteredNotes.map((item, index) => (
      <Note key={index} title={item.title} text={item.text} />
    ));
  };

  return (
    <div className="flex flex-col items-center">
      <SearchBar search={search} setSearch={setSearch} />
      <NewNoteModal isOpen={isOpen} onClose={closeModal} />
      <div className="flex items-center mb-4 w-full justify-center">
        <h1 className="text-2xl font-semibold mr-10">Notes</h1>
        <button
          className="bg-white rounded-full text-black text-3xl focus:outline-none focus:ring-2 focus:ring-blue-200 w-16"
          onClick={openModal}
        >
          +
        </button>
      </div>
      {renderNotes()}
    </div>
  );
};

export default Notes;
