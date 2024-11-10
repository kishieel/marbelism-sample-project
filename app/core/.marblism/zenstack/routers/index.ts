/* eslint-disable */
import type {
  unsetMarker,
  AnyRouter,
  AnyRootConfig,
  CreateRouterInner,
  Procedure,
  ProcedureBuilder,
  ProcedureParams,
  ProcedureRouterRecord,
  ProcedureType,
} from '@trpc/server'
import type { PrismaClient } from '@zenstackhq/runtime/models'
import createUserRouter from './User.router'
import createRouteRouter from './Route.router'
import createStopRouter from './Stop.router'
import createJourneyRouter from './Journey.router'
import createJourneyRouteRouter from './JourneyRoute.router'
import createSubscriptionRouter from './Subscription.router'
import createSavedRouteRouter from './SavedRoute.router'
import createDelayRouter from './Delay.router'
import createDelayVerificationRouter from './DelayVerification.router'
import createPwaSubscriptionRouter from './PwaSubscription.router'
import { ClientType as UserClientType } from './User.router'
import { ClientType as RouteClientType } from './Route.router'
import { ClientType as StopClientType } from './Stop.router'
import { ClientType as JourneyClientType } from './Journey.router'
import { ClientType as JourneyRouteClientType } from './JourneyRoute.router'
import { ClientType as SubscriptionClientType } from './Subscription.router'
import { ClientType as SavedRouteClientType } from './SavedRoute.router'
import { ClientType as DelayClientType } from './Delay.router'
import { ClientType as DelayVerificationClientType } from './DelayVerification.router'
import { ClientType as PwaSubscriptionClientType } from './PwaSubscription.router'

export type BaseConfig = AnyRootConfig

export type RouterFactory<Config extends BaseConfig> = <
  ProcRouterRecord extends ProcedureRouterRecord,
>(
  procedures: ProcRouterRecord,
) => CreateRouterInner<Config, ProcRouterRecord>

export type UnsetMarker = typeof unsetMarker

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
  ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>

export function db(ctx: any) {
  if (!ctx.prisma) {
    throw new Error('Missing "prisma" field in trpc context')
  }
  return ctx.prisma as PrismaClient
}

export function createRouter<Config extends BaseConfig>(
  router: RouterFactory<Config>,
  procedure: ProcBuilder<Config>,
) {
  return router({
    user: createUserRouter(router, procedure),
    route: createRouteRouter(router, procedure),
    stop: createStopRouter(router, procedure),
    journey: createJourneyRouter(router, procedure),
    journeyRoute: createJourneyRouteRouter(router, procedure),
    subscription: createSubscriptionRouter(router, procedure),
    savedRoute: createSavedRouteRouter(router, procedure),
    delay: createDelayRouter(router, procedure),
    delayVerification: createDelayVerificationRouter(router, procedure),
    pwaSubscription: createPwaSubscriptionRouter(router, procedure),
  })
}

export interface ClientType<AppRouter extends AnyRouter> {
  user: UserClientType<AppRouter>
  route: RouteClientType<AppRouter>
  stop: StopClientType<AppRouter>
  journey: JourneyClientType<AppRouter>
  journeyRoute: JourneyRouteClientType<AppRouter>
  subscription: SubscriptionClientType<AppRouter>
  savedRoute: SavedRouteClientType<AppRouter>
  delay: DelayClientType<AppRouter>
  delayVerification: DelayVerificationClientType<AppRouter>
  pwaSubscription: PwaSubscriptionClientType<AppRouter>
}
