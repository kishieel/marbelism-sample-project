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
      .input($Schema.JourneyRouteInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).journeyRoute.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.JourneyRouteInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).journeyRoute.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.JourneyRouteInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).journeyRoute.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.JourneyRouteInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).journeyRoute.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.JourneyRouteInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).journeyRoute.findFirst(input as any)),
      ),

    findMany: procedure
      .input($Schema.JourneyRouteInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).journeyRoute.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.JourneyRouteInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).journeyRoute.findUnique(input as any)),
      ),

    updateMany: procedure
      .input($Schema.JourneyRouteInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).journeyRoute.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.JourneyRouteInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).journeyRoute.update(input as any)),
      ),

    count: procedure
      .input($Schema.JourneyRouteInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).journeyRoute.count(input as any)),
      ),
  })
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter['_def']['_config']['$types']['ctx'],
> {
  createMany: {
    useMutation: <T extends Prisma.JourneyRouteCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.JourneyRouteCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.JourneyRouteCreateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.JourneyRouteCreateManyArgs>(
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
    useMutation: <T extends Prisma.JourneyRouteCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.JourneyRouteCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.JourneyRouteGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.JourneyRouteGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.JourneyRouteCreateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.JourneyRouteCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.JourneyRouteGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.JourneyRouteGetPayload<T>>
    }
  }
  deleteMany: {
    useMutation: <T extends Prisma.JourneyRouteDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.JourneyRouteDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.JourneyRouteDeleteManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.JourneyRouteDeleteManyArgs>(
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
    useMutation: <T extends Prisma.JourneyRouteDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.JourneyRouteDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.JourneyRouteGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.JourneyRouteGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.JourneyRouteDeleteArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.JourneyRouteDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.JourneyRouteGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.JourneyRouteGetPayload<T>>
    }
  }
  findFirst: {
    useQuery: <
      T extends Prisma.JourneyRouteFindFirstArgs,
      TData = Prisma.JourneyRouteGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.JourneyRouteFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.JourneyRouteGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.JourneyRouteFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.JourneyRouteFindFirstArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.JourneyRouteGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.JourneyRouteGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findMany: {
    useQuery: <
      T extends Prisma.JourneyRouteFindManyArgs,
      TData = Array<Prisma.JourneyRouteGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.JourneyRouteFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.JourneyRouteGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.JourneyRouteFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.JourneyRouteFindManyArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.JourneyRouteGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.JourneyRouteGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findUnique: {
    useQuery: <
      T extends Prisma.JourneyRouteFindUniqueArgs,
      TData = Prisma.JourneyRouteGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.JourneyRouteFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.JourneyRouteGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.JourneyRouteFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.JourneyRouteFindUniqueArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.JourneyRouteGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.JourneyRouteGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  updateMany: {
    useMutation: <T extends Prisma.JourneyRouteUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.JourneyRouteUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.JourneyRouteUpdateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.JourneyRouteUpdateManyArgs>(
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
    useMutation: <T extends Prisma.JourneyRouteUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.JourneyRouteUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.JourneyRouteGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.JourneyRouteGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.JourneyRouteUpdateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.JourneyRouteUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.JourneyRouteGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.JourneyRouteGetPayload<T>>
    }
  }
  count: {
    useQuery: <
      T extends Prisma.JourneyRouteCountArgs,
      TData = 'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.JourneyRouteCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.JourneyRouteCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.JourneyRouteCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.JourneyRouteCountArgs>(
      input?: Omit<Prisma.Subset<T, Prisma.JourneyRouteCountArgs>, 'cursor'>,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.JourneyRouteCountAggregateOutputType
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
              Prisma.JourneyRouteCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >
  }
}
