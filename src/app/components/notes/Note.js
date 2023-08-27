import EditIcon from "../svg/EditIcon";
import DeleteIcon from "../svg/DeleteIcon";

const Note = ({ title, text, update, openDelete }) => (
  <div className="flex flex-col justify-between border m-4 p-4 rounded shadow-lg w-auto hover:bg-white transition duration-300 hover:text-black">
    <section className="align-items:center">
      <h2 className="text-xl font-bold mb-2 text-gray-800">{title}</h2>
      <p className="font-light">{text}</p>
    </section>
    <div className="flex w-full justify-end gap-3">
      <button
        onClick={update}
        className="flex align-middle gap-1 p-2  border border-transparent hover:border-gray-500 hover:rounded hover:p-2"
      >
        Edit <EditIcon />
      </button>
      <button onClick={openDelete} className="flex align-middle gap-1 p-2 border border-transparent hover:border-gray-500  hover:rounded hover:p-2">
        Delete <DeleteIcon />
      </button>
    </div>
  </div>
);

export default Note;
