import EditIcon from "./EditIcon";

const Note = ({ title, text, update }) => (
  <div className="border m-4 p-4 rounded shadow-lg w-auto hover:bg-gray-100 transition duration-300 hover:text-black">
    <header className="flex align-items:center justify-between">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <button onClick={update} className="flex align-middle gap-2 hover:text-blue">
        Edit <EditIcon />
      </button>
    </header>
    <p>{text}</p>
  </div>
);

export default Note;
