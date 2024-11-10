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
      .input($Schema.DelayVerificationInputSchema.createMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).delayVerification.createMany(input as any)),
      ),

    create: procedure
      .input($Schema.DelayVerificationInputSchema.create)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).delayVerification.create(input as any)),
      ),

    deleteMany: procedure
      .input($Schema.DelayVerificationInputSchema.deleteMany.optional())
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).delayVerification.deleteMany(input as any)),
      ),

    delete: procedure
      .input($Schema.DelayVerificationInputSchema.delete)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).delayVerification.delete(input as any)),
      ),

    findFirst: procedure
      .input($Schema.DelayVerificationInputSchema.findFirst.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).delayVerification.findFirst(input as any)),
      ),

    findMany: procedure
      .input($Schema.DelayVerificationInputSchema.findMany.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).delayVerification.findMany(input as any)),
      ),

    findUnique: procedure
      .input($Schema.DelayVerificationInputSchema.findUnique)
      .query(({ ctx, input }) =>
        checkRead(db(ctx).delayVerification.findUnique(input as any)),
      ),

    updateMany: procedure
      .input($Schema.DelayVerificationInputSchema.updateMany)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).delayVerification.updateMany(input as any)),
      ),

    update: procedure
      .input($Schema.DelayVerificationInputSchema.update)
      .mutation(async ({ ctx, input }) =>
        checkMutate(db(ctx).delayVerification.update(input as any)),
      ),

    count: procedure
      .input($Schema.DelayVerificationInputSchema.count.optional())
      .query(({ ctx, input }) =>
        checkRead(db(ctx).delayVerification.count(input as any)),
      ),
  })
}

export interface ClientType<
  AppRouter extends AnyRouter,
  Context = AppRouter['_def']['_config']['$types']['ctx'],
> {
  createMany: {
    useMutation: <T extends Prisma.DelayVerificationCreateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.DelayVerificationCreateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.DelayVerificationCreateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.DelayVerificationCreateManyArgs>(
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
    useMutation: <T extends Prisma.DelayVerificationCreateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.DelayVerificationCreateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.DelayVerificationGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.DelayVerificationGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.DelayVerificationCreateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.DelayVerificationCreateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.DelayVerificationGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.DelayVerificationGetPayload<T>>
    }
  }
  deleteMany: {
    useMutation: <T extends Prisma.DelayVerificationDeleteManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.DelayVerificationDeleteManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.DelayVerificationDeleteManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.DelayVerificationDeleteManyArgs>(
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
    useMutation: <T extends Prisma.DelayVerificationDeleteArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.DelayVerificationDeleteArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.DelayVerificationGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.DelayVerificationGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.DelayVerificationDeleteArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.DelayVerificationDeleteArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.DelayVerificationGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.DelayVerificationGetPayload<T>>
    }
  }
  findFirst: {
    useQuery: <
      T extends Prisma.DelayVerificationFindFirstArgs,
      TData = Prisma.DelayVerificationGetPayload<T>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.DelayVerificationFindFirstArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.DelayVerificationGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.DelayVerificationFindFirstArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.DelayVerificationFindFirstArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.DelayVerificationGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.DelayVerificationGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findMany: {
    useQuery: <
      T extends Prisma.DelayVerificationFindManyArgs,
      TData = Array<Prisma.DelayVerificationGetPayload<T>>,
    >(
      input?: Prisma.SelectSubset<T, Prisma.DelayVerificationFindManyArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Array<Prisma.DelayVerificationGetPayload<T>>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.DelayVerificationFindManyArgs>(
      input?: Omit<
        Prisma.SelectSubset<T, Prisma.DelayVerificationFindManyArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Array<Prisma.DelayVerificationGetPayload<T>>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Array<Prisma.DelayVerificationGetPayload<T>>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  findUnique: {
    useQuery: <
      T extends Prisma.DelayVerificationFindUniqueArgs,
      TData = Prisma.DelayVerificationGetPayload<T>,
    >(
      input: Prisma.SelectSubset<T, Prisma.DelayVerificationFindUniqueArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        Prisma.DelayVerificationGetPayload<T>,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.DelayVerificationFindUniqueArgs>(
      input: Omit<
        Prisma.SelectSubset<T, Prisma.DelayVerificationFindUniqueArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        Prisma.DelayVerificationGetPayload<T>,
        Error
      >,
    ) => UseTRPCInfiniteQueryResult<
      Prisma.DelayVerificationGetPayload<T>,
      TRPCClientErrorLike<AppRouter>
    >
  }
  updateMany: {
    useMutation: <T extends Prisma.DelayVerificationUpdateManyArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.DelayVerificationUpdateManyArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.BatchPayload,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.BatchPayload,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.DelayVerificationUpdateManyArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.DelayVerificationUpdateManyArgs>(
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
    useMutation: <T extends Prisma.DelayVerificationUpdateArgs>(
      opts?: UseTRPCMutationOptions<
        Prisma.DelayVerificationUpdateArgs,
        TRPCClientErrorLike<AppRouter>,
        Prisma.DelayVerificationGetPayload<T>,
        Context
      >,
    ) => Omit<
      UseTRPCMutationResult<
        Prisma.DelayVerificationGetPayload<T>,
        TRPCClientErrorLike<AppRouter>,
        Prisma.SelectSubset<T, Prisma.DelayVerificationUpdateArgs>,
        Context
      >,
      'mutateAsync'
    > & {
      mutateAsync: <T extends Prisma.DelayVerificationUpdateArgs>(
        variables: T,
        opts?: UseTRPCMutationOptions<
          T,
          TRPCClientErrorLike<AppRouter>,
          Prisma.DelayVerificationGetPayload<T>,
          Context
        >,
      ) => Promise<Prisma.DelayVerificationGetPayload<T>>
    }
  }
  count: {
    useQuery: <
      T extends Prisma.DelayVerificationCountArgs,
      TData = 'select' extends keyof T
        ? T['select'] extends true
          ? number
          : Prisma.GetScalarType<
              T['select'],
              Prisma.DelayVerificationCountAggregateOutputType
            >
        : number,
    >(
      input?: Prisma.Subset<T, Prisma.DelayVerificationCountArgs>,
      opts?: UseTRPCQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.DelayVerificationCountAggregateOutputType
              >
          : number,
        TData,
        Error
      >,
    ) => UseTRPCQueryResult<TData, TRPCClientErrorLike<AppRouter>>
    useInfiniteQuery: <T extends Prisma.DelayVerificationCountArgs>(
      input?: Omit<
        Prisma.Subset<T, Prisma.DelayVerificationCountArgs>,
        'cursor'
      >,
      opts?: UseTRPCInfiniteQueryOptions<
        string,
        T,
        'select' extends keyof T
          ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<
                T['select'],
                Prisma.DelayVerificationCountAggregateOutputType
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
              Prisma.DelayVerificationCountAggregateOutputType
            >
        : number,
      TRPCClientErrorLike<AppRouter>
    >
  }
}
