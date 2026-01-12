// src/components/common/Loader.tsx

const Loader = () => {
  return (
    <div className="w-full h-64 flex items-center justify-center bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        {/* Simple CSS Spinner */}
        <div className="w-12 h-12 border-4 border-gray-200 border-t-[#4a56a2] rounded-full animate-spin"></div>
        <span className="text-gray-500 text-sm font-medium">Loading section...</span>
      </div>
    </div>
  );
};

export default Loader;