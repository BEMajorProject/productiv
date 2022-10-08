import NavbarListItem from '../NavbarListItem/NavbarListItem';

const SideBar = () => {
  return (
    <div className="border-black items-center border-collapse flex flex-col gap-2 w-1/5 p-4">
      <NavbarListItem title={'Task Manager'} />
      <NavbarListItem title={'Notes'} />
      <NavbarListItem title={'Appointments'} />
      <NavbarListItem title={'Habit Builder'} />
    </div>
  );
};

export default SideBar;
