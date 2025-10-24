import { initTRPC} from '@trpc/server';
import { cache } from 'react';
import superjson from 'superjson';
export const createTRPCContext = cache(async () => {
    return { userId : 'sans'};
});

const t = initTRPC.create({
    // context: createTRPCContext,
});

export const createTRPCRouter = t.router;
export const createCallerFactory = t.createCallerFactory;
export const baseProcedure = t.procedure;