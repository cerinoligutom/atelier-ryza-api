import { Dummy } from '../src/graphql/enums/index';
import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { IGraphQLContext } from '../src/graphql/index';
export type Maybe<T> = T | null | undefined;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
  Date: any;
  Time: any;
};

export { Dummy };

export type GQL_DummySubscriptionPayload = {
  __typename?: 'DummySubscriptionPayload';
  dummy?: Maybe<Scalars['String']>;
};

export type GQL_Mutation = {
  __typename?: 'Mutation';
  _dummy?: Maybe<Scalars['String']>;
};

export type GQL_Node = {
  id: Scalars['ID'];
};

export type GQL_Query = {
  __typename?: 'Query';
  node?: Maybe<GQL_Node>;
  _dummy?: Maybe<Scalars['String']>;
};

export type GQL_QueryNodeArgs = {
  id: Scalars['ID'];
};

export type GQL_Subscription = {
  __typename?: 'Subscription';
  _dummy?: Maybe<GQL_DummySubscriptionPayload>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo,
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type GQL_ResolversTypes = {
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Node: ResolverTypeWrapper<GQL_Node>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Mutation: ResolverTypeWrapper<{}>;
  Subscription: ResolverTypeWrapper<{}>;
  DummySubscriptionPayload: ResolverTypeWrapper<GQL_DummySubscriptionPayload>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Dummy: Dummy;
  DateTime: ResolverTypeWrapper<Scalars['DateTime']>;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  Time: ResolverTypeWrapper<Scalars['Time']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type GQL_ResolversParentTypes = {
  Query: {};
  ID: Scalars['ID'];
  Node: GQL_Node;
  String: Scalars['String'];
  Mutation: {};
  Subscription: {};
  DummySubscriptionPayload: GQL_DummySubscriptionPayload;
  Boolean: Scalars['Boolean'];
  Dummy: Dummy;
  DateTime: Scalars['DateTime'];
  Date: Scalars['Date'];
  Time: Scalars['Time'];
};

export interface GQL_DateScalarConfig extends GraphQLScalarTypeConfig<GQL_ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface GQL_DateTimeScalarConfig extends GraphQLScalarTypeConfig<GQL_ResolversTypes['DateTime'], any> {
  name: 'DateTime';
}

export type GQL_DummySubscriptionPayloadResolvers<
  ContextType = IGraphQLContext,
  ParentType extends GQL_ResolversParentTypes['DummySubscriptionPayload'] = GQL_ResolversParentTypes['DummySubscriptionPayload']
> = {
  dummy?: Resolver<Maybe<GQL_ResolversTypes['String']>, ParentType, ContextType>;
};

export type GQL_MutationResolvers<
  ContextType = IGraphQLContext,
  ParentType extends GQL_ResolversParentTypes['Mutation'] = GQL_ResolversParentTypes['Mutation']
> = {
  _dummy?: Resolver<Maybe<GQL_ResolversTypes['String']>, ParentType, ContextType>;
};

export type GQL_NodeResolvers<
  ContextType = IGraphQLContext,
  ParentType extends GQL_ResolversParentTypes['Node'] = GQL_ResolversParentTypes['Node']
> = {
  __resolveType: TypeResolveFn<null, ParentType, ContextType>;
  id?: Resolver<GQL_ResolversTypes['ID'], ParentType, ContextType>;
};

export type GQL_QueryResolvers<
  ContextType = IGraphQLContext,
  ParentType extends GQL_ResolversParentTypes['Query'] = GQL_ResolversParentTypes['Query']
> = {
  node?: Resolver<Maybe<GQL_ResolversTypes['Node']>, ParentType, ContextType, RequireFields<GQL_QueryNodeArgs, 'id'>>;
  _dummy?: Resolver<Maybe<GQL_ResolversTypes['String']>, ParentType, ContextType>;
};

export type GQL_SubscriptionResolvers<
  ContextType = IGraphQLContext,
  ParentType extends GQL_ResolversParentTypes['Subscription'] = GQL_ResolversParentTypes['Subscription']
> = {
  _dummy?: SubscriptionResolver<Maybe<GQL_ResolversTypes['DummySubscriptionPayload']>, '_dummy', ParentType, ContextType>;
};

export interface GQL_TimeScalarConfig extends GraphQLScalarTypeConfig<GQL_ResolversTypes['Time'], any> {
  name: 'Time';
}

export type GQL_Resolvers<ContextType = IGraphQLContext> = {
  Date?: GraphQLScalarType;
  DateTime?: GraphQLScalarType;
  DummySubscriptionPayload?: GQL_DummySubscriptionPayloadResolvers<ContextType>;
  Mutation?: GQL_MutationResolvers<ContextType>;
  Node?: GQL_NodeResolvers;
  Query?: GQL_QueryResolvers<ContextType>;
  Subscription?: GQL_SubscriptionResolvers<ContextType>;
  Time?: GraphQLScalarType;
};
