import AppointmentsManager from 'renderer/components/AppointmentsManager/AppointmentsManager';
import MainHoc from 'renderer/components/MainHoc/MainHoc';

const Appointments = () => {
  return <MainHoc component={AppointmentsManager} />;
};

export default Appointments;
