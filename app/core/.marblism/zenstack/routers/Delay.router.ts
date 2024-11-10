/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.DelayInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).delay.createMany(input as any))),

        create: procedure.input($Schema.DelayInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).delay.create(input as any))),

        deleteMany: procedure.input($Schema.DelayInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).delay.deleteMany(input as any))),

        delete: procedure.input($Schema.DelayInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).delay.delete(input as any))),

        findFirst: procedure.input($Schema.DelayInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).delay.findFirst(input as any))),

        findMany: procedure.input($Schema.DelayInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).delay.findMany(input as any))),

        findUnique: procedure.input($Schema.DelayInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).delay.findUnique(input as any))),

        updateMany: procedure.input($Schema.DelayInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).delay.updateMany(input as any))),

        update: procedure.input($Schema.DelayInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).delay.update(input as any))),

        count: procedure.input($Schema.DelayInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).delay.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.DelayCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DelayCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DelayCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DelayCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.DelayCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DelayCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DelayGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DelayGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DelayCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DelayCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DelayGetPayload<T>, Context>) => Promise<Prisma.DelayGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.DelayDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DelayDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DelayDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DelayDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.DelayDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DelayDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DelayGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DelayGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DelayDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DelayDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DelayGetPayload<T>, Context>) => Promise<Prisma.DelayGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.DelayFindFirstArgs, TData = Prisma.DelayGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.DelayFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.DelayGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DelayFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.DelayFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.DelayGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.DelayGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.DelayFindManyArgs, TData = Array<Prisma.DelayGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.DelayFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.DelayGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DelayFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.DelayFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.DelayGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.DelayGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.DelayFindUniqueArgs, TData = Prisma.DelayGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.DelayFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.DelayGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.DelayFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.DelayFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.DelayGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.DelayGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.DelayUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DelayUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DelayUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DelayUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.DelayUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.DelayUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.DelayGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.DelayGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.DelayUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.DelayUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.DelayGetPayload<T>, Context>) => Promise<Prisma.DelayGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.DelayCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.DelayCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.DelayCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.DelayCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.DelayCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.DelayCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.DelayCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.DelayCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
