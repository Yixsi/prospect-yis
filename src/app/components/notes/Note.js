const Note = ({ title, text }) => (
  <div className="border m-4 p-4 rounded shadow-lg w-96">
    <h2 className="text-xl font-bold mb-2">{title}</h2>
    <p>{text}</p>
  </div>
);

export default Note;