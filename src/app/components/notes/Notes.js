"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import useModal from "../../hooks/useModal";
import NoteModal from "./NoteModal";
import DeleteModal from "./DeleteModal";
import SearchBar from "../SearchBar";
import Note from "./Note";
import NoteIcon from "../svg/NoteIcon";

const Notes = ({ data }) => {
  const [isOpen, openModal, closeModal] = useModal(false);
  const [isOpenDelete, openDeleteModal, closeDeleteModal] = useModal(false);
  const [search, setSearch] = useState("");
  const [filteredNotes, setFilteredNotes] = useState(data);
  const [currentNote, setCurrentNote] = useState({});
  const router = useRouter();

  useEffect(() => {
    const filtered = data.filter(
      (note) =>
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.text.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredNotes(filtered);
  }, [data, search]);

  const handleUpdate = (note) => {
    setCurrentNote({
      id: note.id,
      title: note.title,
      text: note.text,
    });
    openModal();
  };

  const handleDelete = async (note) => {
    setCurrentNote(note)
    openDeleteModal();
  };

  const handleClose = () => {
    setCurrentNote({});
    closeModal();
  };

  const renderNotes = () => {
    return filteredNotes.map((item, index) => (
      <Note
        key={index}
        title={item.title}
        text={item.text}
        update={() => handleUpdate(item)}
        openDelete={() => handleDelete(item)}
      />
    ));
  };

  return (
    <div className="flex flex-col justify-center">
      <header className="flex flex-wrap justify-between items-center px-7">
        <h1 className="flex text-5xl font-bold mb-8 gap-4">
          <span className="font-light text-white-300 tracking-tighter">My</span>
          <span className="text-transparent bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text tracking-widest">
            NOTES
          </span>
        </h1>
        <SearchBar search={search} setSearch={setSearch} />
        <button
          className="flex items-center gap-1 bg-white border-gray-600 rounded-lg text-black font-normal focus:outline-none focus:ring-2 focus:ring-blue-200 w-auto text-sm h-10 px-5 transition duration-300 hover:bg-black hover:border-white hover:text-white"
          onClick={openModal}
        >
          Add note <NoteIcon />
        </button>
      </header>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {renderNotes()}
      </div>
      <NoteModal
        isOpen={isOpen}
        onClose={handleClose}
        currentNote={currentNote}
      />
      <DeleteModal
        isOpen={isOpenDelete}
        onClose={closeDeleteModal}
        id={currentNote.id}
      />
    </div>
  );
};

export default Notes;
