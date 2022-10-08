const TopBar = () => {
  return (
    <div className="border-black flex justify-center items-center border-b border-collapse h-16 ">
      <div className="flex justify-center items-center  h-full w-fit  ">
        <div className="p-2 rounded-full mx-3 flex flex-col ">
          <span className="-m-2">—</span>
          <span className="-m-2">—</span>
          <span className="-m-2">—</span>
        </div>
      </div>
      <div className="flex justify-center items-center  h-full w-1/5  font-semibold text-xl">
        productiv
      </div>
      <div className="flex justify-center items-center  h-full w-3/5 ">
        <input
          type="text"
          name="search"
          placeholder="search bar?"
          className="p-2 rounded-xl border-black border w-full mx-5 my-2"
        />
      </div>
      <div className="flex justify-end items-center h-full w-2/5  ">
        <div className="flex justify-between px-4">
          <div className=" mx-2 flex justify-center items-center bg-gray-300 rounded-xl w-[32px] h-[32px]">
            a
          </div>
          <div className=" mx-2 flex justify-center items-center bg-gray-300 rounded-xl w-[32px] h-[32px]">
            a
          </div>
          <div className=" mx-2 flex justify-center items-center bg-gray-300 rounded-xl w-[32px] h-[32px]">
            a
          </div>
        </div>
        <div className=" flex justify-center items-center bg-gray-300 rounded-full w-[48px] h-[48px] mx-4">
          aa
        </div>
      </div>
    </div>
  );
};

export default TopBar;
