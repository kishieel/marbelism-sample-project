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

        createMany: procedure.input($Schema.RouteInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).route.createMany(input as any))),

        create: procedure.input($Schema.RouteInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).route.create(input as any))),

        deleteMany: procedure.input($Schema.RouteInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).route.deleteMany(input as any))),

        delete: procedure.input($Schema.RouteInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).route.delete(input as any))),

        findFirst: procedure.input($Schema.RouteInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).route.findFirst(input as any))),

        findMany: procedure.input($Schema.RouteInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).route.findMany(input as any))),

        findUnique: procedure.input($Schema.RouteInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).route.findUnique(input as any))),

        updateMany: procedure.input($Schema.RouteInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).route.updateMany(input as any))),

        update: procedure.input($Schema.RouteInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).route.update(input as any))),

        count: procedure.input($Schema.RouteInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).route.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.RouteCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RouteCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RouteCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RouteCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.RouteCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RouteCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RouteGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RouteGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RouteCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RouteCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RouteGetPayload<T>, Context>) => Promise<Prisma.RouteGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.RouteDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RouteDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RouteDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RouteDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.RouteDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RouteDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RouteGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RouteGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RouteDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RouteDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RouteGetPayload<T>, Context>) => Promise<Prisma.RouteGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.RouteFindFirstArgs, TData = Prisma.RouteGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.RouteFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RouteGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RouteFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.RouteFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RouteGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RouteGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.RouteFindManyArgs, TData = Array<Prisma.RouteGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.RouteFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.RouteGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RouteFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.RouteFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.RouteGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.RouteGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.RouteFindUniqueArgs, TData = Prisma.RouteGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.RouteFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.RouteGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.RouteFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.RouteFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.RouteGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.RouteGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.RouteUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RouteUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RouteUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RouteUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.RouteUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.RouteUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.RouteGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.RouteGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.RouteUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.RouteUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.RouteGetPayload<T>, Context>) => Promise<Prisma.RouteGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.RouteCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.RouteCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.RouteCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.RouteCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.RouteCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.RouteCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.RouteCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.RouteCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
