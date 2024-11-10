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

        createMany: procedure.input($Schema.JourneyInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).journey.createMany(input as any))),

        create: procedure.input($Schema.JourneyInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).journey.create(input as any))),

        deleteMany: procedure.input($Schema.JourneyInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).journey.deleteMany(input as any))),

        delete: procedure.input($Schema.JourneyInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).journey.delete(input as any))),

        findFirst: procedure.input($Schema.JourneyInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).journey.findFirst(input as any))),

        findMany: procedure.input($Schema.JourneyInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).journey.findMany(input as any))),

        findUnique: procedure.input($Schema.JourneyInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).journey.findUnique(input as any))),

        updateMany: procedure.input($Schema.JourneyInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).journey.updateMany(input as any))),

        update: procedure.input($Schema.JourneyInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).journey.update(input as any))),

        count: procedure.input($Schema.JourneyInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).journey.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.JourneyCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JourneyCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JourneyCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JourneyCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.JourneyCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JourneyCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.JourneyGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.JourneyGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JourneyCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JourneyCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.JourneyGetPayload<T>, Context>) => Promise<Prisma.JourneyGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.JourneyDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JourneyDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JourneyDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JourneyDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.JourneyDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JourneyDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.JourneyGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.JourneyGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JourneyDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JourneyDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.JourneyGetPayload<T>, Context>) => Promise<Prisma.JourneyGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.JourneyFindFirstArgs, TData = Prisma.JourneyGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.JourneyFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.JourneyGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.JourneyFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.JourneyFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.JourneyGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.JourneyGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.JourneyFindManyArgs, TData = Array<Prisma.JourneyGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.JourneyFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.JourneyGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.JourneyFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.JourneyFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.JourneyGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.JourneyGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.JourneyFindUniqueArgs, TData = Prisma.JourneyGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.JourneyFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.JourneyGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.JourneyFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.JourneyFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.JourneyGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.JourneyGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.JourneyUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JourneyUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JourneyUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JourneyUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.JourneyUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.JourneyUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.JourneyGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.JourneyGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.JourneyUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.JourneyUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.JourneyGetPayload<T>, Context>) => Promise<Prisma.JourneyGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.JourneyCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.JourneyCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.JourneyCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.JourneyCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.JourneyCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.JourneyCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.JourneyCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.JourneyCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
