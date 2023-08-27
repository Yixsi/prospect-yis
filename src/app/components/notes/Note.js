const Note = ({ title, text, update }) => (
  <div className="border m-4 p-4 rounded shadow-lg w-auto">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <button onClick={update}>Update</button>
    <p>{text}</p>
  </div>
);

export default Note;