const Loader = () => {
  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50">
      
      {/* Company Logo */}
      <img
        src="https://res.cloudinary.com/dhd5do52g/image/upload/v1768120968/file_00000000ba6c71faa39b6cb1891035c4_gpbbgm.png"
        alt="Company Logo"
        className="w-40 md:w-52 drop-shadow-lg animate-pulse"
      />

      {/* Spinner */}
      <div className="mt-6 w-12 h-12 border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>

      {/* Loading Text */}
      <h2 className="mt-6 text-2xl font-semibold text-gray-800">
        Loading...
      </h2>

      <p className="mt-2 text-gray-500 text-center">
        Preparing your financial dashboard
      </p>
    </div>
  );
};

export default Loader;