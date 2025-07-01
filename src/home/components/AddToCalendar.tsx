const AddToCalendar = () => {
  return (
    <div className="w-full flex justify-center my-4">
      {/* Botón para agendar */}
      <button
        type="button"
        className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition"
      >
        Agendar en tu calendario
      </button>
    </div>
  );
};
export default AddToCalendar;
