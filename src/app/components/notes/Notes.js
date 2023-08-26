"use client"
import useModal from '../../hooks/useModal';
import NewNoteModal from './NewNoteModal'
import Note from './Note'

export const Notes = ({ data }) => {
 const [isOpen, openModal, closeModal] = useModal(false);

  return (
    <div className="flex flex-col items-center">
      <NewNoteModal isOpen={isOpen} onClose={closeModal} />
      <div className="flex items-center mb-4 w-full justify-center">
        <h1 className="text-2xl font-semibold mr-10">Notes</h1>
        <button className="bg-white rounded-full text-black text-3xl focus:outline-none focus:ring-2 focus:ring-blue-200 w-16" onClick={openModal}>
          +
        </button>
      </div>
      {data.map((item, index) => (
        <Note key={index} title={item.title} text={item.text} />
      ))}
    </div>
  );
};