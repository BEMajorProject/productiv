const CurrentViewContainer = () => {
  return (
    <div className=" w-3/5 flex flex-col flex-[4]">
      <div className="flex border-black justify-center items-center border-l border-collapse h-24">
        Current tab's buttons and config
      </div>
      <div className="flex border-black justify-center items-center place-content-center border border-collapse flex-1">
        Current tab's content
      </div>
    </div>
  );
};

export default CurrentViewContainer;
