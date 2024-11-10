/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from '.'
import * as _Schema from '@zenstackhq/runtime/zod/input'
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema
import { checkRead, checkMutate } from '../helper'
import type { Prisma } from '@zenstackhq/runtime/models'
import type {
  UseTRPCMutationOptions,
  UseTRPCMutationResult,
  UseTRPCQueryOptions,
  UseTRPCQueryResult,
  UseTRPCInfiniteQueryOptions,
  UseTRPCInfiniteQueryResult,
} from '@trpc/react-query/shared'
import type { TRPCClientErrorLike } from '@trpc/client'
import type { AnyRouter } from '@trpc/server'

export default function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    createMany: procedure
      .input($Schema.SavedRouteInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).savedRoute.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.SavedRouteInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).savedRoute.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.SavedRouteInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).savedRoute.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.SavedRouteInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).savedRoute.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.SavedRouteInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).savedRoute.findFirst(input as any)),
      ),

    findMany: procedure
      .input($Schema.SavedRouteInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).savedRoute.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.SavedRouteInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).savedRoute.findUnique(input as any)),
      ),

    updateMany: procedure
      .input($Schema.SavedRouteInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).savedRoute.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.SavedRouteInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).savedRoute.update(input as any)),
      ),

    count: procedure
      .input($Schema.SavedRouteInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).savedRoute.count(input as any)),
      ),
  })
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter['_def']['_config']['$types']['ctx'],
> {
  createMany: {
    useMutation: <T extends Prisma.SavedRouteCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.SavedRouteCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.SavedRouteCreateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.SavedRouteCreateManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  create: {
    useMutation: <T extends Prisma.SavedRouteCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.SavedRouteCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SavedRouteGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.SavedRouteGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.SavedRouteCreateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.SavedRouteCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.SavedRouteGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.SavedRouteGetPayload<T>>
    }
  }
  deleteMany: {
    useMutation: <T extends Prisma.SavedRouteDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.SavedRouteDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.SavedRouteDeleteManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.SavedRouteDeleteManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  delete: {
    useMutation: <T extends Prisma.SavedRouteDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.SavedRouteDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SavedRouteGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.SavedRouteGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.SavedRouteDeleteArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.SavedRouteDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.SavedRouteGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.SavedRouteGetPayload<T>>
    }
  }
  findFirst: {
    useQuery: <
      T extends Prisma.SavedRouteFindFirstArgs,
      TData = Prisma.SavedRouteGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.SavedRouteFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.SavedRouteGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.SavedRouteFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.SavedRouteFindFirstArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.SavedRouteGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.SavedRouteGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findMany: {
    useQuery: <
      T extends Prisma.SavedRouteFindManyArgs,
      TData = Array<Prisma.SavedRouteGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.SavedRouteFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.SavedRouteGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.SavedRouteFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.SavedRouteFindManyArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.SavedRouteGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.SavedRouteGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findUnique: {
    useQuery: <
      T extends Prisma.SavedRouteFindUniqueArgs,
      TData = Prisma.SavedRouteGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.SavedRouteFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.SavedRouteGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.SavedRouteFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.SavedRouteFindUniqueArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.SavedRouteGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.SavedRouteGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  updateMany: {
    useMutation: <T extends Prisma.SavedRouteUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.SavedRouteUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.SavedRouteUpdateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.SavedRouteUpdateManyArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.BatchPayload,
          Context
        >,
      ) => Promise<Prisma.BatchPayload>
    }
  }
  update: {
    useMutation: <T extends Prisma.SavedRouteUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.SavedRouteUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SavedRouteGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.SavedRouteGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.SavedRouteUpdateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.SavedRouteUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.SavedRouteGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.SavedRouteGetPayload<T>>
    }
  }
  count: {
    useQuery: <
      T extends Prisma.SavedRouteCountArgs,
      TData = 'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.SavedRouteCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.SavedRouteCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.SavedRouteCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.SavedRouteCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.SavedRouteCountArgs>, 'cursor'>,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.SavedRouteCountAggregateOutputType
              >
          : number,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.SavedRouteCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >
  }
}
