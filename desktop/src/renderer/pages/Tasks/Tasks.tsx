import TaskManager from 'renderer/components/TaskManager/TaskManager';
import MainHoc from 'renderer/components/MainHoc/MainHoc';
const Tasks = () => {
  return <MainHoc component={TaskManager} />;
};

export default Tasks;
