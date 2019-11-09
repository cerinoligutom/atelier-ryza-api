import { EnemyBossType } from '../src/graphql/enums/index';
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

export type GQL_EnemyBoss = {
  __typename?: 'EnemyBoss';
  name?: Maybe<Scalars['String']>;
  type?: Maybe<EnemyBossType>;
};

export { EnemyBossType };

export type GQL_EnemyMonster = {
  __typename?: 'EnemyMonster';
  name?: Maybe<Scalars['String']>;
};

export type GQL_ItemDrop = {
  __typename?: 'ItemDrop';
  name?: Maybe<Scalars['String']>;
};

export type GQL_Mutation = {
  __typename?: 'Mutation';
  _dummy?: Maybe<Scalars['String']>;
};

export type GQL_Node = {
  id: Scalars['ID'];
};

export type GQL_PasswordResult = {
  __typename?: 'PasswordResult';
  level?: Maybe<Scalars['Int']>;
  cost?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
  primaryItem?: Maybe<GQL_ItemDrop>;
  secondaryItem?: Maybe<GQL_ItemDrop>;
  monster?: Maybe<GQL_EnemyMonster>;
  boss?: Maybe<GQL_EnemyBoss>;
};

export type GQL_Query = {
  __typename?: 'Query';
  node?: Maybe<GQL_Node>;
  password: Array<GQL_PasswordResult>;
  itemName: Array<GQL_PasswordResult>;
  _dummy?: Maybe<Scalars['String']>;
};

export type GQL_QueryNodeArgs = {
  id: Scalars['ID'];
};

export type GQL_QueryPasswordArgs = {
  input: Scalars['String'];
  levelLimit?: Maybe<Scalars['Int']>;
};

export type GQL_QueryItemNameArgs = {
  input: Scalars['String'];
  levelLimit?: Maybe<Scalars['Int']>;
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
  Int: ResolverTypeWrapper<Scalars['Int']>;
  PasswordResult: ResolverTypeWrapper<GQL_PasswordResult>;
  ItemDrop: ResolverTypeWrapper<GQL_ItemDrop>;
  EnemyMonster: ResolverTypeWrapper<GQL_EnemyMonster>;
  EnemyBoss: ResolverTypeWrapper<GQL_EnemyBoss>;
  EnemyBossType: EnemyBossType;
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
  Int: Scalars['Int'];
  PasswordResult: GQL_PasswordResult;
  ItemDrop: GQL_ItemDrop;
  EnemyMonster: GQL_EnemyMonster;
  EnemyBoss: GQL_EnemyBoss;
  EnemyBossType: EnemyBossType;
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

export type GQL_EnemyBossResolvers<
  ContextType = IGraphQLContext,
  ParentType extends GQL_ResolversParentTypes['EnemyBoss'] = GQL_ResolversParentTypes['EnemyBoss']
> = {
  name?: Resolver<Maybe<GQL_ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<Maybe<GQL_ResolversTypes['EnemyBossType']>, ParentType, ContextType>;
};

export type GQL_EnemyMonsterResolvers<
  ContextType = IGraphQLContext,
  ParentType extends GQL_ResolversParentTypes['EnemyMonster'] = GQL_ResolversParentTypes['EnemyMonster']
> = {
  name?: Resolver<Maybe<GQL_ResolversTypes['String']>, ParentType, ContextType>;
};

export type GQL_ItemDropResolvers<
  ContextType = IGraphQLContext,
  ParentType extends GQL_ResolversParentTypes['ItemDrop'] = GQL_ResolversParentTypes['ItemDrop']
> = {
  name?: Resolver<Maybe<GQL_ResolversTypes['String']>, ParentType, ContextType>;
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

export type GQL_PasswordResultResolvers<
  ContextType = IGraphQLContext,
  ParentType extends GQL_ResolversParentTypes['PasswordResult'] = GQL_ResolversParentTypes['PasswordResult']
> = {
  level?: Resolver<Maybe<GQL_ResolversTypes['Int']>, ParentType, ContextType>;
  cost?: Resolver<Maybe<GQL_ResolversTypes['Int']>, ParentType, ContextType>;
  password?: Resolver<Maybe<GQL_ResolversTypes['String']>, ParentType, ContextType>;
  primaryItem?: Resolver<Maybe<GQL_ResolversTypes['ItemDrop']>, ParentType, ContextType>;
  secondaryItem?: Resolver<Maybe<GQL_ResolversTypes['ItemDrop']>, ParentType, ContextType>;
  monster?: Resolver<Maybe<GQL_ResolversTypes['EnemyMonster']>, ParentType, ContextType>;
  boss?: Resolver<Maybe<GQL_ResolversTypes['EnemyBoss']>, ParentType, ContextType>;
};

export type GQL_QueryResolvers<
  ContextType = IGraphQLContext,
  ParentType extends GQL_ResolversParentTypes['Query'] = GQL_ResolversParentTypes['Query']
> = {
  node?: Resolver<Maybe<GQL_ResolversTypes['Node']>, ParentType, ContextType, RequireFields<GQL_QueryNodeArgs, 'id'>>;
  password?: Resolver<
    Array<GQL_ResolversTypes['PasswordResult']>,
    ParentType,
    ContextType,
    RequireFields<GQL_QueryPasswordArgs, 'input' | 'levelLimit'>
  >;
  itemName?: Resolver<
    Array<GQL_ResolversTypes['PasswordResult']>,
    ParentType,
    ContextType,
    RequireFields<GQL_QueryItemNameArgs, 'input' | 'levelLimit'>
  >;
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
  EnemyBoss?: GQL_EnemyBossResolvers<ContextType>;
  EnemyMonster?: GQL_EnemyMonsterResolvers<ContextType>;
  ItemDrop?: GQL_ItemDropResolvers<ContextType>;
  Mutation?: GQL_MutationResolvers<ContextType>;
  Node?: GQL_NodeResolvers;
  PasswordResult?: GQL_PasswordResultResolvers<ContextType>;
  Query?: GQL_QueryResolvers<ContextType>;
  Subscription?: GQL_SubscriptionResolvers<ContextType>;
  Time?: GraphQLScalarType;
};
