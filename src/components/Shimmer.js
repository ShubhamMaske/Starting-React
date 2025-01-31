const Shimmer = () => {
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4  p-4">
            {Array(20).fill("").map((_, index) => (
                <div 
                    key={index} 
                    className="w-[250px] h-[300px] bg-gray-200 rounded-lg animate-pulse"
                ></div>
            ))}
        </div>
    );
};


export default Shimmer;