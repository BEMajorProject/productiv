const MainHoc = () => {
  return (
    <div className=" h-screen  flex flex-col">
      <div className="border-black flex justify-center items-center  border-b border-collapse h-16   ">
        a
      </div>

      <div className="flex flex-1">
        <div className="border-black justify-center items-center   border-collapse flex flex-1  w-1/5">
          b
        </div>
        <div className=" w-3/5 flex flex-col flex-[4]">
          <div className="flex border-black justify-center items-center  border-l border-collapse h-24  ">
            c
          </div>
          <div className="flex border-black justify-center items-center  place-content-center border border-collapse flex-1">
            d
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHoc;
