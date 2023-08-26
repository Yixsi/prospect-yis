'use client'
import { useState } from "react";
import { useRouter } from "next/navigation";

const NewNoteModal = ({ isOpen, onClose }) => {
  const [newNoteText, setNewNoteText] = useState("");
  const [newNoteTitle, setNewNoteTitle] = useState("");
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/createNote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: newNoteTitle, text: newNoteText }),
    });
    setNewNoteTitle("");
    setNewNoteText("");
    router.refresh();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black relative border-white border rounded-lg w-96 p-4">
        <button className="text-white absolute top-2 right-2" onClick={onClose}>
          {" "}
          x{" "}
        </button>
        <h3 className="text-xl font-bold text-white mb-4">Create New Note</h3>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-white mb-2">
              Title:
            </label>
            <input
              type="text"
              className="w-full p-2 border text-black rounded"
              value={newNoteTitle}
              onChange={(e) => setNewNoteTitle(e.target.value)} // update the newNoteTitle state
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-white mb-2">
              Text:
            </label>
            <textarea
              rows="5"
              className="w-full text-black p-2 border rounded"
              value={newNoteText}
              onChange={(e) => setNewNoteText(e.target.value)} // update the newNoteText state
            ></textarea>
          </div>
          <button type="submit" className="bg-white text-black rounded p-2">
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewNoteModal;