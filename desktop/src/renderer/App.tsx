// import icon from '../../assets/icon.svg';
import './App.global.css';

import { useState } from 'react';
import { MemoryRouter as Router, Route, Routes } from 'react-router-dom';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';

// import TestFetch from './components/TestFetch/TestFetch';
import MainHoc from './components/TestFetch/MainHoc/MainHoc';
import trpc from './utils/trpc';

const Hello = () => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3001/trpc',
          // optional
          // headers() {
          //   return {
          //     authorization: getAuthCookie(),
          //   };
          // },
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {/* <TestFetch /> */}
        <MainHoc />
      </QueryClientProvider>
    </trpc.Provider>
    // <div>
    //   <div className="Hello">
    //     <img width="200" alt="icon" src={icon} />
    //   </div>
    //   <h1>electron-react-boilerplate</h1>
    //   <div className="Hello">
    //     <a
    //       href="https://electron-react-boilerplate.js.org/"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       <button type="button">
    //         <span role="img" aria-label="books">
    //           📚
    //         </span>
    //         Read our docs
    //       </button>
    //     </a>
    //     <a
    //       href="https://github.com/sponsors/electron-react-boilerplate"
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       <button type="button">
    //         <span role="img" aria-label="books">
    //           🙏
    //         </span>
    //         Donate
    //       </button>
    //     </a>
    //   </div>
    // </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
