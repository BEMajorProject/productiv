import { useLocation } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <code>the route `{location.pathname}` was not found</code>
    </div>
  );
};

export default NotFound;
