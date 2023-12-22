const SkeletonLoading = () => {
  return (
    <div className="bg-gray-700 mt-10 rounded-lg shadow-md p-4 animate-pulse">
      <div className="w-2/3 h-10 bg-gray-600 rounded mb-2"></div>

      <div className="w-full h-8 bg-gray-600 rounded mb-2"></div>
      <div className="w-full h-8 bg-gray-600 rounded mb-2"></div>
      <div className="w-1/2 h-8 bg-gray-600 rounded"></div>
    </div>
  );
};

export default SkeletonLoading;
