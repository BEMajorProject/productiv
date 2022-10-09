import { ComponentType } from 'react';
import SideBar from 'renderer/components/SideBar/SideBar';
import TopBar from 'renderer/components/TopBar/TopBar';

const MainHoc = ({ component: Component }: { component: ComponentType }) => {
  return (
    <div className="h-screen flex flex-col">
      <TopBar />
      <div className="flex flex-1">
        <SideBar />
        {<Component />}
      </div>
    </div>
  );
};

export default MainHoc;
