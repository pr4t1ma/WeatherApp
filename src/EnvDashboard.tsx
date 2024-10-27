const EnvDashboard = () => {
  return (
    <div className="flex  my-10 justify-between">
      <div className="uvray flex flex-col justify-center gap-2">
        <button className="shadow-sm bg-blue-500 rounded-full px-6 py-2 text-white">
          high
        </button>
        <p>UV</p>
      </div>
      <div className="Pollution flex flex-col justify-center gap-2">
        <button className="shadow-sm bg-blue-500 rounded-full px-6 py-2 text-white">
          high
        </button>
        <p>pollution</p>
      </div>
      <div className="pollen flex flex-col justify-center gap-2">
        <button className="shadow-sm bg-blue-500 rounded-full px-6 py-2 text-white">
          high
        </button>
        <p>Pollen</p>
      </div>
    </div>
  );
};

export default EnvDashboard;
