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
    <div className="flex flex-col items-center">
      <SearchBar search={search} setSearch={setSearch} />
      <NoteModal isOpen={isOpen} onClose={handleClose} currentNote={currentNote}/>
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
