import HabitsManager from 'renderer/components/HabitsManager/HabitsManager';
import MainHoc from 'renderer/components/MainHoc/MainHoc';

const Habits = () => {
  return <MainHoc component={HabitsManager} />;
};

export default Habits;
