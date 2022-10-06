import { createTRPCReact } from '@trpc/react';

import type { AppRouter } from '../../../../server/src/trpc/routers';

const trpc = createTRPCReact<AppRouter>();

export default trpc;
