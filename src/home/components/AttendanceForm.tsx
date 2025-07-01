const AttendanceForm = () => {
  return (
    <div className="w-full max-w-md my-6">
      {/* Formulario de asistencia */}
      <form className="flex flex-col items-center gap-2">
        <span className="font-semibold">¿Puedes asistir?</span>
        <div className="flex gap-4">
          <button
            type="button"
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Sí
          </button>
          <button
            type="button"
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            No
          </button>
        </div>
      </form>
    </div>
  );
};
export default AttendanceForm;
