

const ResultCard = ({ item }) => {

    const addToCollection = (item) => {
        if(!item) return
        const oldData = JSON.parse(localStorage.getItem('collection')) || [];
        const newData = [...oldData,item]

        localStorage.setItem('collection',JSON.stringify(newData))
        
        
    }
  return (
    <div className="relative w-[280px] h-[300px] bg-white rounded-xl overflow-hidden">
    <a target='_blank' href={item.url} className="h-full">
            {item.type === "photo" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
        {item.type === "video" ? (
          <video
            className="h-full w-full object-cover object-center"
            autoPlay
            loop
            muted
            src={item.src}
          />
        ) : (
          ""
        )}
        {item.type === "gif" ? (
          <img
            className="h-full w-full object-cover object-center"
            src={item.src}
            alt=""
          />
        ) : (
          ""
        )}
      </a>

      <div
        id="bottom"
        className="flex justify-between items-center absolute bottom-0 w-full h-[40%] px-6 py-6 gap-2 text-white"
      >
        <h2 className="text-m h-12 font-semibold capitalize overflow-hidden">{item.title}</h2>
        <button
        onClick={() => {
            addToCollection(item)
        }}
         className=" bg-gradient-to-r from-gray-600 to-cyan-700  text-white rounded font-small px-3 py-1 cursor-pointer active:scale-95 ">Save</button>
      </div>
    </div>
  );
};

export default ResultCard;
