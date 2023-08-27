"use client";
import { useState, useEffect } from "react";
import useModal from "../../hooks/useModal";
import NoteModal from "./NoteModal";
import SearchBar from "../SearchBar";
import Note from "./Note";

const Notes = ({ data }) => {
  const [isOpen, openModal, closeModal] = useModal(false);
  const [search, setSearch] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(data);
  const [currentNote, setCurrentNote] = useState({});

  useEffect(() => {
    const filtered = data.filter(
      (note) =>
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.text.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredNotes(filtered);
  }, [data, search]);

  const handleUpdate = (note) => {
    console.log(note);
    setCurrentNote({
      id: note.id,
      title: note.title,
      text: note.text
    });
    openModal();
  }

  const handleClose = (e) => {
    setCurrentNote({});
    closeModal();
  };

  const renderNotes = () => {
    return filteredNotes.map((item, index) => (
      <Note key={index} title={item.title} text={item.text} update={() => handleUpdate(item)}/>
    ));
  };

  return (
    <div className="flex flex-col justify-center">
      <header className="flex flex-wrap justify-between items-center px-7">
        <h1 className="text-4xl font-bold mb-8">Notes</h1>
        <div className="flex flex-row items-center mb-4">
          <SearchBar search={search} setSearch={setSearch} />
          <button
            className="bg-white rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-200 w-16 text-sm h-10"
            onClick={openModal}
          >
            Add
          </button>
        </div>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {renderNotes()}
      </div>
      <NoteModal
        isOpen={isOpen}
        onClose={handleClose}
        currentNote={currentNote}
      />
    </div>
  );
};

export default Notes;
