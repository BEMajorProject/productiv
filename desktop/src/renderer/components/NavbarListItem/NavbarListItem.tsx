const NavbarListItem = ({ title }: { title: string }) => {
  return (
    <div className="flex py-2 px-4 w-full gap-5  rounded-xl hover:bg-blue-100 hover:font-bold ease-in-out duration-300 cursor-pointer">
      <div className="mx-2 flex justify-center items-center bg-gray-300 rounded-lg w-[24px] h-[24px]"></div>
      <div className="flex justify-center items-center">{title}</div>
    </div>
  );
};

export default NavbarListItem;
