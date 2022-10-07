import trpc from '../../utils/trpc';

const TestFetch = () => {
  // const hello = trpc.useQuery(['hello1', { text: 'client' }]);
  const hello = trpc.hello.useQuery({
    text: 'anuj, firse trpc se bol raha hu',
  });
  if (!hello.data) return <div>Loading...</div>;
  return (
    <div>
      <p>{hello.data.message}</p>
    </div>
  );
};

export default TestFetch;
