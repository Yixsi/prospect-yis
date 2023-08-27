'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const NoteModal = ({ currentNote, isOpen, onClose }) => {
  console.log(currentNote);
  const [note, setNote] = useState({
    id: currentNote?.id,
    title: currentNote?.title,
    text: currentNote?.text
  });
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!Object.keys(currentNote).length) {
      await fetch("/api/createNote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: note.title, text: note.text }),
      });
      setNote({
        title: "",
        text: "",
      });
      router.refresh();
      onClose();
    } else {
      console.log(note);
      await fetch("/api/updateNote", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });
      setNote({
        title: "",
        text: "",
      });
      router.refresh();
      onClose();
    }
  };

  useEffect(() => {
    setNote({
      id: currentNote?.id,
      title: currentNote?.title,
      text: currentNote?.text,
    });
  }, [currentNote]);

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black relative border-white border rounded-lg w-96 p-4">
        <button className="text-white absolute top-2 right-2" onClick={onClose}>
          {" "}
          x{" "}
        </button>
        <h3 className="text-xl font-bold text-white mb-4">{!Object.keys(currentNote).length ? 'Create' : 'Update'} note</h3>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-white mb-2">
              Title:
            </label>
            <input
              type="text"
              className="w-full p-2 border text-black rounded"
              value={note.title}
              onChange={(e) => setNote({
                ...note,
                title: e.target.value
              })} // update the note.title state
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-white mb-2">
              Text:
            </label>
            <textarea
              rows="5"
              className="w-full text-black p-2 border rounded"
              value={note.text}
              onChange={(e) => setNote({
                ...note,
                text: e.target.value
              })} // update the note.text state
            ></textarea>
          </div>
          <button type="submit" className="bg-white text-black rounded p-2">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default NoteModal;