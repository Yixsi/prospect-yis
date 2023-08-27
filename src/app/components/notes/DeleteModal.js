"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteModal = ({ id, isOpen, onClose }) => {

  const [deleteNote, setDeleteNote] = useState("");
  const router = useRouter();

  const handleDelete = async (e) => {
    e.preventDefault();
    if (deleteNote !== "DELETE") return;
    console.log(id)
    await fetch(`/api/deleteNote/${id}`, {
      method: "DELETE",
    });
    router.refresh();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-80">
      <div className="flex flex-col justify-between gap-4 bg-black relative border-white border rounded-lg w-96 p-4">
        <button className="text-white absolute top-2 right-2" onClick={onClose}>
          {" "}
          x{" "}
        </button>
        <h3 className="text-xl font-bold text-white mb-4">
          This action is irreversible. Type <span className="text-red-600">DELETE</span> to remove this
          note.
        </h3>
        <input
          type="text"
          className="w-full p-2 border text-black rounded"
          value={deleteNote}
          onChange={(e) => setDeleteNote(e.target.value)}
        />
        <button
          type="submit"
          onClick={handleDelete}
          className="w-20 bg-white text-black rounded p-2 border border-gray-300 hover:border-gray-500 font-normal hover:font-bold hover:bg-black hover:text-white"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
