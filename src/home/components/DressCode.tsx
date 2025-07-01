const DressCode = () => {
  return (
    <div className="w-full flex flex-col items-center my-4">
      <span className="mb-2 font-semibold">Dress Code</span>
      <div className="flex gap-4">
        <button
          type="button"
          className="flex flex-col items-center bg-blue-100 p-2 rounded hover:bg-blue-200 transition"
        >
          {/* Icono hombre */}
          <span role="img" aria-label="hombre" className="text-2xl">
            👔
          </span>
          Hombre
        </button>
        <button
          type="button"
          className="flex flex-col items-center bg-pink-100 p-2 rounded hover:bg-pink-200 transition"
        >
          {/* Icono mujer */}
          <span role="img" aria-label="mujer" className="text-2xl">
            👗
          </span>
          Mujer
        </button>
      </div>
    </div>
  );
};
export default DressCode;
