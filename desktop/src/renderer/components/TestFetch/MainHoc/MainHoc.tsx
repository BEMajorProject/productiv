import CurrentViewContainer from 'renderer/components/CurrentViewContainer/CurrentViewContainer';
import SideBar from 'renderer/components/SideBar/SideBar';
import TopBar from 'renderer/components/TopBar/TopBar';

const MainHoc = () => {
  return (
    <div className="h-screen flex flex-col">
      <TopBar />
      <div className="flex flex-1">
        <SideBar />
        <CurrentViewContainer />
      </div>
    </div>
  );
};

export default MainHoc;
