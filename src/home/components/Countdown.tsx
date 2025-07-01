const Countdown = () => {
  return (
    <div className="w-full max-w-md flex justify-center my-4">
      {/* Contador aquí */}
      <div className="bg-white rounded-lg shadow p-4 flex gap-4">
        <span>00 meses</span>
        <span>00 días</span>
        <span>00 horas</span>
        <span>00 min</span>
      </div>
    </div>
  );
};
export default Countdown;
