import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from 'renderer/pages/404/404';
import Appointments from 'renderer/pages/Appointments/Appointments';
import Habits from 'renderer/pages/Habits/Habits';
import Notes from 'renderer/pages/Notes/Notes';
import Tasks from 'renderer/pages/Tasks/Tasks';

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Tasks />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/:404" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
