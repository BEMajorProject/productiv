import trpc from '../../utils/trpc';
import './../../App.global.css';

const TestFetch = () => {
  // const hello = trpc.useQuery(['hello1', { text: 'client' }]);
  const hello = trpc.hello.useQuery({
    text: 'anuj, firse trpc se bol raha hu',
  });
  if (!hello.data) return <div>Loading...</div>;
  return (
    <div className="p-4 text-xl bg-red-500">
      <p>{hello.data.message}</p>
    </div>
  );
};

export default TestFetch;
