import NavbarListItem from '../NavbarListItem/NavbarListItem';

const SideBar = () => {
  return (
    <div className="border-black items-center border-collapse flex flex-col gap-2 w-1/5 p-4">
      <NavbarListItem title={'Task Manager'} route={'/tasks'} />
      <NavbarListItem title={'Notes'} route={'/notes'} />
      <NavbarListItem title={'Appointments'} route={'/appointments'} />
      <NavbarListItem title={'Habit Builder'} route={'/habits'} />
    </div>
  );
};

export default SideBar;
