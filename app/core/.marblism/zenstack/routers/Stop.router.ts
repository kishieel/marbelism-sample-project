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

        createMany: procedure.input($Schema.StopInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).stop.createMany(input as any))),

        create: procedure.input($Schema.StopInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).stop.create(input as any))),

        deleteMany: procedure.input($Schema.StopInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).stop.deleteMany(input as any))),

        delete: procedure.input($Schema.StopInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).stop.delete(input as any))),

        findFirst: procedure.input($Schema.StopInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).stop.findFirst(input as any))),

        findMany: procedure.input($Schema.StopInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).stop.findMany(input as any))),

        findUnique: procedure.input($Schema.StopInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).stop.findUnique(input as any))),

        updateMany: procedure.input($Schema.StopInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).stop.updateMany(input as any))),

        update: procedure.input($Schema.StopInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).stop.update(input as any))),

        count: procedure.input($Schema.StopInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).stop.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.StopCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StopCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StopCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StopCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.StopCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StopCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.StopGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.StopGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StopCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StopCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.StopGetPayload<T>, Context>) => Promise<Prisma.StopGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.StopDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StopDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StopDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StopDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.StopDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StopDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.StopGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.StopGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StopDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StopDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.StopGetPayload<T>, Context>) => Promise<Prisma.StopGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.StopFindFirstArgs, TData = Prisma.StopGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.StopFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.StopGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.StopFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.StopFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.StopGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.StopGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.StopFindManyArgs, TData = Array<Prisma.StopGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.StopFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.StopGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.StopFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.StopFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.StopGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.StopGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.StopFindUniqueArgs, TData = Prisma.StopGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.StopFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.StopGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.StopFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.StopFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.StopGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.StopGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.StopUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StopUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StopUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StopUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.StopUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.StopUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.StopGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.StopGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.StopUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.StopUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.StopGetPayload<T>, Context>) => Promise<Prisma.StopGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.StopCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.StopCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.StopCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.StopCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.StopCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.StopCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.StopCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.StopCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
