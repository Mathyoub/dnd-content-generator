
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Campaign
 * 
 */
export type Campaign = $Result.DefaultSelection<Prisma.$CampaignPayload>
/**
 * Model NPC
 * 
 */
export type NPC = $Result.DefaultSelection<Prisma.$NPCPayload>
/**
 * Model City
 * 
 */
export type City = $Result.DefaultSelection<Prisma.$CityPayload>
/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model CampaignCity
 * 
 */
export type CampaignCity = $Result.DefaultSelection<Prisma.$CampaignCityPayload>
/**
 * Model CampaignNPC
 * 
 */
export type CampaignNPC = $Result.DefaultSelection<Prisma.$CampaignNPCPayload>
/**
 * Model CampaignItem
 * 
 */
export type CampaignItem = $Result.DefaultSelection<Prisma.$CampaignItemPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Campaigns
 * const campaigns = await prisma.campaign.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Campaigns
   * const campaigns = await prisma.campaign.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.campaign`: Exposes CRUD operations for the **Campaign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Campaigns
    * const campaigns = await prisma.campaign.findMany()
    * ```
    */
  get campaign(): Prisma.CampaignDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nPC`: Exposes CRUD operations for the **NPC** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NPCS
    * const nPCS = await prisma.nPC.findMany()
    * ```
    */
  get nPC(): Prisma.NPCDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.CityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaignCity`: Exposes CRUD operations for the **CampaignCity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampaignCities
    * const campaignCities = await prisma.campaignCity.findMany()
    * ```
    */
  get campaignCity(): Prisma.CampaignCityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaignNPC`: Exposes CRUD operations for the **CampaignNPC** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampaignNPCS
    * const campaignNPCS = await prisma.campaignNPC.findMany()
    * ```
    */
  get campaignNPC(): Prisma.CampaignNPCDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.campaignItem`: Exposes CRUD operations for the **CampaignItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CampaignItems
    * const campaignItems = await prisma.campaignItem.findMany()
    * ```
    */
  get campaignItem(): Prisma.CampaignItemDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Campaign: 'Campaign',
    NPC: 'NPC',
    City: 'City',
    Item: 'Item',
    CampaignCity: 'CampaignCity',
    CampaignNPC: 'CampaignNPC',
    CampaignItem: 'CampaignItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "campaign" | "nPC" | "city" | "item" | "campaignCity" | "campaignNPC" | "campaignItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Campaign: {
        payload: Prisma.$CampaignPayload<ExtArgs>
        fields: Prisma.CampaignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findFirst: {
            args: Prisma.CampaignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          findMany: {
            args: Prisma.CampaignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          create: {
            args: Prisma.CampaignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          createMany: {
            args: Prisma.CampaignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          delete: {
            args: Prisma.CampaignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          update: {
            args: Prisma.CampaignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          deleteMany: {
            args: Prisma.CampaignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>[]
          }
          upsert: {
            args: Prisma.CampaignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignPayload>
          }
          aggregate: {
            args: Prisma.CampaignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaign>
          }
          groupBy: {
            args: Prisma.CampaignGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCountAggregateOutputType> | number
          }
        }
      }
      NPC: {
        payload: Prisma.$NPCPayload<ExtArgs>
        fields: Prisma.NPCFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NPCFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NPCFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCPayload>
          }
          findFirst: {
            args: Prisma.NPCFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NPCFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCPayload>
          }
          findMany: {
            args: Prisma.NPCFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCPayload>[]
          }
          create: {
            args: Prisma.NPCCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCPayload>
          }
          createMany: {
            args: Prisma.NPCCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NPCCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCPayload>[]
          }
          delete: {
            args: Prisma.NPCDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCPayload>
          }
          update: {
            args: Prisma.NPCUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCPayload>
          }
          deleteMany: {
            args: Prisma.NPCDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NPCUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NPCUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCPayload>[]
          }
          upsert: {
            args: Prisma.NPCUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NPCPayload>
          }
          aggregate: {
            args: Prisma.NPCAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNPC>
          }
          groupBy: {
            args: Prisma.NPCGroupByArgs<ExtArgs>
            result: $Utils.Optional<NPCGroupByOutputType>[]
          }
          count: {
            args: Prisma.NPCCountArgs<ExtArgs>
            result: $Utils.Optional<NPCCountAggregateOutputType> | number
          }
        }
      }
      City: {
        payload: Prisma.$CityPayload<ExtArgs>
        fields: Prisma.CityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findFirst: {
            args: Prisma.CityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findMany: {
            args: Prisma.CityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          create: {
            args: Prisma.CityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          createMany: {
            args: Prisma.CityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          delete: {
            args: Prisma.CityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          update: {
            args: Prisma.CityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          deleteMany: {
            args: Prisma.CityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          upsert: {
            args: Prisma.CityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCity>
          }
          groupBy: {
            args: Prisma.CityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CityCountArgs<ExtArgs>
            result: $Utils.Optional<CityCountAggregateOutputType> | number
          }
        }
      }
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      CampaignCity: {
        payload: Prisma.$CampaignCityPayload<ExtArgs>
        fields: Prisma.CampaignCityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignCityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignCityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignCityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignCityPayload>
          }
          findFirst: {
            args: Prisma.CampaignCityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignCityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignCityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignCityPayload>
          }
          findMany: {
            args: Prisma.CampaignCityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignCityPayload>[]
          }
          create: {
            args: Prisma.CampaignCityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignCityPayload>
          }
          createMany: {
            args: Prisma.CampaignCityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignCityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignCityPayload>[]
          }
          delete: {
            args: Prisma.CampaignCityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignCityPayload>
          }
          update: {
            args: Prisma.CampaignCityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignCityPayload>
          }
          deleteMany: {
            args: Prisma.CampaignCityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignCityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignCityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignCityPayload>[]
          }
          upsert: {
            args: Prisma.CampaignCityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignCityPayload>
          }
          aggregate: {
            args: Prisma.CampaignCityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaignCity>
          }
          groupBy: {
            args: Prisma.CampaignCityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignCityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignCityCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignCityCountAggregateOutputType> | number
          }
        }
      }
      CampaignNPC: {
        payload: Prisma.$CampaignNPCPayload<ExtArgs>
        fields: Prisma.CampaignNPCFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignNPCFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignNPCPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignNPCFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignNPCPayload>
          }
          findFirst: {
            args: Prisma.CampaignNPCFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignNPCPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignNPCFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignNPCPayload>
          }
          findMany: {
            args: Prisma.CampaignNPCFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignNPCPayload>[]
          }
          create: {
            args: Prisma.CampaignNPCCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignNPCPayload>
          }
          createMany: {
            args: Prisma.CampaignNPCCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignNPCCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignNPCPayload>[]
          }
          delete: {
            args: Prisma.CampaignNPCDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignNPCPayload>
          }
          update: {
            args: Prisma.CampaignNPCUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignNPCPayload>
          }
          deleteMany: {
            args: Prisma.CampaignNPCDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignNPCUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignNPCUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignNPCPayload>[]
          }
          upsert: {
            args: Prisma.CampaignNPCUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignNPCPayload>
          }
          aggregate: {
            args: Prisma.CampaignNPCAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaignNPC>
          }
          groupBy: {
            args: Prisma.CampaignNPCGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignNPCGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignNPCCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignNPCCountAggregateOutputType> | number
          }
        }
      }
      CampaignItem: {
        payload: Prisma.$CampaignItemPayload<ExtArgs>
        fields: Prisma.CampaignItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CampaignItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CampaignItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignItemPayload>
          }
          findFirst: {
            args: Prisma.CampaignItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CampaignItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignItemPayload>
          }
          findMany: {
            args: Prisma.CampaignItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignItemPayload>[]
          }
          create: {
            args: Prisma.CampaignItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignItemPayload>
          }
          createMany: {
            args: Prisma.CampaignItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CampaignItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignItemPayload>[]
          }
          delete: {
            args: Prisma.CampaignItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignItemPayload>
          }
          update: {
            args: Prisma.CampaignItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignItemPayload>
          }
          deleteMany: {
            args: Prisma.CampaignItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CampaignItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CampaignItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignItemPayload>[]
          }
          upsert: {
            args: Prisma.CampaignItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CampaignItemPayload>
          }
          aggregate: {
            args: Prisma.CampaignItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCampaignItem>
          }
          groupBy: {
            args: Prisma.CampaignItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CampaignItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CampaignItemCountArgs<ExtArgs>
            result: $Utils.Optional<CampaignItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    campaign?: CampaignOmit
    nPC?: NPCOmit
    city?: CityOmit
    item?: ItemOmit
    campaignCity?: CampaignCityOmit
    campaignNPC?: CampaignNPCOmit
    campaignItem?: CampaignItemOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CampaignCountOutputType
   */

  export type CampaignCountOutputType = {
    cities: number
    npcs: number
    items: number
  }

  export type CampaignCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | CampaignCountOutputTypeCountCitiesArgs
    npcs?: boolean | CampaignCountOutputTypeCountNpcsArgs
    items?: boolean | CampaignCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCountOutputType
     */
    select?: CampaignCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountCitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignCityWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountNpcsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignNPCWhereInput
  }

  /**
   * CampaignCountOutputType without action
   */
  export type CampaignCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignItemWhereInput
  }


  /**
   * Count Type NPCCountOutputType
   */

  export type NPCCountOutputType = {
    campaigns: number
  }

  export type NPCCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | NPCCountOutputTypeCountCampaignsArgs
  }

  // Custom InputTypes
  /**
   * NPCCountOutputType without action
   */
  export type NPCCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPCCountOutputType
     */
    select?: NPCCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * NPCCountOutputType without action
   */
  export type NPCCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignNPCWhereInput
  }


  /**
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    campaigns: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | CityCountOutputTypeCountCampaignsArgs
  }

  // Custom InputTypes
  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignCityWhereInput
  }


  /**
   * Count Type ItemCountOutputType
   */

  export type ItemCountOutputType = {
    campaigns: number
  }

  export type ItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | ItemCountOutputTypeCountCampaignsArgs
  }

  // Custom InputTypes
  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ItemCountOutputType
     */
    select?: ItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ItemCountOutputType without action
   */
  export type ItemCountOutputTypeCountCampaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Campaign
   */

  export type AggregateCampaign = {
    _count: CampaignCountAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  export type CampaignMinAggregateOutputType = {
    id: string | null
    name: string | null
    theme: string | null
    homebrewAllowed: boolean | null
    magicCommonality: string | null
    geographicalScale: string | null
    civilizationState: string | null
    technologyLevel: string | null
    roleOfReligion: string | null
    religiousFiguresPerception: string | null
    majorConflictsThreats: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignMaxAggregateOutputType = {
    id: string | null
    name: string | null
    theme: string | null
    homebrewAllowed: boolean | null
    magicCommonality: string | null
    geographicalScale: string | null
    civilizationState: string | null
    technologyLevel: string | null
    roleOfReligion: string | null
    religiousFiguresPerception: string | null
    majorConflictsThreats: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignCountAggregateOutputType = {
    id: number
    name: number
    theme: number
    tone: number
    homebrewAllowed: number
    magicCommonality: number
    geographicalScale: number
    civilizationState: number
    commonLandscapes: number
    technologyLevel: number
    roleOfReligion: number
    religiousFiguresPerception: number
    majorConflictsThreats: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignMinAggregateInputType = {
    id?: true
    name?: true
    theme?: true
    homebrewAllowed?: true
    magicCommonality?: true
    geographicalScale?: true
    civilizationState?: true
    technologyLevel?: true
    roleOfReligion?: true
    religiousFiguresPerception?: true
    majorConflictsThreats?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignMaxAggregateInputType = {
    id?: true
    name?: true
    theme?: true
    homebrewAllowed?: true
    magicCommonality?: true
    geographicalScale?: true
    civilizationState?: true
    technologyLevel?: true
    roleOfReligion?: true
    religiousFiguresPerception?: true
    majorConflictsThreats?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignCountAggregateInputType = {
    id?: true
    name?: true
    theme?: true
    tone?: true
    homebrewAllowed?: true
    magicCommonality?: true
    geographicalScale?: true
    civilizationState?: true
    commonLandscapes?: true
    technologyLevel?: true
    roleOfReligion?: true
    religiousFiguresPerception?: true
    majorConflictsThreats?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaign to aggregate.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Campaigns
    **/
    _count?: true | CampaignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignMaxAggregateInputType
  }

  export type GetCampaignAggregateType<T extends CampaignAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaign[P]>
      : GetScalarType<T[P], AggregateCampaign[P]>
  }




  export type CampaignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignWhereInput
    orderBy?: CampaignOrderByWithAggregationInput | CampaignOrderByWithAggregationInput[]
    by: CampaignScalarFieldEnum[] | CampaignScalarFieldEnum
    having?: CampaignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCountAggregateInputType | true
    _min?: CampaignMinAggregateInputType
    _max?: CampaignMaxAggregateInputType
  }

  export type CampaignGroupByOutputType = {
    id: string
    name: string
    theme: string
    tone: JsonValue
    homebrewAllowed: boolean
    magicCommonality: string | null
    geographicalScale: string | null
    civilizationState: string | null
    commonLandscapes: JsonValue
    technologyLevel: string | null
    roleOfReligion: string | null
    religiousFiguresPerception: string | null
    majorConflictsThreats: string | null
    createdAt: Date
    updatedAt: Date
    _count: CampaignCountAggregateOutputType | null
    _min: CampaignMinAggregateOutputType | null
    _max: CampaignMaxAggregateOutputType | null
  }

  type GetCampaignGroupByPayload<T extends CampaignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignGroupByOutputType[P]>
        }
      >
    >


  export type CampaignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    theme?: boolean
    tone?: boolean
    homebrewAllowed?: boolean
    magicCommonality?: boolean
    geographicalScale?: boolean
    civilizationState?: boolean
    commonLandscapes?: boolean
    technologyLevel?: boolean
    roleOfReligion?: boolean
    religiousFiguresPerception?: boolean
    majorConflictsThreats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    cities?: boolean | Campaign$citiesArgs<ExtArgs>
    npcs?: boolean | Campaign$npcsArgs<ExtArgs>
    items?: boolean | Campaign$itemsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    theme?: boolean
    tone?: boolean
    homebrewAllowed?: boolean
    magicCommonality?: boolean
    geographicalScale?: boolean
    civilizationState?: boolean
    commonLandscapes?: boolean
    technologyLevel?: boolean
    roleOfReligion?: boolean
    religiousFiguresPerception?: boolean
    majorConflictsThreats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    theme?: boolean
    tone?: boolean
    homebrewAllowed?: boolean
    magicCommonality?: boolean
    geographicalScale?: boolean
    civilizationState?: boolean
    commonLandscapes?: boolean
    technologyLevel?: boolean
    roleOfReligion?: boolean
    religiousFiguresPerception?: boolean
    majorConflictsThreats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["campaign"]>

  export type CampaignSelectScalar = {
    id?: boolean
    name?: boolean
    theme?: boolean
    tone?: boolean
    homebrewAllowed?: boolean
    magicCommonality?: boolean
    geographicalScale?: boolean
    civilizationState?: boolean
    commonLandscapes?: boolean
    technologyLevel?: boolean
    roleOfReligion?: boolean
    religiousFiguresPerception?: boolean
    majorConflictsThreats?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaignOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "theme" | "tone" | "homebrewAllowed" | "magicCommonality" | "geographicalScale" | "civilizationState" | "commonLandscapes" | "technologyLevel" | "roleOfReligion" | "religiousFiguresPerception" | "majorConflictsThreats" | "createdAt" | "updatedAt", ExtArgs["result"]["campaign"]>
  export type CampaignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cities?: boolean | Campaign$citiesArgs<ExtArgs>
    npcs?: boolean | Campaign$npcsArgs<ExtArgs>
    items?: boolean | Campaign$itemsArgs<ExtArgs>
    _count?: boolean | CampaignCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CampaignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CampaignIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CampaignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Campaign"
    objects: {
      cities: Prisma.$CampaignCityPayload<ExtArgs>[]
      npcs: Prisma.$CampaignNPCPayload<ExtArgs>[]
      items: Prisma.$CampaignItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      theme: string
      tone: Prisma.JsonValue
      homebrewAllowed: boolean
      magicCommonality: string | null
      geographicalScale: string | null
      civilizationState: string | null
      commonLandscapes: Prisma.JsonValue
      technologyLevel: string | null
      roleOfReligion: string | null
      religiousFiguresPerception: string | null
      majorConflictsThreats: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaign"]>
    composites: {}
  }

  type CampaignGetPayload<S extends boolean | null | undefined | CampaignDefaultArgs> = $Result.GetResult<Prisma.$CampaignPayload, S>

  type CampaignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCountAggregateInputType | true
    }

  export interface CampaignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Campaign'], meta: { name: 'Campaign' } }
    /**
     * Find zero or one Campaign that matches the filter.
     * @param {CampaignFindUniqueArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignFindUniqueArgs>(args: SelectSubset<T, CampaignFindUniqueArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Campaign that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignFindUniqueOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignFindFirstArgs>(args?: SelectSubset<T, CampaignFindFirstArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Campaign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindFirstOrThrowArgs} args - Arguments to find a Campaign
     * @example
     * // Get one Campaign
     * const campaign = await prisma.campaign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Campaigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Campaigns
     * const campaigns = await prisma.campaign.findMany()
     * 
     * // Get first 10 Campaigns
     * const campaigns = await prisma.campaign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignWithIdOnly = await prisma.campaign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignFindManyArgs>(args?: SelectSubset<T, CampaignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Campaign.
     * @param {CampaignCreateArgs} args - Arguments to create a Campaign.
     * @example
     * // Create one Campaign
     * const Campaign = await prisma.campaign.create({
     *   data: {
     *     // ... data to create a Campaign
     *   }
     * })
     * 
     */
    create<T extends CampaignCreateArgs>(args: SelectSubset<T, CampaignCreateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Campaigns.
     * @param {CampaignCreateManyArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCreateManyArgs>(args?: SelectSubset<T, CampaignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Campaigns and returns the data saved in the database.
     * @param {CampaignCreateManyAndReturnArgs} args - Arguments to create many Campaigns.
     * @example
     * // Create many Campaigns
     * const campaign = await prisma.campaign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Campaign.
     * @param {CampaignDeleteArgs} args - Arguments to delete one Campaign.
     * @example
     * // Delete one Campaign
     * const Campaign = await prisma.campaign.delete({
     *   where: {
     *     // ... filter to delete one Campaign
     *   }
     * })
     * 
     */
    delete<T extends CampaignDeleteArgs>(args: SelectSubset<T, CampaignDeleteArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Campaign.
     * @param {CampaignUpdateArgs} args - Arguments to update one Campaign.
     * @example
     * // Update one Campaign
     * const campaign = await prisma.campaign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignUpdateArgs>(args: SelectSubset<T, CampaignUpdateArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Campaigns.
     * @param {CampaignDeleteManyArgs} args - Arguments to filter Campaigns to delete.
     * @example
     * // Delete a few Campaigns
     * const { count } = await prisma.campaign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignDeleteManyArgs>(args?: SelectSubset<T, CampaignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignUpdateManyArgs>(args: SelectSubset<T, CampaignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Campaigns and returns the data updated in the database.
     * @param {CampaignUpdateManyAndReturnArgs} args - Arguments to update many Campaigns.
     * @example
     * // Update many Campaigns
     * const campaign = await prisma.campaign.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Campaigns and only return the `id`
     * const campaignWithIdOnly = await prisma.campaign.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Campaign.
     * @param {CampaignUpsertArgs} args - Arguments to update or create a Campaign.
     * @example
     * // Update or create a Campaign
     * const campaign = await prisma.campaign.upsert({
     *   create: {
     *     // ... data to create a Campaign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Campaign we want to update
     *   }
     * })
     */
    upsert<T extends CampaignUpsertArgs>(args: SelectSubset<T, CampaignUpsertArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Campaigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCountArgs} args - Arguments to filter Campaigns to count.
     * @example
     * // Count the number of Campaigns
     * const count = await prisma.campaign.count({
     *   where: {
     *     // ... the filter for the Campaigns we want to count
     *   }
     * })
    **/
    count<T extends CampaignCountArgs>(
      args?: Subset<T, CampaignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignAggregateArgs>(args: Subset<T, CampaignAggregateArgs>): Prisma.PrismaPromise<GetCampaignAggregateType<T>>

    /**
     * Group by Campaign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignGroupByArgs['orderBy'] }
        : { orderBy?: CampaignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Campaign model
   */
  readonly fields: CampaignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Campaign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cities<T extends Campaign$citiesArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$citiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignCityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    npcs<T extends Campaign$npcsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$npcsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignNPCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    items<T extends Campaign$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Campaign$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Campaign model
   */
  interface CampaignFieldRefs {
    readonly id: FieldRef<"Campaign", 'String'>
    readonly name: FieldRef<"Campaign", 'String'>
    readonly theme: FieldRef<"Campaign", 'String'>
    readonly tone: FieldRef<"Campaign", 'Json'>
    readonly homebrewAllowed: FieldRef<"Campaign", 'Boolean'>
    readonly magicCommonality: FieldRef<"Campaign", 'String'>
    readonly geographicalScale: FieldRef<"Campaign", 'String'>
    readonly civilizationState: FieldRef<"Campaign", 'String'>
    readonly commonLandscapes: FieldRef<"Campaign", 'Json'>
    readonly technologyLevel: FieldRef<"Campaign", 'String'>
    readonly roleOfReligion: FieldRef<"Campaign", 'String'>
    readonly religiousFiguresPerception: FieldRef<"Campaign", 'String'>
    readonly majorConflictsThreats: FieldRef<"Campaign", 'String'>
    readonly createdAt: FieldRef<"Campaign", 'DateTime'>
    readonly updatedAt: FieldRef<"Campaign", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Campaign findUnique
   */
  export type CampaignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findUniqueOrThrow
   */
  export type CampaignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign findFirst
   */
  export type CampaignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findFirstOrThrow
   */
  export type CampaignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaign to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Campaigns.
     */
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign findMany
   */
  export type CampaignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter, which Campaigns to fetch.
     */
    where?: CampaignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Campaigns to fetch.
     */
    orderBy?: CampaignOrderByWithRelationInput | CampaignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Campaigns.
     */
    cursor?: CampaignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Campaigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Campaigns.
     */
    skip?: number
    distinct?: CampaignScalarFieldEnum | CampaignScalarFieldEnum[]
  }

  /**
   * Campaign create
   */
  export type CampaignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to create a Campaign.
     */
    data: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
  }

  /**
   * Campaign createMany
   */
  export type CampaignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign createManyAndReturn
   */
  export type CampaignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to create many Campaigns.
     */
    data: CampaignCreateManyInput | CampaignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Campaign update
   */
  export type CampaignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The data needed to update a Campaign.
     */
    data: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
    /**
     * Choose, which Campaign to update.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign updateMany
   */
  export type CampaignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign updateManyAndReturn
   */
  export type CampaignUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * The data used to update Campaigns.
     */
    data: XOR<CampaignUpdateManyMutationInput, CampaignUncheckedUpdateManyInput>
    /**
     * Filter which Campaigns to update
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to update.
     */
    limit?: number
  }

  /**
   * Campaign upsert
   */
  export type CampaignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * The filter to search for the Campaign to update in case it exists.
     */
    where: CampaignWhereUniqueInput
    /**
     * In case the Campaign found by the `where` argument doesn't exist, create a new Campaign with this data.
     */
    create: XOR<CampaignCreateInput, CampaignUncheckedCreateInput>
    /**
     * In case the Campaign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignUpdateInput, CampaignUncheckedUpdateInput>
  }

  /**
   * Campaign delete
   */
  export type CampaignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
    /**
     * Filter which Campaign to delete.
     */
    where: CampaignWhereUniqueInput
  }

  /**
   * Campaign deleteMany
   */
  export type CampaignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Campaigns to delete
     */
    where?: CampaignWhereInput
    /**
     * Limit how many Campaigns to delete.
     */
    limit?: number
  }

  /**
   * Campaign.cities
   */
  export type Campaign$citiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCity
     */
    select?: CampaignCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCity
     */
    omit?: CampaignCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignCityInclude<ExtArgs> | null
    where?: CampaignCityWhereInput
    orderBy?: CampaignCityOrderByWithRelationInput | CampaignCityOrderByWithRelationInput[]
    cursor?: CampaignCityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignCityScalarFieldEnum | CampaignCityScalarFieldEnum[]
  }

  /**
   * Campaign.npcs
   */
  export type Campaign$npcsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignNPC
     */
    select?: CampaignNPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignNPC
     */
    omit?: CampaignNPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignNPCInclude<ExtArgs> | null
    where?: CampaignNPCWhereInput
    orderBy?: CampaignNPCOrderByWithRelationInput | CampaignNPCOrderByWithRelationInput[]
    cursor?: CampaignNPCWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignNPCScalarFieldEnum | CampaignNPCScalarFieldEnum[]
  }

  /**
   * Campaign.items
   */
  export type Campaign$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignItem
     */
    select?: CampaignItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignItem
     */
    omit?: CampaignItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignItemInclude<ExtArgs> | null
    where?: CampaignItemWhereInput
    orderBy?: CampaignItemOrderByWithRelationInput | CampaignItemOrderByWithRelationInput[]
    cursor?: CampaignItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignItemScalarFieldEnum | CampaignItemScalarFieldEnum[]
  }

  /**
   * Campaign without action
   */
  export type CampaignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Campaign
     */
    select?: CampaignSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Campaign
     */
    omit?: CampaignOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignInclude<ExtArgs> | null
  }


  /**
   * Model NPC
   */

  export type AggregateNPC = {
    _count: NPCCountAggregateOutputType | null
    _min: NPCMinAggregateOutputType | null
    _max: NPCMaxAggregateOutputType | null
  }

  export type NPCMinAggregateOutputType = {
    id: string | null
    name: string | null
    race: string | null
    class: string | null
    alignment: string | null
    description: string | null
    background: string | null
    personality: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NPCMaxAggregateOutputType = {
    id: string | null
    name: string | null
    race: string | null
    class: string | null
    alignment: string | null
    description: string | null
    background: string | null
    personality: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NPCCountAggregateOutputType = {
    id: number
    name: number
    race: number
    class: number
    alignment: number
    description: number
    background: number
    personality: number
    goals: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NPCMinAggregateInputType = {
    id?: true
    name?: true
    race?: true
    class?: true
    alignment?: true
    description?: true
    background?: true
    personality?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NPCMaxAggregateInputType = {
    id?: true
    name?: true
    race?: true
    class?: true
    alignment?: true
    description?: true
    background?: true
    personality?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NPCCountAggregateInputType = {
    id?: true
    name?: true
    race?: true
    class?: true
    alignment?: true
    description?: true
    background?: true
    personality?: true
    goals?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NPCAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NPC to aggregate.
     */
    where?: NPCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NPCS to fetch.
     */
    orderBy?: NPCOrderByWithRelationInput | NPCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NPCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NPCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NPCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NPCS
    **/
    _count?: true | NPCCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NPCMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NPCMaxAggregateInputType
  }

  export type GetNPCAggregateType<T extends NPCAggregateArgs> = {
        [P in keyof T & keyof AggregateNPC]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNPC[P]>
      : GetScalarType<T[P], AggregateNPC[P]>
  }




  export type NPCGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NPCWhereInput
    orderBy?: NPCOrderByWithAggregationInput | NPCOrderByWithAggregationInput[]
    by: NPCScalarFieldEnum[] | NPCScalarFieldEnum
    having?: NPCScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NPCCountAggregateInputType | true
    _min?: NPCMinAggregateInputType
    _max?: NPCMaxAggregateInputType
  }

  export type NPCGroupByOutputType = {
    id: string
    name: string
    race: string
    class: string | null
    alignment: string
    description: string
    background: string
    personality: string
    goals: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: NPCCountAggregateOutputType | null
    _min: NPCMinAggregateOutputType | null
    _max: NPCMaxAggregateOutputType | null
  }

  type GetNPCGroupByPayload<T extends NPCGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NPCGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NPCGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NPCGroupByOutputType[P]>
            : GetScalarType<T[P], NPCGroupByOutputType[P]>
        }
      >
    >


  export type NPCSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    race?: boolean
    class?: boolean
    alignment?: boolean
    description?: boolean
    background?: boolean
    personality?: boolean
    goals?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaigns?: boolean | NPC$campaignsArgs<ExtArgs>
    _count?: boolean | NPCCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nPC"]>

  export type NPCSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    race?: boolean
    class?: boolean
    alignment?: boolean
    description?: boolean
    background?: boolean
    personality?: boolean
    goals?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nPC"]>

  export type NPCSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    race?: boolean
    class?: boolean
    alignment?: boolean
    description?: boolean
    background?: boolean
    personality?: boolean
    goals?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["nPC"]>

  export type NPCSelectScalar = {
    id?: boolean
    name?: boolean
    race?: boolean
    class?: boolean
    alignment?: boolean
    description?: boolean
    background?: boolean
    personality?: boolean
    goals?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NPCOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "race" | "class" | "alignment" | "description" | "background" | "personality" | "goals" | "createdAt" | "updatedAt", ExtArgs["result"]["nPC"]>
  export type NPCInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | NPC$campaignsArgs<ExtArgs>
    _count?: boolean | NPCCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type NPCIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type NPCIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $NPCPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NPC"
    objects: {
      campaigns: Prisma.$CampaignNPCPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      race: string
      class: string | null
      alignment: string
      description: string
      background: string
      personality: string
      goals: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["nPC"]>
    composites: {}
  }

  type NPCGetPayload<S extends boolean | null | undefined | NPCDefaultArgs> = $Result.GetResult<Prisma.$NPCPayload, S>

  type NPCCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NPCFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NPCCountAggregateInputType | true
    }

  export interface NPCDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NPC'], meta: { name: 'NPC' } }
    /**
     * Find zero or one NPC that matches the filter.
     * @param {NPCFindUniqueArgs} args - Arguments to find a NPC
     * @example
     * // Get one NPC
     * const nPC = await prisma.nPC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NPCFindUniqueArgs>(args: SelectSubset<T, NPCFindUniqueArgs<ExtArgs>>): Prisma__NPCClient<$Result.GetResult<Prisma.$NPCPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NPC that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NPCFindUniqueOrThrowArgs} args - Arguments to find a NPC
     * @example
     * // Get one NPC
     * const nPC = await prisma.nPC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NPCFindUniqueOrThrowArgs>(args: SelectSubset<T, NPCFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NPCClient<$Result.GetResult<Prisma.$NPCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NPC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPCFindFirstArgs} args - Arguments to find a NPC
     * @example
     * // Get one NPC
     * const nPC = await prisma.nPC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NPCFindFirstArgs>(args?: SelectSubset<T, NPCFindFirstArgs<ExtArgs>>): Prisma__NPCClient<$Result.GetResult<Prisma.$NPCPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NPC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPCFindFirstOrThrowArgs} args - Arguments to find a NPC
     * @example
     * // Get one NPC
     * const nPC = await prisma.nPC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NPCFindFirstOrThrowArgs>(args?: SelectSubset<T, NPCFindFirstOrThrowArgs<ExtArgs>>): Prisma__NPCClient<$Result.GetResult<Prisma.$NPCPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NPCS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPCFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NPCS
     * const nPCS = await prisma.nPC.findMany()
     * 
     * // Get first 10 NPCS
     * const nPCS = await prisma.nPC.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nPCWithIdOnly = await prisma.nPC.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NPCFindManyArgs>(args?: SelectSubset<T, NPCFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NPCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NPC.
     * @param {NPCCreateArgs} args - Arguments to create a NPC.
     * @example
     * // Create one NPC
     * const NPC = await prisma.nPC.create({
     *   data: {
     *     // ... data to create a NPC
     *   }
     * })
     * 
     */
    create<T extends NPCCreateArgs>(args: SelectSubset<T, NPCCreateArgs<ExtArgs>>): Prisma__NPCClient<$Result.GetResult<Prisma.$NPCPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NPCS.
     * @param {NPCCreateManyArgs} args - Arguments to create many NPCS.
     * @example
     * // Create many NPCS
     * const nPC = await prisma.nPC.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NPCCreateManyArgs>(args?: SelectSubset<T, NPCCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NPCS and returns the data saved in the database.
     * @param {NPCCreateManyAndReturnArgs} args - Arguments to create many NPCS.
     * @example
     * // Create many NPCS
     * const nPC = await prisma.nPC.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NPCS and only return the `id`
     * const nPCWithIdOnly = await prisma.nPC.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NPCCreateManyAndReturnArgs>(args?: SelectSubset<T, NPCCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NPCPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NPC.
     * @param {NPCDeleteArgs} args - Arguments to delete one NPC.
     * @example
     * // Delete one NPC
     * const NPC = await prisma.nPC.delete({
     *   where: {
     *     // ... filter to delete one NPC
     *   }
     * })
     * 
     */
    delete<T extends NPCDeleteArgs>(args: SelectSubset<T, NPCDeleteArgs<ExtArgs>>): Prisma__NPCClient<$Result.GetResult<Prisma.$NPCPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NPC.
     * @param {NPCUpdateArgs} args - Arguments to update one NPC.
     * @example
     * // Update one NPC
     * const nPC = await prisma.nPC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NPCUpdateArgs>(args: SelectSubset<T, NPCUpdateArgs<ExtArgs>>): Prisma__NPCClient<$Result.GetResult<Prisma.$NPCPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NPCS.
     * @param {NPCDeleteManyArgs} args - Arguments to filter NPCS to delete.
     * @example
     * // Delete a few NPCS
     * const { count } = await prisma.nPC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NPCDeleteManyArgs>(args?: SelectSubset<T, NPCDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NPCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPCUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NPCS
     * const nPC = await prisma.nPC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NPCUpdateManyArgs>(args: SelectSubset<T, NPCUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NPCS and returns the data updated in the database.
     * @param {NPCUpdateManyAndReturnArgs} args - Arguments to update many NPCS.
     * @example
     * // Update many NPCS
     * const nPC = await prisma.nPC.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NPCS and only return the `id`
     * const nPCWithIdOnly = await prisma.nPC.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NPCUpdateManyAndReturnArgs>(args: SelectSubset<T, NPCUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NPCPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NPC.
     * @param {NPCUpsertArgs} args - Arguments to update or create a NPC.
     * @example
     * // Update or create a NPC
     * const nPC = await prisma.nPC.upsert({
     *   create: {
     *     // ... data to create a NPC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NPC we want to update
     *   }
     * })
     */
    upsert<T extends NPCUpsertArgs>(args: SelectSubset<T, NPCUpsertArgs<ExtArgs>>): Prisma__NPCClient<$Result.GetResult<Prisma.$NPCPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NPCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPCCountArgs} args - Arguments to filter NPCS to count.
     * @example
     * // Count the number of NPCS
     * const count = await prisma.nPC.count({
     *   where: {
     *     // ... the filter for the NPCS we want to count
     *   }
     * })
    **/
    count<T extends NPCCountArgs>(
      args?: Subset<T, NPCCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NPCCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NPC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPCAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NPCAggregateArgs>(args: Subset<T, NPCAggregateArgs>): Prisma.PrismaPromise<GetNPCAggregateType<T>>

    /**
     * Group by NPC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NPCGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NPCGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NPCGroupByArgs['orderBy'] }
        : { orderBy?: NPCGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NPCGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNPCGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NPC model
   */
  readonly fields: NPCFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NPC.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NPCClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaigns<T extends NPC$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, NPC$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignNPCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NPC model
   */
  interface NPCFieldRefs {
    readonly id: FieldRef<"NPC", 'String'>
    readonly name: FieldRef<"NPC", 'String'>
    readonly race: FieldRef<"NPC", 'String'>
    readonly class: FieldRef<"NPC", 'String'>
    readonly alignment: FieldRef<"NPC", 'String'>
    readonly description: FieldRef<"NPC", 'String'>
    readonly background: FieldRef<"NPC", 'String'>
    readonly personality: FieldRef<"NPC", 'String'>
    readonly goals: FieldRef<"NPC", 'Json'>
    readonly createdAt: FieldRef<"NPC", 'DateTime'>
    readonly updatedAt: FieldRef<"NPC", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NPC findUnique
   */
  export type NPCFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPC
     */
    select?: NPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPC
     */
    omit?: NPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCInclude<ExtArgs> | null
    /**
     * Filter, which NPC to fetch.
     */
    where: NPCWhereUniqueInput
  }

  /**
   * NPC findUniqueOrThrow
   */
  export type NPCFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPC
     */
    select?: NPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPC
     */
    omit?: NPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCInclude<ExtArgs> | null
    /**
     * Filter, which NPC to fetch.
     */
    where: NPCWhereUniqueInput
  }

  /**
   * NPC findFirst
   */
  export type NPCFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPC
     */
    select?: NPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPC
     */
    omit?: NPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCInclude<ExtArgs> | null
    /**
     * Filter, which NPC to fetch.
     */
    where?: NPCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NPCS to fetch.
     */
    orderBy?: NPCOrderByWithRelationInput | NPCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NPCS.
     */
    cursor?: NPCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NPCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NPCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NPCS.
     */
    distinct?: NPCScalarFieldEnum | NPCScalarFieldEnum[]
  }

  /**
   * NPC findFirstOrThrow
   */
  export type NPCFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPC
     */
    select?: NPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPC
     */
    omit?: NPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCInclude<ExtArgs> | null
    /**
     * Filter, which NPC to fetch.
     */
    where?: NPCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NPCS to fetch.
     */
    orderBy?: NPCOrderByWithRelationInput | NPCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NPCS.
     */
    cursor?: NPCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NPCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NPCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NPCS.
     */
    distinct?: NPCScalarFieldEnum | NPCScalarFieldEnum[]
  }

  /**
   * NPC findMany
   */
  export type NPCFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPC
     */
    select?: NPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPC
     */
    omit?: NPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCInclude<ExtArgs> | null
    /**
     * Filter, which NPCS to fetch.
     */
    where?: NPCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NPCS to fetch.
     */
    orderBy?: NPCOrderByWithRelationInput | NPCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NPCS.
     */
    cursor?: NPCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NPCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NPCS.
     */
    skip?: number
    distinct?: NPCScalarFieldEnum | NPCScalarFieldEnum[]
  }

  /**
   * NPC create
   */
  export type NPCCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPC
     */
    select?: NPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPC
     */
    omit?: NPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCInclude<ExtArgs> | null
    /**
     * The data needed to create a NPC.
     */
    data: XOR<NPCCreateInput, NPCUncheckedCreateInput>
  }

  /**
   * NPC createMany
   */
  export type NPCCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NPCS.
     */
    data: NPCCreateManyInput | NPCCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NPC createManyAndReturn
   */
  export type NPCCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPC
     */
    select?: NPCSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NPC
     */
    omit?: NPCOmit<ExtArgs> | null
    /**
     * The data used to create many NPCS.
     */
    data: NPCCreateManyInput | NPCCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * NPC update
   */
  export type NPCUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPC
     */
    select?: NPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPC
     */
    omit?: NPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCInclude<ExtArgs> | null
    /**
     * The data needed to update a NPC.
     */
    data: XOR<NPCUpdateInput, NPCUncheckedUpdateInput>
    /**
     * Choose, which NPC to update.
     */
    where: NPCWhereUniqueInput
  }

  /**
   * NPC updateMany
   */
  export type NPCUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NPCS.
     */
    data: XOR<NPCUpdateManyMutationInput, NPCUncheckedUpdateManyInput>
    /**
     * Filter which NPCS to update
     */
    where?: NPCWhereInput
    /**
     * Limit how many NPCS to update.
     */
    limit?: number
  }

  /**
   * NPC updateManyAndReturn
   */
  export type NPCUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPC
     */
    select?: NPCSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NPC
     */
    omit?: NPCOmit<ExtArgs> | null
    /**
     * The data used to update NPCS.
     */
    data: XOR<NPCUpdateManyMutationInput, NPCUncheckedUpdateManyInput>
    /**
     * Filter which NPCS to update
     */
    where?: NPCWhereInput
    /**
     * Limit how many NPCS to update.
     */
    limit?: number
  }

  /**
   * NPC upsert
   */
  export type NPCUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPC
     */
    select?: NPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPC
     */
    omit?: NPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCInclude<ExtArgs> | null
    /**
     * The filter to search for the NPC to update in case it exists.
     */
    where: NPCWhereUniqueInput
    /**
     * In case the NPC found by the `where` argument doesn't exist, create a new NPC with this data.
     */
    create: XOR<NPCCreateInput, NPCUncheckedCreateInput>
    /**
     * In case the NPC was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NPCUpdateInput, NPCUncheckedUpdateInput>
  }

  /**
   * NPC delete
   */
  export type NPCDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPC
     */
    select?: NPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPC
     */
    omit?: NPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCInclude<ExtArgs> | null
    /**
     * Filter which NPC to delete.
     */
    where: NPCWhereUniqueInput
  }

  /**
   * NPC deleteMany
   */
  export type NPCDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NPCS to delete
     */
    where?: NPCWhereInput
    /**
     * Limit how many NPCS to delete.
     */
    limit?: number
  }

  /**
   * NPC.campaigns
   */
  export type NPC$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignNPC
     */
    select?: CampaignNPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignNPC
     */
    omit?: CampaignNPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignNPCInclude<ExtArgs> | null
    where?: CampaignNPCWhereInput
    orderBy?: CampaignNPCOrderByWithRelationInput | CampaignNPCOrderByWithRelationInput[]
    cursor?: CampaignNPCWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignNPCScalarFieldEnum | CampaignNPCScalarFieldEnum[]
  }

  /**
   * NPC without action
   */
  export type NPCDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NPC
     */
    select?: NPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NPC
     */
    omit?: NPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NPCInclude<ExtArgs> | null
  }


  /**
   * Model City
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityMinAggregateOutputType = {
    id: string | null
    name: string | null
    size: string | null
    population: string | null
    government: string | null
    economy: string | null
    description: string | null
    history: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CityMaxAggregateOutputType = {
    id: string | null
    name: string | null
    size: string | null
    population: string | null
    government: string | null
    economy: string | null
    description: string | null
    history: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    name: number
    size: number
    population: number
    government: number
    economy: number
    notableLocations: number
    description: number
    history: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CityMinAggregateInputType = {
    id?: true
    name?: true
    size?: true
    population?: true
    government?: true
    economy?: true
    description?: true
    history?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    name?: true
    size?: true
    population?: true
    government?: true
    economy?: true
    description?: true
    history?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    name?: true
    size?: true
    population?: true
    government?: true
    economy?: true
    notableLocations?: true
    description?: true
    history?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
    orderBy?: CityOrderByWithAggregationInput | CityOrderByWithAggregationInput[]
    by: CityScalarFieldEnum[] | CityScalarFieldEnum
    having?: CityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }

  export type CityGroupByOutputType = {
    id: string
    name: string
    size: string
    population: string
    government: string
    economy: string
    notableLocations: JsonValue
    description: string
    history: string
    createdAt: Date
    updatedAt: Date
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type CitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    size?: boolean
    population?: boolean
    government?: boolean
    economy?: boolean
    notableLocations?: boolean
    description?: boolean
    history?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaigns?: boolean | City$campaignsArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    size?: boolean
    population?: boolean
    government?: boolean
    economy?: boolean
    notableLocations?: boolean
    description?: boolean
    history?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["city"]>

  export type CitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    size?: boolean
    population?: boolean
    government?: boolean
    economy?: boolean
    notableLocations?: boolean
    description?: boolean
    history?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["city"]>

  export type CitySelectScalar = {
    id?: boolean
    name?: boolean
    size?: boolean
    population?: boolean
    government?: boolean
    economy?: boolean
    notableLocations?: boolean
    description?: boolean
    history?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "size" | "population" | "government" | "economy" | "notableLocations" | "description" | "history" | "createdAt" | "updatedAt", ExtArgs["result"]["city"]>
  export type CityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | City$campaignsArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "City"
    objects: {
      campaigns: Prisma.$CampaignCityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      size: string
      population: string
      government: string
      economy: string
      notableLocations: Prisma.JsonValue
      description: string
      history: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["city"]>
    composites: {}
  }

  type CityGetPayload<S extends boolean | null | undefined | CityDefaultArgs> = $Result.GetResult<Prisma.$CityPayload, S>

  type CityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface CityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['City'], meta: { name: 'City' } }
    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CityFindUniqueArgs>(args: SelectSubset<T, CityFindUniqueArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one City that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs>(args: SelectSubset<T, CityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CityFindFirstArgs>(args?: SelectSubset<T, CityFindFirstArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs>(args?: SelectSubset<T, CityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CityFindManyArgs>(args?: SelectSubset<T, CityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
     */
    create<T extends CityCreateArgs>(args: SelectSubset<T, CityCreateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cities.
     * @param {CityCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CityCreateManyArgs>(args?: SelectSubset<T, CityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cities and returns the data saved in the database.
     * @param {CityCreateManyAndReturnArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cities and only return the `id`
     * const cityWithIdOnly = await prisma.city.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CityCreateManyAndReturnArgs>(args?: SelectSubset<T, CityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
     */
    delete<T extends CityDeleteArgs>(args: SelectSubset<T, CityDeleteArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CityUpdateArgs>(args: SelectSubset<T, CityUpdateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CityDeleteManyArgs>(args?: SelectSubset<T, CityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CityUpdateManyArgs>(args: SelectSubset<T, CityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities and returns the data updated in the database.
     * @param {CityUpdateManyAndReturnArgs} args - Arguments to update many Cities.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cities and only return the `id`
     * const cityWithIdOnly = await prisma.city.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CityUpdateManyAndReturnArgs>(args: SelectSubset<T, CityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
     */
    upsert<T extends CityUpsertArgs>(args: SelectSubset<T, CityUpsertArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the City model
   */
  readonly fields: CityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaigns<T extends City$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, City$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignCityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the City model
   */
  interface CityFieldRefs {
    readonly id: FieldRef<"City", 'String'>
    readonly name: FieldRef<"City", 'String'>
    readonly size: FieldRef<"City", 'String'>
    readonly population: FieldRef<"City", 'String'>
    readonly government: FieldRef<"City", 'String'>
    readonly economy: FieldRef<"City", 'String'>
    readonly notableLocations: FieldRef<"City", 'Json'>
    readonly description: FieldRef<"City", 'String'>
    readonly history: FieldRef<"City", 'String'>
    readonly createdAt: FieldRef<"City", 'DateTime'>
    readonly updatedAt: FieldRef<"City", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * City findUnique
   */
  export type CityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findFirst
   */
  export type CityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findMany
   */
  export type CityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City create
   */
  export type CityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>
  }

  /**
   * City createMany
   */
  export type CityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City createManyAndReturn
   */
  export type CityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City update
   */
  export type CityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City updateMany
   */
  export type CityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to update.
     */
    limit?: number
  }

  /**
   * City updateManyAndReturn
   */
  export type CityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to update.
     */
    limit?: number
  }

  /**
   * City upsert
   */
  export type CityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>
  }

  /**
   * City delete
   */
  export type CityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput
    /**
     * Limit how many Cities to delete.
     */
    limit?: number
  }

  /**
   * City.campaigns
   */
  export type City$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCity
     */
    select?: CampaignCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCity
     */
    omit?: CampaignCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignCityInclude<ExtArgs> | null
    where?: CampaignCityWhereInput
    orderBy?: CampaignCityOrderByWithRelationInput | CampaignCityOrderByWithRelationInput[]
    cursor?: CampaignCityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignCityScalarFieldEnum | CampaignCityScalarFieldEnum[]
  }

  /**
   * City without action
   */
  export type CityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the City
     */
    omit?: CityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
  }


  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    rarity: string | null
    description: string | null
    history: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    rarity: string | null
    description: string | null
    history: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    name: number
    type: number
    rarity: number
    description: number
    properties: number
    history: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ItemMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    rarity?: true
    description?: true
    history?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    rarity?: true
    description?: true
    history?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    rarity?: true
    description?: true
    properties?: true
    history?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: string
    name: string
    type: string
    rarity: string
    description: string
    properties: JsonValue
    history: string | null
    createdAt: Date
    updatedAt: Date
    _count: ItemCountAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    rarity?: boolean
    description?: boolean
    properties?: boolean
    history?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaigns?: boolean | Item$campaignsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["item"]>

  export type ItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    rarity?: boolean
    description?: boolean
    properties?: boolean
    history?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    rarity?: boolean
    description?: boolean
    properties?: boolean
    history?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    rarity?: boolean
    description?: boolean
    properties?: boolean
    history?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "type" | "rarity" | "description" | "properties" | "history" | "createdAt" | "updatedAt", ExtArgs["result"]["item"]>
  export type ItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaigns?: boolean | Item$campaignsArgs<ExtArgs>
    _count?: boolean | ItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {
      campaigns: Prisma.$CampaignItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      rarity: string
      description: string
      properties: Prisma.JsonValue
      history: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["item"]>
    composites: {}
  }

  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ItemFindUniqueArgs>(args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs>(args: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ItemFindFirstArgs>(args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs>(args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ItemFindManyArgs>(args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
     */
    create<T extends ItemCreateArgs>(args: SelectSubset<T, ItemCreateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ItemCreateManyArgs>(args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Items and returns the data saved in the database.
     * @param {ItemCreateManyAndReturnArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ItemCreateManyAndReturnArgs>(args?: SelectSubset<T, ItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
     */
    delete<T extends ItemDeleteArgs>(args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ItemUpdateArgs>(args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ItemDeleteManyArgs>(args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ItemUpdateManyArgs>(args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items and returns the data updated in the database.
     * @param {ItemUpdateManyAndReturnArgs} args - Arguments to update many Items.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Items and only return the `id`
     * const itemWithIdOnly = await prisma.item.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ItemUpdateManyAndReturnArgs>(args: SelectSubset<T, ItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
     */
    upsert<T extends ItemUpsertArgs>(args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaigns<T extends Item$campaignsArgs<ExtArgs> = {}>(args?: Subset<T, Item$campaignsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Item model
   */
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'String'>
    readonly name: FieldRef<"Item", 'String'>
    readonly type: FieldRef<"Item", 'String'>
    readonly rarity: FieldRef<"Item", 'String'>
    readonly description: FieldRef<"Item", 'String'>
    readonly properties: FieldRef<"Item", 'Json'>
    readonly history: FieldRef<"Item", 'String'>
    readonly createdAt: FieldRef<"Item", 'DateTime'>
    readonly updatedAt: FieldRef<"Item", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item createManyAndReturn
   */
  export type ItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item updateManyAndReturn
   */
  export type ItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to update.
     */
    limit?: number
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
    /**
     * Limit how many Items to delete.
     */
    limit?: number
  }

  /**
   * Item.campaigns
   */
  export type Item$campaignsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignItem
     */
    select?: CampaignItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignItem
     */
    omit?: CampaignItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignItemInclude<ExtArgs> | null
    where?: CampaignItemWhereInput
    orderBy?: CampaignItemOrderByWithRelationInput | CampaignItemOrderByWithRelationInput[]
    cursor?: CampaignItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CampaignItemScalarFieldEnum | CampaignItemScalarFieldEnum[]
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Item
     */
    omit?: ItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ItemInclude<ExtArgs> | null
  }


  /**
   * Model CampaignCity
   */

  export type AggregateCampaignCity = {
    _count: CampaignCityCountAggregateOutputType | null
    _min: CampaignCityMinAggregateOutputType | null
    _max: CampaignCityMaxAggregateOutputType | null
  }

  export type CampaignCityMinAggregateOutputType = {
    id: string | null
    campaignId: string | null
    cityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignCityMaxAggregateOutputType = {
    id: string | null
    campaignId: string | null
    cityId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignCityCountAggregateOutputType = {
    id: number
    campaignId: number
    cityId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignCityMinAggregateInputType = {
    id?: true
    campaignId?: true
    cityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignCityMaxAggregateInputType = {
    id?: true
    campaignId?: true
    cityId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignCityCountAggregateInputType = {
    id?: true
    campaignId?: true
    cityId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaignCityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignCity to aggregate.
     */
    where?: CampaignCityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignCities to fetch.
     */
    orderBy?: CampaignCityOrderByWithRelationInput | CampaignCityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignCityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignCities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignCities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampaignCities
    **/
    _count?: true | CampaignCityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignCityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignCityMaxAggregateInputType
  }

  export type GetCampaignCityAggregateType<T extends CampaignCityAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaignCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaignCity[P]>
      : GetScalarType<T[P], AggregateCampaignCity[P]>
  }




  export type CampaignCityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignCityWhereInput
    orderBy?: CampaignCityOrderByWithAggregationInput | CampaignCityOrderByWithAggregationInput[]
    by: CampaignCityScalarFieldEnum[] | CampaignCityScalarFieldEnum
    having?: CampaignCityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignCityCountAggregateInputType | true
    _min?: CampaignCityMinAggregateInputType
    _max?: CampaignCityMaxAggregateInputType
  }

  export type CampaignCityGroupByOutputType = {
    id: string
    campaignId: string
    cityId: string
    createdAt: Date
    updatedAt: Date
    _count: CampaignCityCountAggregateOutputType | null
    _min: CampaignCityMinAggregateOutputType | null
    _max: CampaignCityMaxAggregateOutputType | null
  }

  type GetCampaignCityGroupByPayload<T extends CampaignCityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignCityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignCityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignCityGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignCityGroupByOutputType[P]>
        }
      >
    >


  export type CampaignCitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    cityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignCity"]>

  export type CampaignCitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    cityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignCity"]>

  export type CampaignCitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    cityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignCity"]>

  export type CampaignCitySelectScalar = {
    id?: boolean
    campaignId?: boolean
    cityId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaignCityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "cityId" | "createdAt" | "updatedAt", ExtArgs["result"]["campaignCity"]>
  export type CampaignCityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }
  export type CampaignCityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }
  export type CampaignCityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }

  export type $CampaignCityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampaignCity"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      city: Prisma.$CityPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      campaignId: string
      cityId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaignCity"]>
    composites: {}
  }

  type CampaignCityGetPayload<S extends boolean | null | undefined | CampaignCityDefaultArgs> = $Result.GetResult<Prisma.$CampaignCityPayload, S>

  type CampaignCityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignCityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignCityCountAggregateInputType | true
    }

  export interface CampaignCityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampaignCity'], meta: { name: 'CampaignCity' } }
    /**
     * Find zero or one CampaignCity that matches the filter.
     * @param {CampaignCityFindUniqueArgs} args - Arguments to find a CampaignCity
     * @example
     * // Get one CampaignCity
     * const campaignCity = await prisma.campaignCity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignCityFindUniqueArgs>(args: SelectSubset<T, CampaignCityFindUniqueArgs<ExtArgs>>): Prisma__CampaignCityClient<$Result.GetResult<Prisma.$CampaignCityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CampaignCity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignCityFindUniqueOrThrowArgs} args - Arguments to find a CampaignCity
     * @example
     * // Get one CampaignCity
     * const campaignCity = await prisma.campaignCity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignCityFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignCityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignCityClient<$Result.GetResult<Prisma.$CampaignCityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignCity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCityFindFirstArgs} args - Arguments to find a CampaignCity
     * @example
     * // Get one CampaignCity
     * const campaignCity = await prisma.campaignCity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignCityFindFirstArgs>(args?: SelectSubset<T, CampaignCityFindFirstArgs<ExtArgs>>): Prisma__CampaignCityClient<$Result.GetResult<Prisma.$CampaignCityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignCity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCityFindFirstOrThrowArgs} args - Arguments to find a CampaignCity
     * @example
     * // Get one CampaignCity
     * const campaignCity = await prisma.campaignCity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignCityFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignCityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignCityClient<$Result.GetResult<Prisma.$CampaignCityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CampaignCities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampaignCities
     * const campaignCities = await prisma.campaignCity.findMany()
     * 
     * // Get first 10 CampaignCities
     * const campaignCities = await prisma.campaignCity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignCityWithIdOnly = await prisma.campaignCity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignCityFindManyArgs>(args?: SelectSubset<T, CampaignCityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignCityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CampaignCity.
     * @param {CampaignCityCreateArgs} args - Arguments to create a CampaignCity.
     * @example
     * // Create one CampaignCity
     * const CampaignCity = await prisma.campaignCity.create({
     *   data: {
     *     // ... data to create a CampaignCity
     *   }
     * })
     * 
     */
    create<T extends CampaignCityCreateArgs>(args: SelectSubset<T, CampaignCityCreateArgs<ExtArgs>>): Prisma__CampaignCityClient<$Result.GetResult<Prisma.$CampaignCityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CampaignCities.
     * @param {CampaignCityCreateManyArgs} args - Arguments to create many CampaignCities.
     * @example
     * // Create many CampaignCities
     * const campaignCity = await prisma.campaignCity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignCityCreateManyArgs>(args?: SelectSubset<T, CampaignCityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CampaignCities and returns the data saved in the database.
     * @param {CampaignCityCreateManyAndReturnArgs} args - Arguments to create many CampaignCities.
     * @example
     * // Create many CampaignCities
     * const campaignCity = await prisma.campaignCity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CampaignCities and only return the `id`
     * const campaignCityWithIdOnly = await prisma.campaignCity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignCityCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignCityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignCityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CampaignCity.
     * @param {CampaignCityDeleteArgs} args - Arguments to delete one CampaignCity.
     * @example
     * // Delete one CampaignCity
     * const CampaignCity = await prisma.campaignCity.delete({
     *   where: {
     *     // ... filter to delete one CampaignCity
     *   }
     * })
     * 
     */
    delete<T extends CampaignCityDeleteArgs>(args: SelectSubset<T, CampaignCityDeleteArgs<ExtArgs>>): Prisma__CampaignCityClient<$Result.GetResult<Prisma.$CampaignCityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CampaignCity.
     * @param {CampaignCityUpdateArgs} args - Arguments to update one CampaignCity.
     * @example
     * // Update one CampaignCity
     * const campaignCity = await prisma.campaignCity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignCityUpdateArgs>(args: SelectSubset<T, CampaignCityUpdateArgs<ExtArgs>>): Prisma__CampaignCityClient<$Result.GetResult<Prisma.$CampaignCityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CampaignCities.
     * @param {CampaignCityDeleteManyArgs} args - Arguments to filter CampaignCities to delete.
     * @example
     * // Delete a few CampaignCities
     * const { count } = await prisma.campaignCity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignCityDeleteManyArgs>(args?: SelectSubset<T, CampaignCityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignCities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampaignCities
     * const campaignCity = await prisma.campaignCity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignCityUpdateManyArgs>(args: SelectSubset<T, CampaignCityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignCities and returns the data updated in the database.
     * @param {CampaignCityUpdateManyAndReturnArgs} args - Arguments to update many CampaignCities.
     * @example
     * // Update many CampaignCities
     * const campaignCity = await prisma.campaignCity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CampaignCities and only return the `id`
     * const campaignCityWithIdOnly = await prisma.campaignCity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignCityUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignCityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignCityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CampaignCity.
     * @param {CampaignCityUpsertArgs} args - Arguments to update or create a CampaignCity.
     * @example
     * // Update or create a CampaignCity
     * const campaignCity = await prisma.campaignCity.upsert({
     *   create: {
     *     // ... data to create a CampaignCity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampaignCity we want to update
     *   }
     * })
     */
    upsert<T extends CampaignCityUpsertArgs>(args: SelectSubset<T, CampaignCityUpsertArgs<ExtArgs>>): Prisma__CampaignCityClient<$Result.GetResult<Prisma.$CampaignCityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CampaignCities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCityCountArgs} args - Arguments to filter CampaignCities to count.
     * @example
     * // Count the number of CampaignCities
     * const count = await prisma.campaignCity.count({
     *   where: {
     *     // ... the filter for the CampaignCities we want to count
     *   }
     * })
    **/
    count<T extends CampaignCityCountArgs>(
      args?: Subset<T, CampaignCityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignCityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampaignCity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignCityAggregateArgs>(args: Subset<T, CampaignCityAggregateArgs>): Prisma.PrismaPromise<GetCampaignCityAggregateType<T>>

    /**
     * Group by CampaignCity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignCityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignCityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignCityGroupByArgs['orderBy'] }
        : { orderBy?: CampaignCityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignCityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampaignCity model
   */
  readonly fields: CampaignCityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampaignCity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignCityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CampaignCity model
   */
  interface CampaignCityFieldRefs {
    readonly id: FieldRef<"CampaignCity", 'String'>
    readonly campaignId: FieldRef<"CampaignCity", 'String'>
    readonly cityId: FieldRef<"CampaignCity", 'String'>
    readonly createdAt: FieldRef<"CampaignCity", 'DateTime'>
    readonly updatedAt: FieldRef<"CampaignCity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CampaignCity findUnique
   */
  export type CampaignCityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCity
     */
    select?: CampaignCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCity
     */
    omit?: CampaignCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignCityInclude<ExtArgs> | null
    /**
     * Filter, which CampaignCity to fetch.
     */
    where: CampaignCityWhereUniqueInput
  }

  /**
   * CampaignCity findUniqueOrThrow
   */
  export type CampaignCityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCity
     */
    select?: CampaignCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCity
     */
    omit?: CampaignCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignCityInclude<ExtArgs> | null
    /**
     * Filter, which CampaignCity to fetch.
     */
    where: CampaignCityWhereUniqueInput
  }

  /**
   * CampaignCity findFirst
   */
  export type CampaignCityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCity
     */
    select?: CampaignCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCity
     */
    omit?: CampaignCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignCityInclude<ExtArgs> | null
    /**
     * Filter, which CampaignCity to fetch.
     */
    where?: CampaignCityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignCities to fetch.
     */
    orderBy?: CampaignCityOrderByWithRelationInput | CampaignCityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignCities.
     */
    cursor?: CampaignCityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignCities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignCities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignCities.
     */
    distinct?: CampaignCityScalarFieldEnum | CampaignCityScalarFieldEnum[]
  }

  /**
   * CampaignCity findFirstOrThrow
   */
  export type CampaignCityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCity
     */
    select?: CampaignCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCity
     */
    omit?: CampaignCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignCityInclude<ExtArgs> | null
    /**
     * Filter, which CampaignCity to fetch.
     */
    where?: CampaignCityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignCities to fetch.
     */
    orderBy?: CampaignCityOrderByWithRelationInput | CampaignCityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignCities.
     */
    cursor?: CampaignCityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignCities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignCities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignCities.
     */
    distinct?: CampaignCityScalarFieldEnum | CampaignCityScalarFieldEnum[]
  }

  /**
   * CampaignCity findMany
   */
  export type CampaignCityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCity
     */
    select?: CampaignCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCity
     */
    omit?: CampaignCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignCityInclude<ExtArgs> | null
    /**
     * Filter, which CampaignCities to fetch.
     */
    where?: CampaignCityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignCities to fetch.
     */
    orderBy?: CampaignCityOrderByWithRelationInput | CampaignCityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampaignCities.
     */
    cursor?: CampaignCityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignCities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignCities.
     */
    skip?: number
    distinct?: CampaignCityScalarFieldEnum | CampaignCityScalarFieldEnum[]
  }

  /**
   * CampaignCity create
   */
  export type CampaignCityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCity
     */
    select?: CampaignCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCity
     */
    omit?: CampaignCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignCityInclude<ExtArgs> | null
    /**
     * The data needed to create a CampaignCity.
     */
    data: XOR<CampaignCityCreateInput, CampaignCityUncheckedCreateInput>
  }

  /**
   * CampaignCity createMany
   */
  export type CampaignCityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampaignCities.
     */
    data: CampaignCityCreateManyInput | CampaignCityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampaignCity createManyAndReturn
   */
  export type CampaignCityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCity
     */
    select?: CampaignCitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCity
     */
    omit?: CampaignCityOmit<ExtArgs> | null
    /**
     * The data used to create many CampaignCities.
     */
    data: CampaignCityCreateManyInput | CampaignCityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignCityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignCity update
   */
  export type CampaignCityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCity
     */
    select?: CampaignCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCity
     */
    omit?: CampaignCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignCityInclude<ExtArgs> | null
    /**
     * The data needed to update a CampaignCity.
     */
    data: XOR<CampaignCityUpdateInput, CampaignCityUncheckedUpdateInput>
    /**
     * Choose, which CampaignCity to update.
     */
    where: CampaignCityWhereUniqueInput
  }

  /**
   * CampaignCity updateMany
   */
  export type CampaignCityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampaignCities.
     */
    data: XOR<CampaignCityUpdateManyMutationInput, CampaignCityUncheckedUpdateManyInput>
    /**
     * Filter which CampaignCities to update
     */
    where?: CampaignCityWhereInput
    /**
     * Limit how many CampaignCities to update.
     */
    limit?: number
  }

  /**
   * CampaignCity updateManyAndReturn
   */
  export type CampaignCityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCity
     */
    select?: CampaignCitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCity
     */
    omit?: CampaignCityOmit<ExtArgs> | null
    /**
     * The data used to update CampaignCities.
     */
    data: XOR<CampaignCityUpdateManyMutationInput, CampaignCityUncheckedUpdateManyInput>
    /**
     * Filter which CampaignCities to update
     */
    where?: CampaignCityWhereInput
    /**
     * Limit how many CampaignCities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignCityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignCity upsert
   */
  export type CampaignCityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCity
     */
    select?: CampaignCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCity
     */
    omit?: CampaignCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignCityInclude<ExtArgs> | null
    /**
     * The filter to search for the CampaignCity to update in case it exists.
     */
    where: CampaignCityWhereUniqueInput
    /**
     * In case the CampaignCity found by the `where` argument doesn't exist, create a new CampaignCity with this data.
     */
    create: XOR<CampaignCityCreateInput, CampaignCityUncheckedCreateInput>
    /**
     * In case the CampaignCity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignCityUpdateInput, CampaignCityUncheckedUpdateInput>
  }

  /**
   * CampaignCity delete
   */
  export type CampaignCityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCity
     */
    select?: CampaignCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCity
     */
    omit?: CampaignCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignCityInclude<ExtArgs> | null
    /**
     * Filter which CampaignCity to delete.
     */
    where: CampaignCityWhereUniqueInput
  }

  /**
   * CampaignCity deleteMany
   */
  export type CampaignCityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignCities to delete
     */
    where?: CampaignCityWhereInput
    /**
     * Limit how many CampaignCities to delete.
     */
    limit?: number
  }

  /**
   * CampaignCity without action
   */
  export type CampaignCityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignCity
     */
    select?: CampaignCitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignCity
     */
    omit?: CampaignCityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignCityInclude<ExtArgs> | null
  }


  /**
   * Model CampaignNPC
   */

  export type AggregateCampaignNPC = {
    _count: CampaignNPCCountAggregateOutputType | null
    _min: CampaignNPCMinAggregateOutputType | null
    _max: CampaignNPCMaxAggregateOutputType | null
  }

  export type CampaignNPCMinAggregateOutputType = {
    id: string | null
    campaignId: string | null
    npcId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignNPCMaxAggregateOutputType = {
    id: string | null
    campaignId: string | null
    npcId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignNPCCountAggregateOutputType = {
    id: number
    campaignId: number
    npcId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignNPCMinAggregateInputType = {
    id?: true
    campaignId?: true
    npcId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignNPCMaxAggregateInputType = {
    id?: true
    campaignId?: true
    npcId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignNPCCountAggregateInputType = {
    id?: true
    campaignId?: true
    npcId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaignNPCAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignNPC to aggregate.
     */
    where?: CampaignNPCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignNPCS to fetch.
     */
    orderBy?: CampaignNPCOrderByWithRelationInput | CampaignNPCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignNPCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignNPCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignNPCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampaignNPCS
    **/
    _count?: true | CampaignNPCCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignNPCMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignNPCMaxAggregateInputType
  }

  export type GetCampaignNPCAggregateType<T extends CampaignNPCAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaignNPC]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaignNPC[P]>
      : GetScalarType<T[P], AggregateCampaignNPC[P]>
  }




  export type CampaignNPCGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignNPCWhereInput
    orderBy?: CampaignNPCOrderByWithAggregationInput | CampaignNPCOrderByWithAggregationInput[]
    by: CampaignNPCScalarFieldEnum[] | CampaignNPCScalarFieldEnum
    having?: CampaignNPCScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignNPCCountAggregateInputType | true
    _min?: CampaignNPCMinAggregateInputType
    _max?: CampaignNPCMaxAggregateInputType
  }

  export type CampaignNPCGroupByOutputType = {
    id: string
    campaignId: string
    npcId: string
    createdAt: Date
    updatedAt: Date
    _count: CampaignNPCCountAggregateOutputType | null
    _min: CampaignNPCMinAggregateOutputType | null
    _max: CampaignNPCMaxAggregateOutputType | null
  }

  type GetCampaignNPCGroupByPayload<T extends CampaignNPCGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignNPCGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignNPCGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignNPCGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignNPCGroupByOutputType[P]>
        }
      >
    >


  export type CampaignNPCSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    npcId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    npc?: boolean | NPCDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignNPC"]>

  export type CampaignNPCSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    npcId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    npc?: boolean | NPCDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignNPC"]>

  export type CampaignNPCSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    npcId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    npc?: boolean | NPCDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignNPC"]>

  export type CampaignNPCSelectScalar = {
    id?: boolean
    campaignId?: boolean
    npcId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaignNPCOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "npcId" | "createdAt" | "updatedAt", ExtArgs["result"]["campaignNPC"]>
  export type CampaignNPCInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    npc?: boolean | NPCDefaultArgs<ExtArgs>
  }
  export type CampaignNPCIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    npc?: boolean | NPCDefaultArgs<ExtArgs>
  }
  export type CampaignNPCIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    npc?: boolean | NPCDefaultArgs<ExtArgs>
  }

  export type $CampaignNPCPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampaignNPC"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      npc: Prisma.$NPCPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      campaignId: string
      npcId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaignNPC"]>
    composites: {}
  }

  type CampaignNPCGetPayload<S extends boolean | null | undefined | CampaignNPCDefaultArgs> = $Result.GetResult<Prisma.$CampaignNPCPayload, S>

  type CampaignNPCCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignNPCFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignNPCCountAggregateInputType | true
    }

  export interface CampaignNPCDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampaignNPC'], meta: { name: 'CampaignNPC' } }
    /**
     * Find zero or one CampaignNPC that matches the filter.
     * @param {CampaignNPCFindUniqueArgs} args - Arguments to find a CampaignNPC
     * @example
     * // Get one CampaignNPC
     * const campaignNPC = await prisma.campaignNPC.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignNPCFindUniqueArgs>(args: SelectSubset<T, CampaignNPCFindUniqueArgs<ExtArgs>>): Prisma__CampaignNPCClient<$Result.GetResult<Prisma.$CampaignNPCPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CampaignNPC that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignNPCFindUniqueOrThrowArgs} args - Arguments to find a CampaignNPC
     * @example
     * // Get one CampaignNPC
     * const campaignNPC = await prisma.campaignNPC.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignNPCFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignNPCFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignNPCClient<$Result.GetResult<Prisma.$CampaignNPCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignNPC that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignNPCFindFirstArgs} args - Arguments to find a CampaignNPC
     * @example
     * // Get one CampaignNPC
     * const campaignNPC = await prisma.campaignNPC.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignNPCFindFirstArgs>(args?: SelectSubset<T, CampaignNPCFindFirstArgs<ExtArgs>>): Prisma__CampaignNPCClient<$Result.GetResult<Prisma.$CampaignNPCPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignNPC that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignNPCFindFirstOrThrowArgs} args - Arguments to find a CampaignNPC
     * @example
     * // Get one CampaignNPC
     * const campaignNPC = await prisma.campaignNPC.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignNPCFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignNPCFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignNPCClient<$Result.GetResult<Prisma.$CampaignNPCPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CampaignNPCS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignNPCFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampaignNPCS
     * const campaignNPCS = await prisma.campaignNPC.findMany()
     * 
     * // Get first 10 CampaignNPCS
     * const campaignNPCS = await prisma.campaignNPC.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignNPCWithIdOnly = await prisma.campaignNPC.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignNPCFindManyArgs>(args?: SelectSubset<T, CampaignNPCFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignNPCPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CampaignNPC.
     * @param {CampaignNPCCreateArgs} args - Arguments to create a CampaignNPC.
     * @example
     * // Create one CampaignNPC
     * const CampaignNPC = await prisma.campaignNPC.create({
     *   data: {
     *     // ... data to create a CampaignNPC
     *   }
     * })
     * 
     */
    create<T extends CampaignNPCCreateArgs>(args: SelectSubset<T, CampaignNPCCreateArgs<ExtArgs>>): Prisma__CampaignNPCClient<$Result.GetResult<Prisma.$CampaignNPCPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CampaignNPCS.
     * @param {CampaignNPCCreateManyArgs} args - Arguments to create many CampaignNPCS.
     * @example
     * // Create many CampaignNPCS
     * const campaignNPC = await prisma.campaignNPC.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignNPCCreateManyArgs>(args?: SelectSubset<T, CampaignNPCCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CampaignNPCS and returns the data saved in the database.
     * @param {CampaignNPCCreateManyAndReturnArgs} args - Arguments to create many CampaignNPCS.
     * @example
     * // Create many CampaignNPCS
     * const campaignNPC = await prisma.campaignNPC.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CampaignNPCS and only return the `id`
     * const campaignNPCWithIdOnly = await prisma.campaignNPC.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignNPCCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignNPCCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignNPCPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CampaignNPC.
     * @param {CampaignNPCDeleteArgs} args - Arguments to delete one CampaignNPC.
     * @example
     * // Delete one CampaignNPC
     * const CampaignNPC = await prisma.campaignNPC.delete({
     *   where: {
     *     // ... filter to delete one CampaignNPC
     *   }
     * })
     * 
     */
    delete<T extends CampaignNPCDeleteArgs>(args: SelectSubset<T, CampaignNPCDeleteArgs<ExtArgs>>): Prisma__CampaignNPCClient<$Result.GetResult<Prisma.$CampaignNPCPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CampaignNPC.
     * @param {CampaignNPCUpdateArgs} args - Arguments to update one CampaignNPC.
     * @example
     * // Update one CampaignNPC
     * const campaignNPC = await prisma.campaignNPC.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignNPCUpdateArgs>(args: SelectSubset<T, CampaignNPCUpdateArgs<ExtArgs>>): Prisma__CampaignNPCClient<$Result.GetResult<Prisma.$CampaignNPCPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CampaignNPCS.
     * @param {CampaignNPCDeleteManyArgs} args - Arguments to filter CampaignNPCS to delete.
     * @example
     * // Delete a few CampaignNPCS
     * const { count } = await prisma.campaignNPC.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignNPCDeleteManyArgs>(args?: SelectSubset<T, CampaignNPCDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignNPCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignNPCUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampaignNPCS
     * const campaignNPC = await prisma.campaignNPC.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignNPCUpdateManyArgs>(args: SelectSubset<T, CampaignNPCUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignNPCS and returns the data updated in the database.
     * @param {CampaignNPCUpdateManyAndReturnArgs} args - Arguments to update many CampaignNPCS.
     * @example
     * // Update many CampaignNPCS
     * const campaignNPC = await prisma.campaignNPC.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CampaignNPCS and only return the `id`
     * const campaignNPCWithIdOnly = await prisma.campaignNPC.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignNPCUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignNPCUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignNPCPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CampaignNPC.
     * @param {CampaignNPCUpsertArgs} args - Arguments to update or create a CampaignNPC.
     * @example
     * // Update or create a CampaignNPC
     * const campaignNPC = await prisma.campaignNPC.upsert({
     *   create: {
     *     // ... data to create a CampaignNPC
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampaignNPC we want to update
     *   }
     * })
     */
    upsert<T extends CampaignNPCUpsertArgs>(args: SelectSubset<T, CampaignNPCUpsertArgs<ExtArgs>>): Prisma__CampaignNPCClient<$Result.GetResult<Prisma.$CampaignNPCPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CampaignNPCS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignNPCCountArgs} args - Arguments to filter CampaignNPCS to count.
     * @example
     * // Count the number of CampaignNPCS
     * const count = await prisma.campaignNPC.count({
     *   where: {
     *     // ... the filter for the CampaignNPCS we want to count
     *   }
     * })
    **/
    count<T extends CampaignNPCCountArgs>(
      args?: Subset<T, CampaignNPCCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignNPCCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampaignNPC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignNPCAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignNPCAggregateArgs>(args: Subset<T, CampaignNPCAggregateArgs>): Prisma.PrismaPromise<GetCampaignNPCAggregateType<T>>

    /**
     * Group by CampaignNPC.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignNPCGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignNPCGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignNPCGroupByArgs['orderBy'] }
        : { orderBy?: CampaignNPCGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignNPCGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignNPCGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampaignNPC model
   */
  readonly fields: CampaignNPCFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampaignNPC.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignNPCClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    npc<T extends NPCDefaultArgs<ExtArgs> = {}>(args?: Subset<T, NPCDefaultArgs<ExtArgs>>): Prisma__NPCClient<$Result.GetResult<Prisma.$NPCPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CampaignNPC model
   */
  interface CampaignNPCFieldRefs {
    readonly id: FieldRef<"CampaignNPC", 'String'>
    readonly campaignId: FieldRef<"CampaignNPC", 'String'>
    readonly npcId: FieldRef<"CampaignNPC", 'String'>
    readonly createdAt: FieldRef<"CampaignNPC", 'DateTime'>
    readonly updatedAt: FieldRef<"CampaignNPC", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CampaignNPC findUnique
   */
  export type CampaignNPCFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignNPC
     */
    select?: CampaignNPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignNPC
     */
    omit?: CampaignNPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignNPCInclude<ExtArgs> | null
    /**
     * Filter, which CampaignNPC to fetch.
     */
    where: CampaignNPCWhereUniqueInput
  }

  /**
   * CampaignNPC findUniqueOrThrow
   */
  export type CampaignNPCFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignNPC
     */
    select?: CampaignNPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignNPC
     */
    omit?: CampaignNPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignNPCInclude<ExtArgs> | null
    /**
     * Filter, which CampaignNPC to fetch.
     */
    where: CampaignNPCWhereUniqueInput
  }

  /**
   * CampaignNPC findFirst
   */
  export type CampaignNPCFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignNPC
     */
    select?: CampaignNPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignNPC
     */
    omit?: CampaignNPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignNPCInclude<ExtArgs> | null
    /**
     * Filter, which CampaignNPC to fetch.
     */
    where?: CampaignNPCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignNPCS to fetch.
     */
    orderBy?: CampaignNPCOrderByWithRelationInput | CampaignNPCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignNPCS.
     */
    cursor?: CampaignNPCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignNPCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignNPCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignNPCS.
     */
    distinct?: CampaignNPCScalarFieldEnum | CampaignNPCScalarFieldEnum[]
  }

  /**
   * CampaignNPC findFirstOrThrow
   */
  export type CampaignNPCFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignNPC
     */
    select?: CampaignNPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignNPC
     */
    omit?: CampaignNPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignNPCInclude<ExtArgs> | null
    /**
     * Filter, which CampaignNPC to fetch.
     */
    where?: CampaignNPCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignNPCS to fetch.
     */
    orderBy?: CampaignNPCOrderByWithRelationInput | CampaignNPCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignNPCS.
     */
    cursor?: CampaignNPCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignNPCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignNPCS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignNPCS.
     */
    distinct?: CampaignNPCScalarFieldEnum | CampaignNPCScalarFieldEnum[]
  }

  /**
   * CampaignNPC findMany
   */
  export type CampaignNPCFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignNPC
     */
    select?: CampaignNPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignNPC
     */
    omit?: CampaignNPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignNPCInclude<ExtArgs> | null
    /**
     * Filter, which CampaignNPCS to fetch.
     */
    where?: CampaignNPCWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignNPCS to fetch.
     */
    orderBy?: CampaignNPCOrderByWithRelationInput | CampaignNPCOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampaignNPCS.
     */
    cursor?: CampaignNPCWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignNPCS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignNPCS.
     */
    skip?: number
    distinct?: CampaignNPCScalarFieldEnum | CampaignNPCScalarFieldEnum[]
  }

  /**
   * CampaignNPC create
   */
  export type CampaignNPCCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignNPC
     */
    select?: CampaignNPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignNPC
     */
    omit?: CampaignNPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignNPCInclude<ExtArgs> | null
    /**
     * The data needed to create a CampaignNPC.
     */
    data: XOR<CampaignNPCCreateInput, CampaignNPCUncheckedCreateInput>
  }

  /**
   * CampaignNPC createMany
   */
  export type CampaignNPCCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampaignNPCS.
     */
    data: CampaignNPCCreateManyInput | CampaignNPCCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampaignNPC createManyAndReturn
   */
  export type CampaignNPCCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignNPC
     */
    select?: CampaignNPCSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignNPC
     */
    omit?: CampaignNPCOmit<ExtArgs> | null
    /**
     * The data used to create many CampaignNPCS.
     */
    data: CampaignNPCCreateManyInput | CampaignNPCCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignNPCIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignNPC update
   */
  export type CampaignNPCUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignNPC
     */
    select?: CampaignNPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignNPC
     */
    omit?: CampaignNPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignNPCInclude<ExtArgs> | null
    /**
     * The data needed to update a CampaignNPC.
     */
    data: XOR<CampaignNPCUpdateInput, CampaignNPCUncheckedUpdateInput>
    /**
     * Choose, which CampaignNPC to update.
     */
    where: CampaignNPCWhereUniqueInput
  }

  /**
   * CampaignNPC updateMany
   */
  export type CampaignNPCUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampaignNPCS.
     */
    data: XOR<CampaignNPCUpdateManyMutationInput, CampaignNPCUncheckedUpdateManyInput>
    /**
     * Filter which CampaignNPCS to update
     */
    where?: CampaignNPCWhereInput
    /**
     * Limit how many CampaignNPCS to update.
     */
    limit?: number
  }

  /**
   * CampaignNPC updateManyAndReturn
   */
  export type CampaignNPCUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignNPC
     */
    select?: CampaignNPCSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignNPC
     */
    omit?: CampaignNPCOmit<ExtArgs> | null
    /**
     * The data used to update CampaignNPCS.
     */
    data: XOR<CampaignNPCUpdateManyMutationInput, CampaignNPCUncheckedUpdateManyInput>
    /**
     * Filter which CampaignNPCS to update
     */
    where?: CampaignNPCWhereInput
    /**
     * Limit how many CampaignNPCS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignNPCIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignNPC upsert
   */
  export type CampaignNPCUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignNPC
     */
    select?: CampaignNPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignNPC
     */
    omit?: CampaignNPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignNPCInclude<ExtArgs> | null
    /**
     * The filter to search for the CampaignNPC to update in case it exists.
     */
    where: CampaignNPCWhereUniqueInput
    /**
     * In case the CampaignNPC found by the `where` argument doesn't exist, create a new CampaignNPC with this data.
     */
    create: XOR<CampaignNPCCreateInput, CampaignNPCUncheckedCreateInput>
    /**
     * In case the CampaignNPC was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignNPCUpdateInput, CampaignNPCUncheckedUpdateInput>
  }

  /**
   * CampaignNPC delete
   */
  export type CampaignNPCDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignNPC
     */
    select?: CampaignNPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignNPC
     */
    omit?: CampaignNPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignNPCInclude<ExtArgs> | null
    /**
     * Filter which CampaignNPC to delete.
     */
    where: CampaignNPCWhereUniqueInput
  }

  /**
   * CampaignNPC deleteMany
   */
  export type CampaignNPCDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignNPCS to delete
     */
    where?: CampaignNPCWhereInput
    /**
     * Limit how many CampaignNPCS to delete.
     */
    limit?: number
  }

  /**
   * CampaignNPC without action
   */
  export type CampaignNPCDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignNPC
     */
    select?: CampaignNPCSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignNPC
     */
    omit?: CampaignNPCOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignNPCInclude<ExtArgs> | null
  }


  /**
   * Model CampaignItem
   */

  export type AggregateCampaignItem = {
    _count: CampaignItemCountAggregateOutputType | null
    _min: CampaignItemMinAggregateOutputType | null
    _max: CampaignItemMaxAggregateOutputType | null
  }

  export type CampaignItemMinAggregateOutputType = {
    id: string | null
    campaignId: string | null
    itemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignItemMaxAggregateOutputType = {
    id: string | null
    campaignId: string | null
    itemId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CampaignItemCountAggregateOutputType = {
    id: number
    campaignId: number
    itemId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CampaignItemMinAggregateInputType = {
    id?: true
    campaignId?: true
    itemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignItemMaxAggregateInputType = {
    id?: true
    campaignId?: true
    itemId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CampaignItemCountAggregateInputType = {
    id?: true
    campaignId?: true
    itemId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CampaignItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignItem to aggregate.
     */
    where?: CampaignItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignItems to fetch.
     */
    orderBy?: CampaignItemOrderByWithRelationInput | CampaignItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CampaignItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CampaignItems
    **/
    _count?: true | CampaignItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CampaignItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CampaignItemMaxAggregateInputType
  }

  export type GetCampaignItemAggregateType<T extends CampaignItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCampaignItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCampaignItem[P]>
      : GetScalarType<T[P], AggregateCampaignItem[P]>
  }




  export type CampaignItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CampaignItemWhereInput
    orderBy?: CampaignItemOrderByWithAggregationInput | CampaignItemOrderByWithAggregationInput[]
    by: CampaignItemScalarFieldEnum[] | CampaignItemScalarFieldEnum
    having?: CampaignItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CampaignItemCountAggregateInputType | true
    _min?: CampaignItemMinAggregateInputType
    _max?: CampaignItemMaxAggregateInputType
  }

  export type CampaignItemGroupByOutputType = {
    id: string
    campaignId: string
    itemId: string
    createdAt: Date
    updatedAt: Date
    _count: CampaignItemCountAggregateOutputType | null
    _min: CampaignItemMinAggregateOutputType | null
    _max: CampaignItemMaxAggregateOutputType | null
  }

  type GetCampaignItemGroupByPayload<T extends CampaignItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CampaignItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CampaignItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CampaignItemGroupByOutputType[P]>
            : GetScalarType<T[P], CampaignItemGroupByOutputType[P]>
        }
      >
    >


  export type CampaignItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    itemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignItem"]>

  export type CampaignItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    itemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignItem"]>

  export type CampaignItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    campaignId?: boolean
    itemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["campaignItem"]>

  export type CampaignItemSelectScalar = {
    id?: boolean
    campaignId?: boolean
    itemId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CampaignItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "campaignId" | "itemId" | "createdAt" | "updatedAt", ExtArgs["result"]["campaignItem"]>
  export type CampaignItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type CampaignItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }
  export type CampaignItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    campaign?: boolean | CampaignDefaultArgs<ExtArgs>
    item?: boolean | ItemDefaultArgs<ExtArgs>
  }

  export type $CampaignItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CampaignItem"
    objects: {
      campaign: Prisma.$CampaignPayload<ExtArgs>
      item: Prisma.$ItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      campaignId: string
      itemId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["campaignItem"]>
    composites: {}
  }

  type CampaignItemGetPayload<S extends boolean | null | undefined | CampaignItemDefaultArgs> = $Result.GetResult<Prisma.$CampaignItemPayload, S>

  type CampaignItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CampaignItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CampaignItemCountAggregateInputType | true
    }

  export interface CampaignItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CampaignItem'], meta: { name: 'CampaignItem' } }
    /**
     * Find zero or one CampaignItem that matches the filter.
     * @param {CampaignItemFindUniqueArgs} args - Arguments to find a CampaignItem
     * @example
     * // Get one CampaignItem
     * const campaignItem = await prisma.campaignItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CampaignItemFindUniqueArgs>(args: SelectSubset<T, CampaignItemFindUniqueArgs<ExtArgs>>): Prisma__CampaignItemClient<$Result.GetResult<Prisma.$CampaignItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CampaignItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CampaignItemFindUniqueOrThrowArgs} args - Arguments to find a CampaignItem
     * @example
     * // Get one CampaignItem
     * const campaignItem = await prisma.campaignItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CampaignItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CampaignItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CampaignItemClient<$Result.GetResult<Prisma.$CampaignItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignItemFindFirstArgs} args - Arguments to find a CampaignItem
     * @example
     * // Get one CampaignItem
     * const campaignItem = await prisma.campaignItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CampaignItemFindFirstArgs>(args?: SelectSubset<T, CampaignItemFindFirstArgs<ExtArgs>>): Prisma__CampaignItemClient<$Result.GetResult<Prisma.$CampaignItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CampaignItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignItemFindFirstOrThrowArgs} args - Arguments to find a CampaignItem
     * @example
     * // Get one CampaignItem
     * const campaignItem = await prisma.campaignItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CampaignItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CampaignItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CampaignItemClient<$Result.GetResult<Prisma.$CampaignItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CampaignItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CampaignItems
     * const campaignItems = await prisma.campaignItem.findMany()
     * 
     * // Get first 10 CampaignItems
     * const campaignItems = await prisma.campaignItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const campaignItemWithIdOnly = await prisma.campaignItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CampaignItemFindManyArgs>(args?: SelectSubset<T, CampaignItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CampaignItem.
     * @param {CampaignItemCreateArgs} args - Arguments to create a CampaignItem.
     * @example
     * // Create one CampaignItem
     * const CampaignItem = await prisma.campaignItem.create({
     *   data: {
     *     // ... data to create a CampaignItem
     *   }
     * })
     * 
     */
    create<T extends CampaignItemCreateArgs>(args: SelectSubset<T, CampaignItemCreateArgs<ExtArgs>>): Prisma__CampaignItemClient<$Result.GetResult<Prisma.$CampaignItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CampaignItems.
     * @param {CampaignItemCreateManyArgs} args - Arguments to create many CampaignItems.
     * @example
     * // Create many CampaignItems
     * const campaignItem = await prisma.campaignItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CampaignItemCreateManyArgs>(args?: SelectSubset<T, CampaignItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CampaignItems and returns the data saved in the database.
     * @param {CampaignItemCreateManyAndReturnArgs} args - Arguments to create many CampaignItems.
     * @example
     * // Create many CampaignItems
     * const campaignItem = await prisma.campaignItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CampaignItems and only return the `id`
     * const campaignItemWithIdOnly = await prisma.campaignItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CampaignItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CampaignItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CampaignItem.
     * @param {CampaignItemDeleteArgs} args - Arguments to delete one CampaignItem.
     * @example
     * // Delete one CampaignItem
     * const CampaignItem = await prisma.campaignItem.delete({
     *   where: {
     *     // ... filter to delete one CampaignItem
     *   }
     * })
     * 
     */
    delete<T extends CampaignItemDeleteArgs>(args: SelectSubset<T, CampaignItemDeleteArgs<ExtArgs>>): Prisma__CampaignItemClient<$Result.GetResult<Prisma.$CampaignItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CampaignItem.
     * @param {CampaignItemUpdateArgs} args - Arguments to update one CampaignItem.
     * @example
     * // Update one CampaignItem
     * const campaignItem = await prisma.campaignItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CampaignItemUpdateArgs>(args: SelectSubset<T, CampaignItemUpdateArgs<ExtArgs>>): Prisma__CampaignItemClient<$Result.GetResult<Prisma.$CampaignItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CampaignItems.
     * @param {CampaignItemDeleteManyArgs} args - Arguments to filter CampaignItems to delete.
     * @example
     * // Delete a few CampaignItems
     * const { count } = await prisma.campaignItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CampaignItemDeleteManyArgs>(args?: SelectSubset<T, CampaignItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CampaignItems
     * const campaignItem = await prisma.campaignItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CampaignItemUpdateManyArgs>(args: SelectSubset<T, CampaignItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CampaignItems and returns the data updated in the database.
     * @param {CampaignItemUpdateManyAndReturnArgs} args - Arguments to update many CampaignItems.
     * @example
     * // Update many CampaignItems
     * const campaignItem = await prisma.campaignItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CampaignItems and only return the `id`
     * const campaignItemWithIdOnly = await prisma.campaignItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CampaignItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CampaignItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CampaignItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CampaignItem.
     * @param {CampaignItemUpsertArgs} args - Arguments to update or create a CampaignItem.
     * @example
     * // Update or create a CampaignItem
     * const campaignItem = await prisma.campaignItem.upsert({
     *   create: {
     *     // ... data to create a CampaignItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CampaignItem we want to update
     *   }
     * })
     */
    upsert<T extends CampaignItemUpsertArgs>(args: SelectSubset<T, CampaignItemUpsertArgs<ExtArgs>>): Prisma__CampaignItemClient<$Result.GetResult<Prisma.$CampaignItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CampaignItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignItemCountArgs} args - Arguments to filter CampaignItems to count.
     * @example
     * // Count the number of CampaignItems
     * const count = await prisma.campaignItem.count({
     *   where: {
     *     // ... the filter for the CampaignItems we want to count
     *   }
     * })
    **/
    count<T extends CampaignItemCountArgs>(
      args?: Subset<T, CampaignItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CampaignItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CampaignItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CampaignItemAggregateArgs>(args: Subset<T, CampaignItemAggregateArgs>): Prisma.PrismaPromise<GetCampaignItemAggregateType<T>>

    /**
     * Group by CampaignItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CampaignItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CampaignItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CampaignItemGroupByArgs['orderBy'] }
        : { orderBy?: CampaignItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CampaignItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCampaignItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CampaignItem model
   */
  readonly fields: CampaignItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CampaignItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CampaignItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    campaign<T extends CampaignDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CampaignDefaultArgs<ExtArgs>>): Prisma__CampaignClient<$Result.GetResult<Prisma.$CampaignPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    item<T extends ItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ItemDefaultArgs<ExtArgs>>): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CampaignItem model
   */
  interface CampaignItemFieldRefs {
    readonly id: FieldRef<"CampaignItem", 'String'>
    readonly campaignId: FieldRef<"CampaignItem", 'String'>
    readonly itemId: FieldRef<"CampaignItem", 'String'>
    readonly createdAt: FieldRef<"CampaignItem", 'DateTime'>
    readonly updatedAt: FieldRef<"CampaignItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CampaignItem findUnique
   */
  export type CampaignItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignItem
     */
    select?: CampaignItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignItem
     */
    omit?: CampaignItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignItemInclude<ExtArgs> | null
    /**
     * Filter, which CampaignItem to fetch.
     */
    where: CampaignItemWhereUniqueInput
  }

  /**
   * CampaignItem findUniqueOrThrow
   */
  export type CampaignItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignItem
     */
    select?: CampaignItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignItem
     */
    omit?: CampaignItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignItemInclude<ExtArgs> | null
    /**
     * Filter, which CampaignItem to fetch.
     */
    where: CampaignItemWhereUniqueInput
  }

  /**
   * CampaignItem findFirst
   */
  export type CampaignItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignItem
     */
    select?: CampaignItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignItem
     */
    omit?: CampaignItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignItemInclude<ExtArgs> | null
    /**
     * Filter, which CampaignItem to fetch.
     */
    where?: CampaignItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignItems to fetch.
     */
    orderBy?: CampaignItemOrderByWithRelationInput | CampaignItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignItems.
     */
    cursor?: CampaignItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignItems.
     */
    distinct?: CampaignItemScalarFieldEnum | CampaignItemScalarFieldEnum[]
  }

  /**
   * CampaignItem findFirstOrThrow
   */
  export type CampaignItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignItem
     */
    select?: CampaignItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignItem
     */
    omit?: CampaignItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignItemInclude<ExtArgs> | null
    /**
     * Filter, which CampaignItem to fetch.
     */
    where?: CampaignItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignItems to fetch.
     */
    orderBy?: CampaignItemOrderByWithRelationInput | CampaignItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CampaignItems.
     */
    cursor?: CampaignItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CampaignItems.
     */
    distinct?: CampaignItemScalarFieldEnum | CampaignItemScalarFieldEnum[]
  }

  /**
   * CampaignItem findMany
   */
  export type CampaignItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignItem
     */
    select?: CampaignItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignItem
     */
    omit?: CampaignItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignItemInclude<ExtArgs> | null
    /**
     * Filter, which CampaignItems to fetch.
     */
    where?: CampaignItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CampaignItems to fetch.
     */
    orderBy?: CampaignItemOrderByWithRelationInput | CampaignItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CampaignItems.
     */
    cursor?: CampaignItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CampaignItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CampaignItems.
     */
    skip?: number
    distinct?: CampaignItemScalarFieldEnum | CampaignItemScalarFieldEnum[]
  }

  /**
   * CampaignItem create
   */
  export type CampaignItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignItem
     */
    select?: CampaignItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignItem
     */
    omit?: CampaignItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CampaignItem.
     */
    data: XOR<CampaignItemCreateInput, CampaignItemUncheckedCreateInput>
  }

  /**
   * CampaignItem createMany
   */
  export type CampaignItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CampaignItems.
     */
    data: CampaignItemCreateManyInput | CampaignItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CampaignItem createManyAndReturn
   */
  export type CampaignItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignItem
     */
    select?: CampaignItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignItem
     */
    omit?: CampaignItemOmit<ExtArgs> | null
    /**
     * The data used to create many CampaignItems.
     */
    data: CampaignItemCreateManyInput | CampaignItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignItem update
   */
  export type CampaignItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignItem
     */
    select?: CampaignItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignItem
     */
    omit?: CampaignItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CampaignItem.
     */
    data: XOR<CampaignItemUpdateInput, CampaignItemUncheckedUpdateInput>
    /**
     * Choose, which CampaignItem to update.
     */
    where: CampaignItemWhereUniqueInput
  }

  /**
   * CampaignItem updateMany
   */
  export type CampaignItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CampaignItems.
     */
    data: XOR<CampaignItemUpdateManyMutationInput, CampaignItemUncheckedUpdateManyInput>
    /**
     * Filter which CampaignItems to update
     */
    where?: CampaignItemWhereInput
    /**
     * Limit how many CampaignItems to update.
     */
    limit?: number
  }

  /**
   * CampaignItem updateManyAndReturn
   */
  export type CampaignItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignItem
     */
    select?: CampaignItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignItem
     */
    omit?: CampaignItemOmit<ExtArgs> | null
    /**
     * The data used to update CampaignItems.
     */
    data: XOR<CampaignItemUpdateManyMutationInput, CampaignItemUncheckedUpdateManyInput>
    /**
     * Filter which CampaignItems to update
     */
    where?: CampaignItemWhereInput
    /**
     * Limit how many CampaignItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CampaignItem upsert
   */
  export type CampaignItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignItem
     */
    select?: CampaignItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignItem
     */
    omit?: CampaignItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CampaignItem to update in case it exists.
     */
    where: CampaignItemWhereUniqueInput
    /**
     * In case the CampaignItem found by the `where` argument doesn't exist, create a new CampaignItem with this data.
     */
    create: XOR<CampaignItemCreateInput, CampaignItemUncheckedCreateInput>
    /**
     * In case the CampaignItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CampaignItemUpdateInput, CampaignItemUncheckedUpdateInput>
  }

  /**
   * CampaignItem delete
   */
  export type CampaignItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignItem
     */
    select?: CampaignItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignItem
     */
    omit?: CampaignItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignItemInclude<ExtArgs> | null
    /**
     * Filter which CampaignItem to delete.
     */
    where: CampaignItemWhereUniqueInput
  }

  /**
   * CampaignItem deleteMany
   */
  export type CampaignItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CampaignItems to delete
     */
    where?: CampaignItemWhereInput
    /**
     * Limit how many CampaignItems to delete.
     */
    limit?: number
  }

  /**
   * CampaignItem without action
   */
  export type CampaignItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CampaignItem
     */
    select?: CampaignItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CampaignItem
     */
    omit?: CampaignItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CampaignItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CampaignScalarFieldEnum: {
    id: 'id',
    name: 'name',
    theme: 'theme',
    tone: 'tone',
    homebrewAllowed: 'homebrewAllowed',
    magicCommonality: 'magicCommonality',
    geographicalScale: 'geographicalScale',
    civilizationState: 'civilizationState',
    commonLandscapes: 'commonLandscapes',
    technologyLevel: 'technologyLevel',
    roleOfReligion: 'roleOfReligion',
    religiousFiguresPerception: 'religiousFiguresPerception',
    majorConflictsThreats: 'majorConflictsThreats',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignScalarFieldEnum = (typeof CampaignScalarFieldEnum)[keyof typeof CampaignScalarFieldEnum]


  export const NPCScalarFieldEnum: {
    id: 'id',
    name: 'name',
    race: 'race',
    class: 'class',
    alignment: 'alignment',
    description: 'description',
    background: 'background',
    personality: 'personality',
    goals: 'goals',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NPCScalarFieldEnum = (typeof NPCScalarFieldEnum)[keyof typeof NPCScalarFieldEnum]


  export const CityScalarFieldEnum: {
    id: 'id',
    name: 'name',
    size: 'size',
    population: 'population',
    government: 'government',
    economy: 'economy',
    notableLocations: 'notableLocations',
    description: 'description',
    history: 'history',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const ItemScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    rarity: 'rarity',
    description: 'description',
    properties: 'properties',
    history: 'history',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const CampaignCityScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    cityId: 'cityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignCityScalarFieldEnum = (typeof CampaignCityScalarFieldEnum)[keyof typeof CampaignCityScalarFieldEnum]


  export const CampaignNPCScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    npcId: 'npcId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignNPCScalarFieldEnum = (typeof CampaignNPCScalarFieldEnum)[keyof typeof CampaignNPCScalarFieldEnum]


  export const CampaignItemScalarFieldEnum: {
    id: 'id',
    campaignId: 'campaignId',
    itemId: 'itemId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CampaignItemScalarFieldEnum = (typeof CampaignItemScalarFieldEnum)[keyof typeof CampaignItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type CampaignWhereInput = {
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    id?: StringFilter<"Campaign"> | string
    name?: StringFilter<"Campaign"> | string
    theme?: StringFilter<"Campaign"> | string
    tone?: JsonFilter<"Campaign">
    homebrewAllowed?: BoolFilter<"Campaign"> | boolean
    magicCommonality?: StringNullableFilter<"Campaign"> | string | null
    geographicalScale?: StringNullableFilter<"Campaign"> | string | null
    civilizationState?: StringNullableFilter<"Campaign"> | string | null
    commonLandscapes?: JsonFilter<"Campaign">
    technologyLevel?: StringNullableFilter<"Campaign"> | string | null
    roleOfReligion?: StringNullableFilter<"Campaign"> | string | null
    religiousFiguresPerception?: StringNullableFilter<"Campaign"> | string | null
    majorConflictsThreats?: StringNullableFilter<"Campaign"> | string | null
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    cities?: CampaignCityListRelationFilter
    npcs?: CampaignNPCListRelationFilter
    items?: CampaignItemListRelationFilter
  }

  export type CampaignOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    theme?: SortOrder
    tone?: SortOrder
    homebrewAllowed?: SortOrder
    magicCommonality?: SortOrderInput | SortOrder
    geographicalScale?: SortOrderInput | SortOrder
    civilizationState?: SortOrderInput | SortOrder
    commonLandscapes?: SortOrder
    technologyLevel?: SortOrderInput | SortOrder
    roleOfReligion?: SortOrderInput | SortOrder
    religiousFiguresPerception?: SortOrderInput | SortOrder
    majorConflictsThreats?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    cities?: CampaignCityOrderByRelationAggregateInput
    npcs?: CampaignNPCOrderByRelationAggregateInput
    items?: CampaignItemOrderByRelationAggregateInput
  }

  export type CampaignWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CampaignWhereInput | CampaignWhereInput[]
    OR?: CampaignWhereInput[]
    NOT?: CampaignWhereInput | CampaignWhereInput[]
    name?: StringFilter<"Campaign"> | string
    theme?: StringFilter<"Campaign"> | string
    tone?: JsonFilter<"Campaign">
    homebrewAllowed?: BoolFilter<"Campaign"> | boolean
    magicCommonality?: StringNullableFilter<"Campaign"> | string | null
    geographicalScale?: StringNullableFilter<"Campaign"> | string | null
    civilizationState?: StringNullableFilter<"Campaign"> | string | null
    commonLandscapes?: JsonFilter<"Campaign">
    technologyLevel?: StringNullableFilter<"Campaign"> | string | null
    roleOfReligion?: StringNullableFilter<"Campaign"> | string | null
    religiousFiguresPerception?: StringNullableFilter<"Campaign"> | string | null
    majorConflictsThreats?: StringNullableFilter<"Campaign"> | string | null
    createdAt?: DateTimeFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeFilter<"Campaign"> | Date | string
    cities?: CampaignCityListRelationFilter
    npcs?: CampaignNPCListRelationFilter
    items?: CampaignItemListRelationFilter
  }, "id">

  export type CampaignOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    theme?: SortOrder
    tone?: SortOrder
    homebrewAllowed?: SortOrder
    magicCommonality?: SortOrderInput | SortOrder
    geographicalScale?: SortOrderInput | SortOrder
    civilizationState?: SortOrderInput | SortOrder
    commonLandscapes?: SortOrder
    technologyLevel?: SortOrderInput | SortOrder
    roleOfReligion?: SortOrderInput | SortOrder
    religiousFiguresPerception?: SortOrderInput | SortOrder
    majorConflictsThreats?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaignCountOrderByAggregateInput
    _max?: CampaignMaxOrderByAggregateInput
    _min?: CampaignMinOrderByAggregateInput
  }

  export type CampaignScalarWhereWithAggregatesInput = {
    AND?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    OR?: CampaignScalarWhereWithAggregatesInput[]
    NOT?: CampaignScalarWhereWithAggregatesInput | CampaignScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Campaign"> | string
    name?: StringWithAggregatesFilter<"Campaign"> | string
    theme?: StringWithAggregatesFilter<"Campaign"> | string
    tone?: JsonWithAggregatesFilter<"Campaign">
    homebrewAllowed?: BoolWithAggregatesFilter<"Campaign"> | boolean
    magicCommonality?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    geographicalScale?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    civilizationState?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    commonLandscapes?: JsonWithAggregatesFilter<"Campaign">
    technologyLevel?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    roleOfReligion?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    religiousFiguresPerception?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    majorConflictsThreats?: StringNullableWithAggregatesFilter<"Campaign"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Campaign"> | Date | string
  }

  export type NPCWhereInput = {
    AND?: NPCWhereInput | NPCWhereInput[]
    OR?: NPCWhereInput[]
    NOT?: NPCWhereInput | NPCWhereInput[]
    id?: StringFilter<"NPC"> | string
    name?: StringFilter<"NPC"> | string
    race?: StringFilter<"NPC"> | string
    class?: StringNullableFilter<"NPC"> | string | null
    alignment?: StringFilter<"NPC"> | string
    description?: StringFilter<"NPC"> | string
    background?: StringFilter<"NPC"> | string
    personality?: StringFilter<"NPC"> | string
    goals?: JsonFilter<"NPC">
    createdAt?: DateTimeFilter<"NPC"> | Date | string
    updatedAt?: DateTimeFilter<"NPC"> | Date | string
    campaigns?: CampaignNPCListRelationFilter
  }

  export type NPCOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    race?: SortOrder
    class?: SortOrderInput | SortOrder
    alignment?: SortOrder
    description?: SortOrder
    background?: SortOrder
    personality?: SortOrder
    goals?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaigns?: CampaignNPCOrderByRelationAggregateInput
  }

  export type NPCWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NPCWhereInput | NPCWhereInput[]
    OR?: NPCWhereInput[]
    NOT?: NPCWhereInput | NPCWhereInput[]
    name?: StringFilter<"NPC"> | string
    race?: StringFilter<"NPC"> | string
    class?: StringNullableFilter<"NPC"> | string | null
    alignment?: StringFilter<"NPC"> | string
    description?: StringFilter<"NPC"> | string
    background?: StringFilter<"NPC"> | string
    personality?: StringFilter<"NPC"> | string
    goals?: JsonFilter<"NPC">
    createdAt?: DateTimeFilter<"NPC"> | Date | string
    updatedAt?: DateTimeFilter<"NPC"> | Date | string
    campaigns?: CampaignNPCListRelationFilter
  }, "id">

  export type NPCOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    race?: SortOrder
    class?: SortOrderInput | SortOrder
    alignment?: SortOrder
    description?: SortOrder
    background?: SortOrder
    personality?: SortOrder
    goals?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NPCCountOrderByAggregateInput
    _max?: NPCMaxOrderByAggregateInput
    _min?: NPCMinOrderByAggregateInput
  }

  export type NPCScalarWhereWithAggregatesInput = {
    AND?: NPCScalarWhereWithAggregatesInput | NPCScalarWhereWithAggregatesInput[]
    OR?: NPCScalarWhereWithAggregatesInput[]
    NOT?: NPCScalarWhereWithAggregatesInput | NPCScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NPC"> | string
    name?: StringWithAggregatesFilter<"NPC"> | string
    race?: StringWithAggregatesFilter<"NPC"> | string
    class?: StringNullableWithAggregatesFilter<"NPC"> | string | null
    alignment?: StringWithAggregatesFilter<"NPC"> | string
    description?: StringWithAggregatesFilter<"NPC"> | string
    background?: StringWithAggregatesFilter<"NPC"> | string
    personality?: StringWithAggregatesFilter<"NPC"> | string
    goals?: JsonWithAggregatesFilter<"NPC">
    createdAt?: DateTimeWithAggregatesFilter<"NPC"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"NPC"> | Date | string
  }

  export type CityWhereInput = {
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    id?: StringFilter<"City"> | string
    name?: StringFilter<"City"> | string
    size?: StringFilter<"City"> | string
    population?: StringFilter<"City"> | string
    government?: StringFilter<"City"> | string
    economy?: StringFilter<"City"> | string
    notableLocations?: JsonFilter<"City">
    description?: StringFilter<"City"> | string
    history?: StringFilter<"City"> | string
    createdAt?: DateTimeFilter<"City"> | Date | string
    updatedAt?: DateTimeFilter<"City"> | Date | string
    campaigns?: CampaignCityListRelationFilter
  }

  export type CityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    population?: SortOrder
    government?: SortOrder
    economy?: SortOrder
    notableLocations?: SortOrder
    description?: SortOrder
    history?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaigns?: CampaignCityOrderByRelationAggregateInput
  }

  export type CityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    name?: StringFilter<"City"> | string
    size?: StringFilter<"City"> | string
    population?: StringFilter<"City"> | string
    government?: StringFilter<"City"> | string
    economy?: StringFilter<"City"> | string
    notableLocations?: JsonFilter<"City">
    description?: StringFilter<"City"> | string
    history?: StringFilter<"City"> | string
    createdAt?: DateTimeFilter<"City"> | Date | string
    updatedAt?: DateTimeFilter<"City"> | Date | string
    campaigns?: CampaignCityListRelationFilter
  }, "id">

  export type CityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    population?: SortOrder
    government?: SortOrder
    economy?: SortOrder
    notableLocations?: SortOrder
    description?: SortOrder
    history?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CityCountOrderByAggregateInput
    _max?: CityMaxOrderByAggregateInput
    _min?: CityMinOrderByAggregateInput
  }

  export type CityScalarWhereWithAggregatesInput = {
    AND?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    OR?: CityScalarWhereWithAggregatesInput[]
    NOT?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"City"> | string
    name?: StringWithAggregatesFilter<"City"> | string
    size?: StringWithAggregatesFilter<"City"> | string
    population?: StringWithAggregatesFilter<"City"> | string
    government?: StringWithAggregatesFilter<"City"> | string
    economy?: StringWithAggregatesFilter<"City"> | string
    notableLocations?: JsonWithAggregatesFilter<"City">
    description?: StringWithAggregatesFilter<"City"> | string
    history?: StringWithAggregatesFilter<"City"> | string
    createdAt?: DateTimeWithAggregatesFilter<"City"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"City"> | Date | string
  }

  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: StringFilter<"Item"> | string
    name?: StringFilter<"Item"> | string
    type?: StringFilter<"Item"> | string
    rarity?: StringFilter<"Item"> | string
    description?: StringFilter<"Item"> | string
    properties?: JsonFilter<"Item">
    history?: StringNullableFilter<"Item"> | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    campaigns?: CampaignItemListRelationFilter
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    rarity?: SortOrder
    description?: SortOrder
    properties?: SortOrder
    history?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaigns?: CampaignItemOrderByRelationAggregateInput
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
    type?: StringFilter<"Item"> | string
    rarity?: StringFilter<"Item"> | string
    description?: StringFilter<"Item"> | string
    properties?: JsonFilter<"Item">
    history?: StringNullableFilter<"Item"> | string | null
    createdAt?: DateTimeFilter<"Item"> | Date | string
    updatedAt?: DateTimeFilter<"Item"> | Date | string
    campaigns?: CampaignItemListRelationFilter
  }, "id">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    rarity?: SortOrder
    description?: SortOrder
    properties?: SortOrder
    history?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Item"> | string
    name?: StringWithAggregatesFilter<"Item"> | string
    type?: StringWithAggregatesFilter<"Item"> | string
    rarity?: StringWithAggregatesFilter<"Item"> | string
    description?: StringWithAggregatesFilter<"Item"> | string
    properties?: JsonWithAggregatesFilter<"Item">
    history?: StringNullableWithAggregatesFilter<"Item"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Item"> | Date | string
  }

  export type CampaignCityWhereInput = {
    AND?: CampaignCityWhereInput | CampaignCityWhereInput[]
    OR?: CampaignCityWhereInput[]
    NOT?: CampaignCityWhereInput | CampaignCityWhereInput[]
    id?: StringFilter<"CampaignCity"> | string
    campaignId?: StringFilter<"CampaignCity"> | string
    cityId?: StringFilter<"CampaignCity"> | string
    createdAt?: DateTimeFilter<"CampaignCity"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignCity"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
  }

  export type CampaignCityOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
    city?: CityOrderByWithRelationInput
  }

  export type CampaignCityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    campaignId_cityId?: CampaignCityCampaignIdCityIdCompoundUniqueInput
    AND?: CampaignCityWhereInput | CampaignCityWhereInput[]
    OR?: CampaignCityWhereInput[]
    NOT?: CampaignCityWhereInput | CampaignCityWhereInput[]
    campaignId?: StringFilter<"CampaignCity"> | string
    cityId?: StringFilter<"CampaignCity"> | string
    createdAt?: DateTimeFilter<"CampaignCity"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignCity"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
  }, "id" | "campaignId_cityId">

  export type CampaignCityOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaignCityCountOrderByAggregateInput
    _max?: CampaignCityMaxOrderByAggregateInput
    _min?: CampaignCityMinOrderByAggregateInput
  }

  export type CampaignCityScalarWhereWithAggregatesInput = {
    AND?: CampaignCityScalarWhereWithAggregatesInput | CampaignCityScalarWhereWithAggregatesInput[]
    OR?: CampaignCityScalarWhereWithAggregatesInput[]
    NOT?: CampaignCityScalarWhereWithAggregatesInput | CampaignCityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CampaignCity"> | string
    campaignId?: StringWithAggregatesFilter<"CampaignCity"> | string
    cityId?: StringWithAggregatesFilter<"CampaignCity"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CampaignCity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CampaignCity"> | Date | string
  }

  export type CampaignNPCWhereInput = {
    AND?: CampaignNPCWhereInput | CampaignNPCWhereInput[]
    OR?: CampaignNPCWhereInput[]
    NOT?: CampaignNPCWhereInput | CampaignNPCWhereInput[]
    id?: StringFilter<"CampaignNPC"> | string
    campaignId?: StringFilter<"CampaignNPC"> | string
    npcId?: StringFilter<"CampaignNPC"> | string
    createdAt?: DateTimeFilter<"CampaignNPC"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignNPC"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    npc?: XOR<NPCScalarRelationFilter, NPCWhereInput>
  }

  export type CampaignNPCOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    npcId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
    npc?: NPCOrderByWithRelationInput
  }

  export type CampaignNPCWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    campaignId_npcId?: CampaignNPCCampaignIdNpcIdCompoundUniqueInput
    AND?: CampaignNPCWhereInput | CampaignNPCWhereInput[]
    OR?: CampaignNPCWhereInput[]
    NOT?: CampaignNPCWhereInput | CampaignNPCWhereInput[]
    campaignId?: StringFilter<"CampaignNPC"> | string
    npcId?: StringFilter<"CampaignNPC"> | string
    createdAt?: DateTimeFilter<"CampaignNPC"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignNPC"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    npc?: XOR<NPCScalarRelationFilter, NPCWhereInput>
  }, "id" | "campaignId_npcId">

  export type CampaignNPCOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    npcId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaignNPCCountOrderByAggregateInput
    _max?: CampaignNPCMaxOrderByAggregateInput
    _min?: CampaignNPCMinOrderByAggregateInput
  }

  export type CampaignNPCScalarWhereWithAggregatesInput = {
    AND?: CampaignNPCScalarWhereWithAggregatesInput | CampaignNPCScalarWhereWithAggregatesInput[]
    OR?: CampaignNPCScalarWhereWithAggregatesInput[]
    NOT?: CampaignNPCScalarWhereWithAggregatesInput | CampaignNPCScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CampaignNPC"> | string
    campaignId?: StringWithAggregatesFilter<"CampaignNPC"> | string
    npcId?: StringWithAggregatesFilter<"CampaignNPC"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CampaignNPC"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CampaignNPC"> | Date | string
  }

  export type CampaignItemWhereInput = {
    AND?: CampaignItemWhereInput | CampaignItemWhereInput[]
    OR?: CampaignItemWhereInput[]
    NOT?: CampaignItemWhereInput | CampaignItemWhereInput[]
    id?: StringFilter<"CampaignItem"> | string
    campaignId?: StringFilter<"CampaignItem"> | string
    itemId?: StringFilter<"CampaignItem"> | string
    createdAt?: DateTimeFilter<"CampaignItem"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignItem"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }

  export type CampaignItemOrderByWithRelationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    campaign?: CampaignOrderByWithRelationInput
    item?: ItemOrderByWithRelationInput
  }

  export type CampaignItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    campaignId_itemId?: CampaignItemCampaignIdItemIdCompoundUniqueInput
    AND?: CampaignItemWhereInput | CampaignItemWhereInput[]
    OR?: CampaignItemWhereInput[]
    NOT?: CampaignItemWhereInput | CampaignItemWhereInput[]
    campaignId?: StringFilter<"CampaignItem"> | string
    itemId?: StringFilter<"CampaignItem"> | string
    createdAt?: DateTimeFilter<"CampaignItem"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignItem"> | Date | string
    campaign?: XOR<CampaignScalarRelationFilter, CampaignWhereInput>
    item?: XOR<ItemScalarRelationFilter, ItemWhereInput>
  }, "id" | "campaignId_itemId">

  export type CampaignItemOrderByWithAggregationInput = {
    id?: SortOrder
    campaignId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CampaignItemCountOrderByAggregateInput
    _max?: CampaignItemMaxOrderByAggregateInput
    _min?: CampaignItemMinOrderByAggregateInput
  }

  export type CampaignItemScalarWhereWithAggregatesInput = {
    AND?: CampaignItemScalarWhereWithAggregatesInput | CampaignItemScalarWhereWithAggregatesInput[]
    OR?: CampaignItemScalarWhereWithAggregatesInput[]
    NOT?: CampaignItemScalarWhereWithAggregatesInput | CampaignItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CampaignItem"> | string
    campaignId?: StringWithAggregatesFilter<"CampaignItem"> | string
    itemId?: StringWithAggregatesFilter<"CampaignItem"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CampaignItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CampaignItem"> | Date | string
  }

  export type CampaignCreateInput = {
    id?: string
    name: string
    theme: string
    tone: JsonNullValueInput | InputJsonValue
    homebrewAllowed: boolean
    magicCommonality?: string | null
    geographicalScale?: string | null
    civilizationState?: string | null
    commonLandscapes: JsonNullValueInput | InputJsonValue
    technologyLevel?: string | null
    roleOfReligion?: string | null
    religiousFiguresPerception?: string | null
    majorConflictsThreats?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cities?: CampaignCityCreateNestedManyWithoutCampaignInput
    npcs?: CampaignNPCCreateNestedManyWithoutCampaignInput
    items?: CampaignItemCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateInput = {
    id?: string
    name: string
    theme: string
    tone: JsonNullValueInput | InputJsonValue
    homebrewAllowed: boolean
    magicCommonality?: string | null
    geographicalScale?: string | null
    civilizationState?: string | null
    commonLandscapes: JsonNullValueInput | InputJsonValue
    technologyLevel?: string | null
    roleOfReligion?: string | null
    religiousFiguresPerception?: string | null
    majorConflictsThreats?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cities?: CampaignCityUncheckedCreateNestedManyWithoutCampaignInput
    npcs?: CampaignNPCUncheckedCreateNestedManyWithoutCampaignInput
    items?: CampaignItemUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    tone?: JsonNullValueInput | InputJsonValue
    homebrewAllowed?: BoolFieldUpdateOperationsInput | boolean
    magicCommonality?: NullableStringFieldUpdateOperationsInput | string | null
    geographicalScale?: NullableStringFieldUpdateOperationsInput | string | null
    civilizationState?: NullableStringFieldUpdateOperationsInput | string | null
    commonLandscapes?: JsonNullValueInput | InputJsonValue
    technologyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    roleOfReligion?: NullableStringFieldUpdateOperationsInput | string | null
    religiousFiguresPerception?: NullableStringFieldUpdateOperationsInput | string | null
    majorConflictsThreats?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cities?: CampaignCityUpdateManyWithoutCampaignNestedInput
    npcs?: CampaignNPCUpdateManyWithoutCampaignNestedInput
    items?: CampaignItemUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    tone?: JsonNullValueInput | InputJsonValue
    homebrewAllowed?: BoolFieldUpdateOperationsInput | boolean
    magicCommonality?: NullableStringFieldUpdateOperationsInput | string | null
    geographicalScale?: NullableStringFieldUpdateOperationsInput | string | null
    civilizationState?: NullableStringFieldUpdateOperationsInput | string | null
    commonLandscapes?: JsonNullValueInput | InputJsonValue
    technologyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    roleOfReligion?: NullableStringFieldUpdateOperationsInput | string | null
    religiousFiguresPerception?: NullableStringFieldUpdateOperationsInput | string | null
    majorConflictsThreats?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cities?: CampaignCityUncheckedUpdateManyWithoutCampaignNestedInput
    npcs?: CampaignNPCUncheckedUpdateManyWithoutCampaignNestedInput
    items?: CampaignItemUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignCreateManyInput = {
    id?: string
    name: string
    theme: string
    tone: JsonNullValueInput | InputJsonValue
    homebrewAllowed: boolean
    magicCommonality?: string | null
    geographicalScale?: string | null
    civilizationState?: string | null
    commonLandscapes: JsonNullValueInput | InputJsonValue
    technologyLevel?: string | null
    roleOfReligion?: string | null
    religiousFiguresPerception?: string | null
    majorConflictsThreats?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    tone?: JsonNullValueInput | InputJsonValue
    homebrewAllowed?: BoolFieldUpdateOperationsInput | boolean
    magicCommonality?: NullableStringFieldUpdateOperationsInput | string | null
    geographicalScale?: NullableStringFieldUpdateOperationsInput | string | null
    civilizationState?: NullableStringFieldUpdateOperationsInput | string | null
    commonLandscapes?: JsonNullValueInput | InputJsonValue
    technologyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    roleOfReligion?: NullableStringFieldUpdateOperationsInput | string | null
    religiousFiguresPerception?: NullableStringFieldUpdateOperationsInput | string | null
    majorConflictsThreats?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    tone?: JsonNullValueInput | InputJsonValue
    homebrewAllowed?: BoolFieldUpdateOperationsInput | boolean
    magicCommonality?: NullableStringFieldUpdateOperationsInput | string | null
    geographicalScale?: NullableStringFieldUpdateOperationsInput | string | null
    civilizationState?: NullableStringFieldUpdateOperationsInput | string | null
    commonLandscapes?: JsonNullValueInput | InputJsonValue
    technologyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    roleOfReligion?: NullableStringFieldUpdateOperationsInput | string | null
    religiousFiguresPerception?: NullableStringFieldUpdateOperationsInput | string | null
    majorConflictsThreats?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NPCCreateInput = {
    id?: string
    name: string
    race: string
    class?: string | null
    alignment: string
    description: string
    background: string
    personality: string
    goals: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignNPCCreateNestedManyWithoutNpcInput
  }

  export type NPCUncheckedCreateInput = {
    id?: string
    name: string
    race: string
    class?: string | null
    alignment: string
    description: string
    background: string
    personality: string
    goals: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignNPCUncheckedCreateNestedManyWithoutNpcInput
  }

  export type NPCUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    alignment?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    goals?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignNPCUpdateManyWithoutNpcNestedInput
  }

  export type NPCUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    alignment?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    goals?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignNPCUncheckedUpdateManyWithoutNpcNestedInput
  }

  export type NPCCreateManyInput = {
    id?: string
    name: string
    race: string
    class?: string | null
    alignment: string
    description: string
    background: string
    personality: string
    goals: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NPCUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    alignment?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    goals?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NPCUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    alignment?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    goals?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityCreateInput = {
    id?: string
    name: string
    size: string
    population: string
    government: string
    economy: string
    notableLocations: JsonNullValueInput | InputJsonValue
    description: string
    history: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignCityCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateInput = {
    id?: string
    name: string
    size: string
    population: string
    government: string
    economy: string
    notableLocations: JsonNullValueInput | InputJsonValue
    description: string
    history: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignCityUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    population?: StringFieldUpdateOperationsInput | string
    government?: StringFieldUpdateOperationsInput | string
    economy?: StringFieldUpdateOperationsInput | string
    notableLocations?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignCityUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    population?: StringFieldUpdateOperationsInput | string
    government?: StringFieldUpdateOperationsInput | string
    economy?: StringFieldUpdateOperationsInput | string
    notableLocations?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignCityUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityCreateManyInput = {
    id?: string
    name: string
    size: string
    population: string
    government: string
    economy: string
    notableLocations: JsonNullValueInput | InputJsonValue
    description: string
    history: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    population?: StringFieldUpdateOperationsInput | string
    government?: StringFieldUpdateOperationsInput | string
    economy?: StringFieldUpdateOperationsInput | string
    notableLocations?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    population?: StringFieldUpdateOperationsInput | string
    government?: StringFieldUpdateOperationsInput | string
    economy?: StringFieldUpdateOperationsInput | string
    notableLocations?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemCreateInput = {
    id?: string
    name: string
    type: string
    rarity: string
    description: string
    properties: JsonNullValueInput | InputJsonValue
    history?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignItemCreateNestedManyWithoutItemInput
  }

  export type ItemUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    rarity: string
    description: string
    properties: JsonNullValueInput | InputJsonValue
    history?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    campaigns?: CampaignItemUncheckedCreateNestedManyWithoutItemInput
  }

  export type ItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    properties?: JsonNullValueInput | InputJsonValue
    history?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignItemUpdateManyWithoutItemNestedInput
  }

  export type ItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    properties?: JsonNullValueInput | InputJsonValue
    history?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaigns?: CampaignItemUncheckedUpdateManyWithoutItemNestedInput
  }

  export type ItemCreateManyInput = {
    id?: string
    name: string
    type: string
    rarity: string
    description: string
    properties: JsonNullValueInput | InputJsonValue
    history?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    properties?: JsonNullValueInput | InputJsonValue
    history?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    properties?: JsonNullValueInput | InputJsonValue
    history?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCityCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutCitiesInput
    city: CityCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignCityUncheckedCreateInput = {
    id?: string
    campaignId: string
    cityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutCitiesNestedInput
    city?: CityUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type CampaignCityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCityCreateManyInput = {
    id?: string
    campaignId: string
    cityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignNPCCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutNpcsInput
    npc: NPCCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignNPCUncheckedCreateInput = {
    id?: string
    campaignId: string
    npcId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignNPCUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutNpcsNestedInput
    npc?: NPCUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type CampaignNPCUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    npcId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignNPCCreateManyInput = {
    id?: string
    campaignId: string
    npcId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignNPCUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignNPCUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    npcId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignItemCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutItemsInput
    item: ItemCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignItemUncheckedCreateInput = {
    id?: string
    campaignId: string
    itemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutItemsNestedInput
    item?: ItemUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type CampaignItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignItemCreateManyInput = {
    id?: string
    campaignId: string
    itemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type CampaignCityListRelationFilter = {
    every?: CampaignCityWhereInput
    some?: CampaignCityWhereInput
    none?: CampaignCityWhereInput
  }

  export type CampaignNPCListRelationFilter = {
    every?: CampaignNPCWhereInput
    some?: CampaignNPCWhereInput
    none?: CampaignNPCWhereInput
  }

  export type CampaignItemListRelationFilter = {
    every?: CampaignItemWhereInput
    some?: CampaignItemWhereInput
    none?: CampaignItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type CampaignCityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignNPCOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CampaignCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    theme?: SortOrder
    tone?: SortOrder
    homebrewAllowed?: SortOrder
    magicCommonality?: SortOrder
    geographicalScale?: SortOrder
    civilizationState?: SortOrder
    commonLandscapes?: SortOrder
    technologyLevel?: SortOrder
    roleOfReligion?: SortOrder
    religiousFiguresPerception?: SortOrder
    majorConflictsThreats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    theme?: SortOrder
    homebrewAllowed?: SortOrder
    magicCommonality?: SortOrder
    geographicalScale?: SortOrder
    civilizationState?: SortOrder
    technologyLevel?: SortOrder
    roleOfReligion?: SortOrder
    religiousFiguresPerception?: SortOrder
    majorConflictsThreats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    theme?: SortOrder
    homebrewAllowed?: SortOrder
    magicCommonality?: SortOrder
    geographicalScale?: SortOrder
    civilizationState?: SortOrder
    technologyLevel?: SortOrder
    roleOfReligion?: SortOrder
    religiousFiguresPerception?: SortOrder
    majorConflictsThreats?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NPCCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    race?: SortOrder
    class?: SortOrder
    alignment?: SortOrder
    description?: SortOrder
    background?: SortOrder
    personality?: SortOrder
    goals?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NPCMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    race?: SortOrder
    class?: SortOrder
    alignment?: SortOrder
    description?: SortOrder
    background?: SortOrder
    personality?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NPCMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    race?: SortOrder
    class?: SortOrder
    alignment?: SortOrder
    description?: SortOrder
    background?: SortOrder
    personality?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    population?: SortOrder
    government?: SortOrder
    economy?: SortOrder
    notableLocations?: SortOrder
    description?: SortOrder
    history?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    population?: SortOrder
    government?: SortOrder
    economy?: SortOrder
    description?: SortOrder
    history?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    size?: SortOrder
    population?: SortOrder
    government?: SortOrder
    economy?: SortOrder
    description?: SortOrder
    history?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    rarity?: SortOrder
    description?: SortOrder
    properties?: SortOrder
    history?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    rarity?: SortOrder
    description?: SortOrder
    history?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    rarity?: SortOrder
    description?: SortOrder
    history?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignScalarRelationFilter = {
    is?: CampaignWhereInput
    isNot?: CampaignWhereInput
  }

  export type CityScalarRelationFilter = {
    is?: CityWhereInput
    isNot?: CityWhereInput
  }

  export type CampaignCityCampaignIdCityIdCompoundUniqueInput = {
    campaignId: string
    cityId: string
  }

  export type CampaignCityCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignCityMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignCityMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    cityId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NPCScalarRelationFilter = {
    is?: NPCWhereInput
    isNot?: NPCWhereInput
  }

  export type CampaignNPCCampaignIdNpcIdCompoundUniqueInput = {
    campaignId: string
    npcId: string
  }

  export type CampaignNPCCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    npcId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignNPCMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    npcId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignNPCMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    npcId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ItemScalarRelationFilter = {
    is?: ItemWhereInput
    isNot?: ItemWhereInput
  }

  export type CampaignItemCampaignIdItemIdCompoundUniqueInput = {
    campaignId: string
    itemId: string
  }

  export type CampaignItemCountOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignItemMaxOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignItemMinOrderByAggregateInput = {
    id?: SortOrder
    campaignId?: SortOrder
    itemId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CampaignCityCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CampaignCityCreateWithoutCampaignInput, CampaignCityUncheckedCreateWithoutCampaignInput> | CampaignCityCreateWithoutCampaignInput[] | CampaignCityUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignCityCreateOrConnectWithoutCampaignInput | CampaignCityCreateOrConnectWithoutCampaignInput[]
    createMany?: CampaignCityCreateManyCampaignInputEnvelope
    connect?: CampaignCityWhereUniqueInput | CampaignCityWhereUniqueInput[]
  }

  export type CampaignNPCCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CampaignNPCCreateWithoutCampaignInput, CampaignNPCUncheckedCreateWithoutCampaignInput> | CampaignNPCCreateWithoutCampaignInput[] | CampaignNPCUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignNPCCreateOrConnectWithoutCampaignInput | CampaignNPCCreateOrConnectWithoutCampaignInput[]
    createMany?: CampaignNPCCreateManyCampaignInputEnvelope
    connect?: CampaignNPCWhereUniqueInput | CampaignNPCWhereUniqueInput[]
  }

  export type CampaignItemCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CampaignItemCreateWithoutCampaignInput, CampaignItemUncheckedCreateWithoutCampaignInput> | CampaignItemCreateWithoutCampaignInput[] | CampaignItemUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignItemCreateOrConnectWithoutCampaignInput | CampaignItemCreateOrConnectWithoutCampaignInput[]
    createMany?: CampaignItemCreateManyCampaignInputEnvelope
    connect?: CampaignItemWhereUniqueInput | CampaignItemWhereUniqueInput[]
  }

  export type CampaignCityUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CampaignCityCreateWithoutCampaignInput, CampaignCityUncheckedCreateWithoutCampaignInput> | CampaignCityCreateWithoutCampaignInput[] | CampaignCityUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignCityCreateOrConnectWithoutCampaignInput | CampaignCityCreateOrConnectWithoutCampaignInput[]
    createMany?: CampaignCityCreateManyCampaignInputEnvelope
    connect?: CampaignCityWhereUniqueInput | CampaignCityWhereUniqueInput[]
  }

  export type CampaignNPCUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CampaignNPCCreateWithoutCampaignInput, CampaignNPCUncheckedCreateWithoutCampaignInput> | CampaignNPCCreateWithoutCampaignInput[] | CampaignNPCUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignNPCCreateOrConnectWithoutCampaignInput | CampaignNPCCreateOrConnectWithoutCampaignInput[]
    createMany?: CampaignNPCCreateManyCampaignInputEnvelope
    connect?: CampaignNPCWhereUniqueInput | CampaignNPCWhereUniqueInput[]
  }

  export type CampaignItemUncheckedCreateNestedManyWithoutCampaignInput = {
    create?: XOR<CampaignItemCreateWithoutCampaignInput, CampaignItemUncheckedCreateWithoutCampaignInput> | CampaignItemCreateWithoutCampaignInput[] | CampaignItemUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignItemCreateOrConnectWithoutCampaignInput | CampaignItemCreateOrConnectWithoutCampaignInput[]
    createMany?: CampaignItemCreateManyCampaignInputEnvelope
    connect?: CampaignItemWhereUniqueInput | CampaignItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type CampaignCityUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CampaignCityCreateWithoutCampaignInput, CampaignCityUncheckedCreateWithoutCampaignInput> | CampaignCityCreateWithoutCampaignInput[] | CampaignCityUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignCityCreateOrConnectWithoutCampaignInput | CampaignCityCreateOrConnectWithoutCampaignInput[]
    upsert?: CampaignCityUpsertWithWhereUniqueWithoutCampaignInput | CampaignCityUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CampaignCityCreateManyCampaignInputEnvelope
    set?: CampaignCityWhereUniqueInput | CampaignCityWhereUniqueInput[]
    disconnect?: CampaignCityWhereUniqueInput | CampaignCityWhereUniqueInput[]
    delete?: CampaignCityWhereUniqueInput | CampaignCityWhereUniqueInput[]
    connect?: CampaignCityWhereUniqueInput | CampaignCityWhereUniqueInput[]
    update?: CampaignCityUpdateWithWhereUniqueWithoutCampaignInput | CampaignCityUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CampaignCityUpdateManyWithWhereWithoutCampaignInput | CampaignCityUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CampaignCityScalarWhereInput | CampaignCityScalarWhereInput[]
  }

  export type CampaignNPCUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CampaignNPCCreateWithoutCampaignInput, CampaignNPCUncheckedCreateWithoutCampaignInput> | CampaignNPCCreateWithoutCampaignInput[] | CampaignNPCUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignNPCCreateOrConnectWithoutCampaignInput | CampaignNPCCreateOrConnectWithoutCampaignInput[]
    upsert?: CampaignNPCUpsertWithWhereUniqueWithoutCampaignInput | CampaignNPCUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CampaignNPCCreateManyCampaignInputEnvelope
    set?: CampaignNPCWhereUniqueInput | CampaignNPCWhereUniqueInput[]
    disconnect?: CampaignNPCWhereUniqueInput | CampaignNPCWhereUniqueInput[]
    delete?: CampaignNPCWhereUniqueInput | CampaignNPCWhereUniqueInput[]
    connect?: CampaignNPCWhereUniqueInput | CampaignNPCWhereUniqueInput[]
    update?: CampaignNPCUpdateWithWhereUniqueWithoutCampaignInput | CampaignNPCUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CampaignNPCUpdateManyWithWhereWithoutCampaignInput | CampaignNPCUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CampaignNPCScalarWhereInput | CampaignNPCScalarWhereInput[]
  }

  export type CampaignItemUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CampaignItemCreateWithoutCampaignInput, CampaignItemUncheckedCreateWithoutCampaignInput> | CampaignItemCreateWithoutCampaignInput[] | CampaignItemUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignItemCreateOrConnectWithoutCampaignInput | CampaignItemCreateOrConnectWithoutCampaignInput[]
    upsert?: CampaignItemUpsertWithWhereUniqueWithoutCampaignInput | CampaignItemUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CampaignItemCreateManyCampaignInputEnvelope
    set?: CampaignItemWhereUniqueInput | CampaignItemWhereUniqueInput[]
    disconnect?: CampaignItemWhereUniqueInput | CampaignItemWhereUniqueInput[]
    delete?: CampaignItemWhereUniqueInput | CampaignItemWhereUniqueInput[]
    connect?: CampaignItemWhereUniqueInput | CampaignItemWhereUniqueInput[]
    update?: CampaignItemUpdateWithWhereUniqueWithoutCampaignInput | CampaignItemUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CampaignItemUpdateManyWithWhereWithoutCampaignInput | CampaignItemUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CampaignItemScalarWhereInput | CampaignItemScalarWhereInput[]
  }

  export type CampaignCityUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CampaignCityCreateWithoutCampaignInput, CampaignCityUncheckedCreateWithoutCampaignInput> | CampaignCityCreateWithoutCampaignInput[] | CampaignCityUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignCityCreateOrConnectWithoutCampaignInput | CampaignCityCreateOrConnectWithoutCampaignInput[]
    upsert?: CampaignCityUpsertWithWhereUniqueWithoutCampaignInput | CampaignCityUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CampaignCityCreateManyCampaignInputEnvelope
    set?: CampaignCityWhereUniqueInput | CampaignCityWhereUniqueInput[]
    disconnect?: CampaignCityWhereUniqueInput | CampaignCityWhereUniqueInput[]
    delete?: CampaignCityWhereUniqueInput | CampaignCityWhereUniqueInput[]
    connect?: CampaignCityWhereUniqueInput | CampaignCityWhereUniqueInput[]
    update?: CampaignCityUpdateWithWhereUniqueWithoutCampaignInput | CampaignCityUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CampaignCityUpdateManyWithWhereWithoutCampaignInput | CampaignCityUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CampaignCityScalarWhereInput | CampaignCityScalarWhereInput[]
  }

  export type CampaignNPCUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CampaignNPCCreateWithoutCampaignInput, CampaignNPCUncheckedCreateWithoutCampaignInput> | CampaignNPCCreateWithoutCampaignInput[] | CampaignNPCUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignNPCCreateOrConnectWithoutCampaignInput | CampaignNPCCreateOrConnectWithoutCampaignInput[]
    upsert?: CampaignNPCUpsertWithWhereUniqueWithoutCampaignInput | CampaignNPCUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CampaignNPCCreateManyCampaignInputEnvelope
    set?: CampaignNPCWhereUniqueInput | CampaignNPCWhereUniqueInput[]
    disconnect?: CampaignNPCWhereUniqueInput | CampaignNPCWhereUniqueInput[]
    delete?: CampaignNPCWhereUniqueInput | CampaignNPCWhereUniqueInput[]
    connect?: CampaignNPCWhereUniqueInput | CampaignNPCWhereUniqueInput[]
    update?: CampaignNPCUpdateWithWhereUniqueWithoutCampaignInput | CampaignNPCUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CampaignNPCUpdateManyWithWhereWithoutCampaignInput | CampaignNPCUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CampaignNPCScalarWhereInput | CampaignNPCScalarWhereInput[]
  }

  export type CampaignItemUncheckedUpdateManyWithoutCampaignNestedInput = {
    create?: XOR<CampaignItemCreateWithoutCampaignInput, CampaignItemUncheckedCreateWithoutCampaignInput> | CampaignItemCreateWithoutCampaignInput[] | CampaignItemUncheckedCreateWithoutCampaignInput[]
    connectOrCreate?: CampaignItemCreateOrConnectWithoutCampaignInput | CampaignItemCreateOrConnectWithoutCampaignInput[]
    upsert?: CampaignItemUpsertWithWhereUniqueWithoutCampaignInput | CampaignItemUpsertWithWhereUniqueWithoutCampaignInput[]
    createMany?: CampaignItemCreateManyCampaignInputEnvelope
    set?: CampaignItemWhereUniqueInput | CampaignItemWhereUniqueInput[]
    disconnect?: CampaignItemWhereUniqueInput | CampaignItemWhereUniqueInput[]
    delete?: CampaignItemWhereUniqueInput | CampaignItemWhereUniqueInput[]
    connect?: CampaignItemWhereUniqueInput | CampaignItemWhereUniqueInput[]
    update?: CampaignItemUpdateWithWhereUniqueWithoutCampaignInput | CampaignItemUpdateWithWhereUniqueWithoutCampaignInput[]
    updateMany?: CampaignItemUpdateManyWithWhereWithoutCampaignInput | CampaignItemUpdateManyWithWhereWithoutCampaignInput[]
    deleteMany?: CampaignItemScalarWhereInput | CampaignItemScalarWhereInput[]
  }

  export type CampaignNPCCreateNestedManyWithoutNpcInput = {
    create?: XOR<CampaignNPCCreateWithoutNpcInput, CampaignNPCUncheckedCreateWithoutNpcInput> | CampaignNPCCreateWithoutNpcInput[] | CampaignNPCUncheckedCreateWithoutNpcInput[]
    connectOrCreate?: CampaignNPCCreateOrConnectWithoutNpcInput | CampaignNPCCreateOrConnectWithoutNpcInput[]
    createMany?: CampaignNPCCreateManyNpcInputEnvelope
    connect?: CampaignNPCWhereUniqueInput | CampaignNPCWhereUniqueInput[]
  }

  export type CampaignNPCUncheckedCreateNestedManyWithoutNpcInput = {
    create?: XOR<CampaignNPCCreateWithoutNpcInput, CampaignNPCUncheckedCreateWithoutNpcInput> | CampaignNPCCreateWithoutNpcInput[] | CampaignNPCUncheckedCreateWithoutNpcInput[]
    connectOrCreate?: CampaignNPCCreateOrConnectWithoutNpcInput | CampaignNPCCreateOrConnectWithoutNpcInput[]
    createMany?: CampaignNPCCreateManyNpcInputEnvelope
    connect?: CampaignNPCWhereUniqueInput | CampaignNPCWhereUniqueInput[]
  }

  export type CampaignNPCUpdateManyWithoutNpcNestedInput = {
    create?: XOR<CampaignNPCCreateWithoutNpcInput, CampaignNPCUncheckedCreateWithoutNpcInput> | CampaignNPCCreateWithoutNpcInput[] | CampaignNPCUncheckedCreateWithoutNpcInput[]
    connectOrCreate?: CampaignNPCCreateOrConnectWithoutNpcInput | CampaignNPCCreateOrConnectWithoutNpcInput[]
    upsert?: CampaignNPCUpsertWithWhereUniqueWithoutNpcInput | CampaignNPCUpsertWithWhereUniqueWithoutNpcInput[]
    createMany?: CampaignNPCCreateManyNpcInputEnvelope
    set?: CampaignNPCWhereUniqueInput | CampaignNPCWhereUniqueInput[]
    disconnect?: CampaignNPCWhereUniqueInput | CampaignNPCWhereUniqueInput[]
    delete?: CampaignNPCWhereUniqueInput | CampaignNPCWhereUniqueInput[]
    connect?: CampaignNPCWhereUniqueInput | CampaignNPCWhereUniqueInput[]
    update?: CampaignNPCUpdateWithWhereUniqueWithoutNpcInput | CampaignNPCUpdateWithWhereUniqueWithoutNpcInput[]
    updateMany?: CampaignNPCUpdateManyWithWhereWithoutNpcInput | CampaignNPCUpdateManyWithWhereWithoutNpcInput[]
    deleteMany?: CampaignNPCScalarWhereInput | CampaignNPCScalarWhereInput[]
  }

  export type CampaignNPCUncheckedUpdateManyWithoutNpcNestedInput = {
    create?: XOR<CampaignNPCCreateWithoutNpcInput, CampaignNPCUncheckedCreateWithoutNpcInput> | CampaignNPCCreateWithoutNpcInput[] | CampaignNPCUncheckedCreateWithoutNpcInput[]
    connectOrCreate?: CampaignNPCCreateOrConnectWithoutNpcInput | CampaignNPCCreateOrConnectWithoutNpcInput[]
    upsert?: CampaignNPCUpsertWithWhereUniqueWithoutNpcInput | CampaignNPCUpsertWithWhereUniqueWithoutNpcInput[]
    createMany?: CampaignNPCCreateManyNpcInputEnvelope
    set?: CampaignNPCWhereUniqueInput | CampaignNPCWhereUniqueInput[]
    disconnect?: CampaignNPCWhereUniqueInput | CampaignNPCWhereUniqueInput[]
    delete?: CampaignNPCWhereUniqueInput | CampaignNPCWhereUniqueInput[]
    connect?: CampaignNPCWhereUniqueInput | CampaignNPCWhereUniqueInput[]
    update?: CampaignNPCUpdateWithWhereUniqueWithoutNpcInput | CampaignNPCUpdateWithWhereUniqueWithoutNpcInput[]
    updateMany?: CampaignNPCUpdateManyWithWhereWithoutNpcInput | CampaignNPCUpdateManyWithWhereWithoutNpcInput[]
    deleteMany?: CampaignNPCScalarWhereInput | CampaignNPCScalarWhereInput[]
  }

  export type CampaignCityCreateNestedManyWithoutCityInput = {
    create?: XOR<CampaignCityCreateWithoutCityInput, CampaignCityUncheckedCreateWithoutCityInput> | CampaignCityCreateWithoutCityInput[] | CampaignCityUncheckedCreateWithoutCityInput[]
    connectOrCreate?: CampaignCityCreateOrConnectWithoutCityInput | CampaignCityCreateOrConnectWithoutCityInput[]
    createMany?: CampaignCityCreateManyCityInputEnvelope
    connect?: CampaignCityWhereUniqueInput | CampaignCityWhereUniqueInput[]
  }

  export type CampaignCityUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<CampaignCityCreateWithoutCityInput, CampaignCityUncheckedCreateWithoutCityInput> | CampaignCityCreateWithoutCityInput[] | CampaignCityUncheckedCreateWithoutCityInput[]
    connectOrCreate?: CampaignCityCreateOrConnectWithoutCityInput | CampaignCityCreateOrConnectWithoutCityInput[]
    createMany?: CampaignCityCreateManyCityInputEnvelope
    connect?: CampaignCityWhereUniqueInput | CampaignCityWhereUniqueInput[]
  }

  export type CampaignCityUpdateManyWithoutCityNestedInput = {
    create?: XOR<CampaignCityCreateWithoutCityInput, CampaignCityUncheckedCreateWithoutCityInput> | CampaignCityCreateWithoutCityInput[] | CampaignCityUncheckedCreateWithoutCityInput[]
    connectOrCreate?: CampaignCityCreateOrConnectWithoutCityInput | CampaignCityCreateOrConnectWithoutCityInput[]
    upsert?: CampaignCityUpsertWithWhereUniqueWithoutCityInput | CampaignCityUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: CampaignCityCreateManyCityInputEnvelope
    set?: CampaignCityWhereUniqueInput | CampaignCityWhereUniqueInput[]
    disconnect?: CampaignCityWhereUniqueInput | CampaignCityWhereUniqueInput[]
    delete?: CampaignCityWhereUniqueInput | CampaignCityWhereUniqueInput[]
    connect?: CampaignCityWhereUniqueInput | CampaignCityWhereUniqueInput[]
    update?: CampaignCityUpdateWithWhereUniqueWithoutCityInput | CampaignCityUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: CampaignCityUpdateManyWithWhereWithoutCityInput | CampaignCityUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: CampaignCityScalarWhereInput | CampaignCityScalarWhereInput[]
  }

  export type CampaignCityUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<CampaignCityCreateWithoutCityInput, CampaignCityUncheckedCreateWithoutCityInput> | CampaignCityCreateWithoutCityInput[] | CampaignCityUncheckedCreateWithoutCityInput[]
    connectOrCreate?: CampaignCityCreateOrConnectWithoutCityInput | CampaignCityCreateOrConnectWithoutCityInput[]
    upsert?: CampaignCityUpsertWithWhereUniqueWithoutCityInput | CampaignCityUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: CampaignCityCreateManyCityInputEnvelope
    set?: CampaignCityWhereUniqueInput | CampaignCityWhereUniqueInput[]
    disconnect?: CampaignCityWhereUniqueInput | CampaignCityWhereUniqueInput[]
    delete?: CampaignCityWhereUniqueInput | CampaignCityWhereUniqueInput[]
    connect?: CampaignCityWhereUniqueInput | CampaignCityWhereUniqueInput[]
    update?: CampaignCityUpdateWithWhereUniqueWithoutCityInput | CampaignCityUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: CampaignCityUpdateManyWithWhereWithoutCityInput | CampaignCityUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: CampaignCityScalarWhereInput | CampaignCityScalarWhereInput[]
  }

  export type CampaignItemCreateNestedManyWithoutItemInput = {
    create?: XOR<CampaignItemCreateWithoutItemInput, CampaignItemUncheckedCreateWithoutItemInput> | CampaignItemCreateWithoutItemInput[] | CampaignItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: CampaignItemCreateOrConnectWithoutItemInput | CampaignItemCreateOrConnectWithoutItemInput[]
    createMany?: CampaignItemCreateManyItemInputEnvelope
    connect?: CampaignItemWhereUniqueInput | CampaignItemWhereUniqueInput[]
  }

  export type CampaignItemUncheckedCreateNestedManyWithoutItemInput = {
    create?: XOR<CampaignItemCreateWithoutItemInput, CampaignItemUncheckedCreateWithoutItemInput> | CampaignItemCreateWithoutItemInput[] | CampaignItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: CampaignItemCreateOrConnectWithoutItemInput | CampaignItemCreateOrConnectWithoutItemInput[]
    createMany?: CampaignItemCreateManyItemInputEnvelope
    connect?: CampaignItemWhereUniqueInput | CampaignItemWhereUniqueInput[]
  }

  export type CampaignItemUpdateManyWithoutItemNestedInput = {
    create?: XOR<CampaignItemCreateWithoutItemInput, CampaignItemUncheckedCreateWithoutItemInput> | CampaignItemCreateWithoutItemInput[] | CampaignItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: CampaignItemCreateOrConnectWithoutItemInput | CampaignItemCreateOrConnectWithoutItemInput[]
    upsert?: CampaignItemUpsertWithWhereUniqueWithoutItemInput | CampaignItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: CampaignItemCreateManyItemInputEnvelope
    set?: CampaignItemWhereUniqueInput | CampaignItemWhereUniqueInput[]
    disconnect?: CampaignItemWhereUniqueInput | CampaignItemWhereUniqueInput[]
    delete?: CampaignItemWhereUniqueInput | CampaignItemWhereUniqueInput[]
    connect?: CampaignItemWhereUniqueInput | CampaignItemWhereUniqueInput[]
    update?: CampaignItemUpdateWithWhereUniqueWithoutItemInput | CampaignItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: CampaignItemUpdateManyWithWhereWithoutItemInput | CampaignItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: CampaignItemScalarWhereInput | CampaignItemScalarWhereInput[]
  }

  export type CampaignItemUncheckedUpdateManyWithoutItemNestedInput = {
    create?: XOR<CampaignItemCreateWithoutItemInput, CampaignItemUncheckedCreateWithoutItemInput> | CampaignItemCreateWithoutItemInput[] | CampaignItemUncheckedCreateWithoutItemInput[]
    connectOrCreate?: CampaignItemCreateOrConnectWithoutItemInput | CampaignItemCreateOrConnectWithoutItemInput[]
    upsert?: CampaignItemUpsertWithWhereUniqueWithoutItemInput | CampaignItemUpsertWithWhereUniqueWithoutItemInput[]
    createMany?: CampaignItemCreateManyItemInputEnvelope
    set?: CampaignItemWhereUniqueInput | CampaignItemWhereUniqueInput[]
    disconnect?: CampaignItemWhereUniqueInput | CampaignItemWhereUniqueInput[]
    delete?: CampaignItemWhereUniqueInput | CampaignItemWhereUniqueInput[]
    connect?: CampaignItemWhereUniqueInput | CampaignItemWhereUniqueInput[]
    update?: CampaignItemUpdateWithWhereUniqueWithoutItemInput | CampaignItemUpdateWithWhereUniqueWithoutItemInput[]
    updateMany?: CampaignItemUpdateManyWithWhereWithoutItemInput | CampaignItemUpdateManyWithWhereWithoutItemInput[]
    deleteMany?: CampaignItemScalarWhereInput | CampaignItemScalarWhereInput[]
  }

  export type CampaignCreateNestedOneWithoutCitiesInput = {
    create?: XOR<CampaignCreateWithoutCitiesInput, CampaignUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutCitiesInput
    connect?: CampaignWhereUniqueInput
  }

  export type CityCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<CityCreateWithoutCampaignsInput, CityUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: CityCreateOrConnectWithoutCampaignsInput
    connect?: CityWhereUniqueInput
  }

  export type CampaignUpdateOneRequiredWithoutCitiesNestedInput = {
    create?: XOR<CampaignCreateWithoutCitiesInput, CampaignUncheckedCreateWithoutCitiesInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutCitiesInput
    upsert?: CampaignUpsertWithoutCitiesInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutCitiesInput, CampaignUpdateWithoutCitiesInput>, CampaignUncheckedUpdateWithoutCitiesInput>
  }

  export type CityUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<CityCreateWithoutCampaignsInput, CityUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: CityCreateOrConnectWithoutCampaignsInput
    upsert?: CityUpsertWithoutCampaignsInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutCampaignsInput, CityUpdateWithoutCampaignsInput>, CityUncheckedUpdateWithoutCampaignsInput>
  }

  export type CampaignCreateNestedOneWithoutNpcsInput = {
    create?: XOR<CampaignCreateWithoutNpcsInput, CampaignUncheckedCreateWithoutNpcsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutNpcsInput
    connect?: CampaignWhereUniqueInput
  }

  export type NPCCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<NPCCreateWithoutCampaignsInput, NPCUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: NPCCreateOrConnectWithoutCampaignsInput
    connect?: NPCWhereUniqueInput
  }

  export type CampaignUpdateOneRequiredWithoutNpcsNestedInput = {
    create?: XOR<CampaignCreateWithoutNpcsInput, CampaignUncheckedCreateWithoutNpcsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutNpcsInput
    upsert?: CampaignUpsertWithoutNpcsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutNpcsInput, CampaignUpdateWithoutNpcsInput>, CampaignUncheckedUpdateWithoutNpcsInput>
  }

  export type NPCUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<NPCCreateWithoutCampaignsInput, NPCUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: NPCCreateOrConnectWithoutCampaignsInput
    upsert?: NPCUpsertWithoutCampaignsInput
    connect?: NPCWhereUniqueInput
    update?: XOR<XOR<NPCUpdateToOneWithWhereWithoutCampaignsInput, NPCUpdateWithoutCampaignsInput>, NPCUncheckedUpdateWithoutCampaignsInput>
  }

  export type CampaignCreateNestedOneWithoutItemsInput = {
    create?: XOR<CampaignCreateWithoutItemsInput, CampaignUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutItemsInput
    connect?: CampaignWhereUniqueInput
  }

  export type ItemCreateNestedOneWithoutCampaignsInput = {
    create?: XOR<ItemCreateWithoutCampaignsInput, ItemUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutCampaignsInput
    connect?: ItemWhereUniqueInput
  }

  export type CampaignUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<CampaignCreateWithoutItemsInput, CampaignUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CampaignCreateOrConnectWithoutItemsInput
    upsert?: CampaignUpsertWithoutItemsInput
    connect?: CampaignWhereUniqueInput
    update?: XOR<XOR<CampaignUpdateToOneWithWhereWithoutItemsInput, CampaignUpdateWithoutItemsInput>, CampaignUncheckedUpdateWithoutItemsInput>
  }

  export type ItemUpdateOneRequiredWithoutCampaignsNestedInput = {
    create?: XOR<ItemCreateWithoutCampaignsInput, ItemUncheckedCreateWithoutCampaignsInput>
    connectOrCreate?: ItemCreateOrConnectWithoutCampaignsInput
    upsert?: ItemUpsertWithoutCampaignsInput
    connect?: ItemWhereUniqueInput
    update?: XOR<XOR<ItemUpdateToOneWithWhereWithoutCampaignsInput, ItemUpdateWithoutCampaignsInput>, ItemUncheckedUpdateWithoutCampaignsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CampaignCityCreateWithoutCampaignInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignCityUncheckedCreateWithoutCampaignInput = {
    id?: string
    cityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCityCreateOrConnectWithoutCampaignInput = {
    where: CampaignCityWhereUniqueInput
    create: XOR<CampaignCityCreateWithoutCampaignInput, CampaignCityUncheckedCreateWithoutCampaignInput>
  }

  export type CampaignCityCreateManyCampaignInputEnvelope = {
    data: CampaignCityCreateManyCampaignInput | CampaignCityCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type CampaignNPCCreateWithoutCampaignInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    npc: NPCCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignNPCUncheckedCreateWithoutCampaignInput = {
    id?: string
    npcId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignNPCCreateOrConnectWithoutCampaignInput = {
    where: CampaignNPCWhereUniqueInput
    create: XOR<CampaignNPCCreateWithoutCampaignInput, CampaignNPCUncheckedCreateWithoutCampaignInput>
  }

  export type CampaignNPCCreateManyCampaignInputEnvelope = {
    data: CampaignNPCCreateManyCampaignInput | CampaignNPCCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type CampaignItemCreateWithoutCampaignInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    item: ItemCreateNestedOneWithoutCampaignsInput
  }

  export type CampaignItemUncheckedCreateWithoutCampaignInput = {
    id?: string
    itemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignItemCreateOrConnectWithoutCampaignInput = {
    where: CampaignItemWhereUniqueInput
    create: XOR<CampaignItemCreateWithoutCampaignInput, CampaignItemUncheckedCreateWithoutCampaignInput>
  }

  export type CampaignItemCreateManyCampaignInputEnvelope = {
    data: CampaignItemCreateManyCampaignInput | CampaignItemCreateManyCampaignInput[]
    skipDuplicates?: boolean
  }

  export type CampaignCityUpsertWithWhereUniqueWithoutCampaignInput = {
    where: CampaignCityWhereUniqueInput
    update: XOR<CampaignCityUpdateWithoutCampaignInput, CampaignCityUncheckedUpdateWithoutCampaignInput>
    create: XOR<CampaignCityCreateWithoutCampaignInput, CampaignCityUncheckedCreateWithoutCampaignInput>
  }

  export type CampaignCityUpdateWithWhereUniqueWithoutCampaignInput = {
    where: CampaignCityWhereUniqueInput
    data: XOR<CampaignCityUpdateWithoutCampaignInput, CampaignCityUncheckedUpdateWithoutCampaignInput>
  }

  export type CampaignCityUpdateManyWithWhereWithoutCampaignInput = {
    where: CampaignCityScalarWhereInput
    data: XOR<CampaignCityUpdateManyMutationInput, CampaignCityUncheckedUpdateManyWithoutCampaignInput>
  }

  export type CampaignCityScalarWhereInput = {
    AND?: CampaignCityScalarWhereInput | CampaignCityScalarWhereInput[]
    OR?: CampaignCityScalarWhereInput[]
    NOT?: CampaignCityScalarWhereInput | CampaignCityScalarWhereInput[]
    id?: StringFilter<"CampaignCity"> | string
    campaignId?: StringFilter<"CampaignCity"> | string
    cityId?: StringFilter<"CampaignCity"> | string
    createdAt?: DateTimeFilter<"CampaignCity"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignCity"> | Date | string
  }

  export type CampaignNPCUpsertWithWhereUniqueWithoutCampaignInput = {
    where: CampaignNPCWhereUniqueInput
    update: XOR<CampaignNPCUpdateWithoutCampaignInput, CampaignNPCUncheckedUpdateWithoutCampaignInput>
    create: XOR<CampaignNPCCreateWithoutCampaignInput, CampaignNPCUncheckedCreateWithoutCampaignInput>
  }

  export type CampaignNPCUpdateWithWhereUniqueWithoutCampaignInput = {
    where: CampaignNPCWhereUniqueInput
    data: XOR<CampaignNPCUpdateWithoutCampaignInput, CampaignNPCUncheckedUpdateWithoutCampaignInput>
  }

  export type CampaignNPCUpdateManyWithWhereWithoutCampaignInput = {
    where: CampaignNPCScalarWhereInput
    data: XOR<CampaignNPCUpdateManyMutationInput, CampaignNPCUncheckedUpdateManyWithoutCampaignInput>
  }

  export type CampaignNPCScalarWhereInput = {
    AND?: CampaignNPCScalarWhereInput | CampaignNPCScalarWhereInput[]
    OR?: CampaignNPCScalarWhereInput[]
    NOT?: CampaignNPCScalarWhereInput | CampaignNPCScalarWhereInput[]
    id?: StringFilter<"CampaignNPC"> | string
    campaignId?: StringFilter<"CampaignNPC"> | string
    npcId?: StringFilter<"CampaignNPC"> | string
    createdAt?: DateTimeFilter<"CampaignNPC"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignNPC"> | Date | string
  }

  export type CampaignItemUpsertWithWhereUniqueWithoutCampaignInput = {
    where: CampaignItemWhereUniqueInput
    update: XOR<CampaignItemUpdateWithoutCampaignInput, CampaignItemUncheckedUpdateWithoutCampaignInput>
    create: XOR<CampaignItemCreateWithoutCampaignInput, CampaignItemUncheckedCreateWithoutCampaignInput>
  }

  export type CampaignItemUpdateWithWhereUniqueWithoutCampaignInput = {
    where: CampaignItemWhereUniqueInput
    data: XOR<CampaignItemUpdateWithoutCampaignInput, CampaignItemUncheckedUpdateWithoutCampaignInput>
  }

  export type CampaignItemUpdateManyWithWhereWithoutCampaignInput = {
    where: CampaignItemScalarWhereInput
    data: XOR<CampaignItemUpdateManyMutationInput, CampaignItemUncheckedUpdateManyWithoutCampaignInput>
  }

  export type CampaignItemScalarWhereInput = {
    AND?: CampaignItemScalarWhereInput | CampaignItemScalarWhereInput[]
    OR?: CampaignItemScalarWhereInput[]
    NOT?: CampaignItemScalarWhereInput | CampaignItemScalarWhereInput[]
    id?: StringFilter<"CampaignItem"> | string
    campaignId?: StringFilter<"CampaignItem"> | string
    itemId?: StringFilter<"CampaignItem"> | string
    createdAt?: DateTimeFilter<"CampaignItem"> | Date | string
    updatedAt?: DateTimeFilter<"CampaignItem"> | Date | string
  }

  export type CampaignNPCCreateWithoutNpcInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutNpcsInput
  }

  export type CampaignNPCUncheckedCreateWithoutNpcInput = {
    id?: string
    campaignId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignNPCCreateOrConnectWithoutNpcInput = {
    where: CampaignNPCWhereUniqueInput
    create: XOR<CampaignNPCCreateWithoutNpcInput, CampaignNPCUncheckedCreateWithoutNpcInput>
  }

  export type CampaignNPCCreateManyNpcInputEnvelope = {
    data: CampaignNPCCreateManyNpcInput | CampaignNPCCreateManyNpcInput[]
    skipDuplicates?: boolean
  }

  export type CampaignNPCUpsertWithWhereUniqueWithoutNpcInput = {
    where: CampaignNPCWhereUniqueInput
    update: XOR<CampaignNPCUpdateWithoutNpcInput, CampaignNPCUncheckedUpdateWithoutNpcInput>
    create: XOR<CampaignNPCCreateWithoutNpcInput, CampaignNPCUncheckedCreateWithoutNpcInput>
  }

  export type CampaignNPCUpdateWithWhereUniqueWithoutNpcInput = {
    where: CampaignNPCWhereUniqueInput
    data: XOR<CampaignNPCUpdateWithoutNpcInput, CampaignNPCUncheckedUpdateWithoutNpcInput>
  }

  export type CampaignNPCUpdateManyWithWhereWithoutNpcInput = {
    where: CampaignNPCScalarWhereInput
    data: XOR<CampaignNPCUpdateManyMutationInput, CampaignNPCUncheckedUpdateManyWithoutNpcInput>
  }

  export type CampaignCityCreateWithoutCityInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutCitiesInput
  }

  export type CampaignCityUncheckedCreateWithoutCityInput = {
    id?: string
    campaignId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCityCreateOrConnectWithoutCityInput = {
    where: CampaignCityWhereUniqueInput
    create: XOR<CampaignCityCreateWithoutCityInput, CampaignCityUncheckedCreateWithoutCityInput>
  }

  export type CampaignCityCreateManyCityInputEnvelope = {
    data: CampaignCityCreateManyCityInput | CampaignCityCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type CampaignCityUpsertWithWhereUniqueWithoutCityInput = {
    where: CampaignCityWhereUniqueInput
    update: XOR<CampaignCityUpdateWithoutCityInput, CampaignCityUncheckedUpdateWithoutCityInput>
    create: XOR<CampaignCityCreateWithoutCityInput, CampaignCityUncheckedCreateWithoutCityInput>
  }

  export type CampaignCityUpdateWithWhereUniqueWithoutCityInput = {
    where: CampaignCityWhereUniqueInput
    data: XOR<CampaignCityUpdateWithoutCityInput, CampaignCityUncheckedUpdateWithoutCityInput>
  }

  export type CampaignCityUpdateManyWithWhereWithoutCityInput = {
    where: CampaignCityScalarWhereInput
    data: XOR<CampaignCityUpdateManyMutationInput, CampaignCityUncheckedUpdateManyWithoutCityInput>
  }

  export type CampaignItemCreateWithoutItemInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    campaign: CampaignCreateNestedOneWithoutItemsInput
  }

  export type CampaignItemUncheckedCreateWithoutItemInput = {
    id?: string
    campaignId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignItemCreateOrConnectWithoutItemInput = {
    where: CampaignItemWhereUniqueInput
    create: XOR<CampaignItemCreateWithoutItemInput, CampaignItemUncheckedCreateWithoutItemInput>
  }

  export type CampaignItemCreateManyItemInputEnvelope = {
    data: CampaignItemCreateManyItemInput | CampaignItemCreateManyItemInput[]
    skipDuplicates?: boolean
  }

  export type CampaignItemUpsertWithWhereUniqueWithoutItemInput = {
    where: CampaignItemWhereUniqueInput
    update: XOR<CampaignItemUpdateWithoutItemInput, CampaignItemUncheckedUpdateWithoutItemInput>
    create: XOR<CampaignItemCreateWithoutItemInput, CampaignItemUncheckedCreateWithoutItemInput>
  }

  export type CampaignItemUpdateWithWhereUniqueWithoutItemInput = {
    where: CampaignItemWhereUniqueInput
    data: XOR<CampaignItemUpdateWithoutItemInput, CampaignItemUncheckedUpdateWithoutItemInput>
  }

  export type CampaignItemUpdateManyWithWhereWithoutItemInput = {
    where: CampaignItemScalarWhereInput
    data: XOR<CampaignItemUpdateManyMutationInput, CampaignItemUncheckedUpdateManyWithoutItemInput>
  }

  export type CampaignCreateWithoutCitiesInput = {
    id?: string
    name: string
    theme: string
    tone: JsonNullValueInput | InputJsonValue
    homebrewAllowed: boolean
    magicCommonality?: string | null
    geographicalScale?: string | null
    civilizationState?: string | null
    commonLandscapes: JsonNullValueInput | InputJsonValue
    technologyLevel?: string | null
    roleOfReligion?: string | null
    religiousFiguresPerception?: string | null
    majorConflictsThreats?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    npcs?: CampaignNPCCreateNestedManyWithoutCampaignInput
    items?: CampaignItemCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutCitiesInput = {
    id?: string
    name: string
    theme: string
    tone: JsonNullValueInput | InputJsonValue
    homebrewAllowed: boolean
    magicCommonality?: string | null
    geographicalScale?: string | null
    civilizationState?: string | null
    commonLandscapes: JsonNullValueInput | InputJsonValue
    technologyLevel?: string | null
    roleOfReligion?: string | null
    religiousFiguresPerception?: string | null
    majorConflictsThreats?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    npcs?: CampaignNPCUncheckedCreateNestedManyWithoutCampaignInput
    items?: CampaignItemUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutCitiesInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutCitiesInput, CampaignUncheckedCreateWithoutCitiesInput>
  }

  export type CityCreateWithoutCampaignsInput = {
    id?: string
    name: string
    size: string
    population: string
    government: string
    economy: string
    notableLocations: JsonNullValueInput | InputJsonValue
    description: string
    history: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CityUncheckedCreateWithoutCampaignsInput = {
    id?: string
    name: string
    size: string
    population: string
    government: string
    economy: string
    notableLocations: JsonNullValueInput | InputJsonValue
    description: string
    history: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CityCreateOrConnectWithoutCampaignsInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutCampaignsInput, CityUncheckedCreateWithoutCampaignsInput>
  }

  export type CampaignUpsertWithoutCitiesInput = {
    update: XOR<CampaignUpdateWithoutCitiesInput, CampaignUncheckedUpdateWithoutCitiesInput>
    create: XOR<CampaignCreateWithoutCitiesInput, CampaignUncheckedCreateWithoutCitiesInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutCitiesInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutCitiesInput, CampaignUncheckedUpdateWithoutCitiesInput>
  }

  export type CampaignUpdateWithoutCitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    tone?: JsonNullValueInput | InputJsonValue
    homebrewAllowed?: BoolFieldUpdateOperationsInput | boolean
    magicCommonality?: NullableStringFieldUpdateOperationsInput | string | null
    geographicalScale?: NullableStringFieldUpdateOperationsInput | string | null
    civilizationState?: NullableStringFieldUpdateOperationsInput | string | null
    commonLandscapes?: JsonNullValueInput | InputJsonValue
    technologyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    roleOfReligion?: NullableStringFieldUpdateOperationsInput | string | null
    religiousFiguresPerception?: NullableStringFieldUpdateOperationsInput | string | null
    majorConflictsThreats?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    npcs?: CampaignNPCUpdateManyWithoutCampaignNestedInput
    items?: CampaignItemUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutCitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    tone?: JsonNullValueInput | InputJsonValue
    homebrewAllowed?: BoolFieldUpdateOperationsInput | boolean
    magicCommonality?: NullableStringFieldUpdateOperationsInput | string | null
    geographicalScale?: NullableStringFieldUpdateOperationsInput | string | null
    civilizationState?: NullableStringFieldUpdateOperationsInput | string | null
    commonLandscapes?: JsonNullValueInput | InputJsonValue
    technologyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    roleOfReligion?: NullableStringFieldUpdateOperationsInput | string | null
    religiousFiguresPerception?: NullableStringFieldUpdateOperationsInput | string | null
    majorConflictsThreats?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    npcs?: CampaignNPCUncheckedUpdateManyWithoutCampaignNestedInput
    items?: CampaignItemUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type CityUpsertWithoutCampaignsInput = {
    update: XOR<CityUpdateWithoutCampaignsInput, CityUncheckedUpdateWithoutCampaignsInput>
    create: XOR<CityCreateWithoutCampaignsInput, CityUncheckedCreateWithoutCampaignsInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutCampaignsInput, CityUncheckedUpdateWithoutCampaignsInput>
  }

  export type CityUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    population?: StringFieldUpdateOperationsInput | string
    government?: StringFieldUpdateOperationsInput | string
    economy?: StringFieldUpdateOperationsInput | string
    notableLocations?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    size?: StringFieldUpdateOperationsInput | string
    population?: StringFieldUpdateOperationsInput | string
    government?: StringFieldUpdateOperationsInput | string
    economy?: StringFieldUpdateOperationsInput | string
    notableLocations?: JsonNullValueInput | InputJsonValue
    description?: StringFieldUpdateOperationsInput | string
    history?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateWithoutNpcsInput = {
    id?: string
    name: string
    theme: string
    tone: JsonNullValueInput | InputJsonValue
    homebrewAllowed: boolean
    magicCommonality?: string | null
    geographicalScale?: string | null
    civilizationState?: string | null
    commonLandscapes: JsonNullValueInput | InputJsonValue
    technologyLevel?: string | null
    roleOfReligion?: string | null
    religiousFiguresPerception?: string | null
    majorConflictsThreats?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cities?: CampaignCityCreateNestedManyWithoutCampaignInput
    items?: CampaignItemCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutNpcsInput = {
    id?: string
    name: string
    theme: string
    tone: JsonNullValueInput | InputJsonValue
    homebrewAllowed: boolean
    magicCommonality?: string | null
    geographicalScale?: string | null
    civilizationState?: string | null
    commonLandscapes: JsonNullValueInput | InputJsonValue
    technologyLevel?: string | null
    roleOfReligion?: string | null
    religiousFiguresPerception?: string | null
    majorConflictsThreats?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cities?: CampaignCityUncheckedCreateNestedManyWithoutCampaignInput
    items?: CampaignItemUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutNpcsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutNpcsInput, CampaignUncheckedCreateWithoutNpcsInput>
  }

  export type NPCCreateWithoutCampaignsInput = {
    id?: string
    name: string
    race: string
    class?: string | null
    alignment: string
    description: string
    background: string
    personality: string
    goals: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NPCUncheckedCreateWithoutCampaignsInput = {
    id?: string
    name: string
    race: string
    class?: string | null
    alignment: string
    description: string
    background: string
    personality: string
    goals: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NPCCreateOrConnectWithoutCampaignsInput = {
    where: NPCWhereUniqueInput
    create: XOR<NPCCreateWithoutCampaignsInput, NPCUncheckedCreateWithoutCampaignsInput>
  }

  export type CampaignUpsertWithoutNpcsInput = {
    update: XOR<CampaignUpdateWithoutNpcsInput, CampaignUncheckedUpdateWithoutNpcsInput>
    create: XOR<CampaignCreateWithoutNpcsInput, CampaignUncheckedCreateWithoutNpcsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutNpcsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutNpcsInput, CampaignUncheckedUpdateWithoutNpcsInput>
  }

  export type CampaignUpdateWithoutNpcsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    tone?: JsonNullValueInput | InputJsonValue
    homebrewAllowed?: BoolFieldUpdateOperationsInput | boolean
    magicCommonality?: NullableStringFieldUpdateOperationsInput | string | null
    geographicalScale?: NullableStringFieldUpdateOperationsInput | string | null
    civilizationState?: NullableStringFieldUpdateOperationsInput | string | null
    commonLandscapes?: JsonNullValueInput | InputJsonValue
    technologyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    roleOfReligion?: NullableStringFieldUpdateOperationsInput | string | null
    religiousFiguresPerception?: NullableStringFieldUpdateOperationsInput | string | null
    majorConflictsThreats?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cities?: CampaignCityUpdateManyWithoutCampaignNestedInput
    items?: CampaignItemUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutNpcsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    tone?: JsonNullValueInput | InputJsonValue
    homebrewAllowed?: BoolFieldUpdateOperationsInput | boolean
    magicCommonality?: NullableStringFieldUpdateOperationsInput | string | null
    geographicalScale?: NullableStringFieldUpdateOperationsInput | string | null
    civilizationState?: NullableStringFieldUpdateOperationsInput | string | null
    commonLandscapes?: JsonNullValueInput | InputJsonValue
    technologyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    roleOfReligion?: NullableStringFieldUpdateOperationsInput | string | null
    religiousFiguresPerception?: NullableStringFieldUpdateOperationsInput | string | null
    majorConflictsThreats?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cities?: CampaignCityUncheckedUpdateManyWithoutCampaignNestedInput
    items?: CampaignItemUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type NPCUpsertWithoutCampaignsInput = {
    update: XOR<NPCUpdateWithoutCampaignsInput, NPCUncheckedUpdateWithoutCampaignsInput>
    create: XOR<NPCCreateWithoutCampaignsInput, NPCUncheckedCreateWithoutCampaignsInput>
    where?: NPCWhereInput
  }

  export type NPCUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: NPCWhereInput
    data: XOR<NPCUpdateWithoutCampaignsInput, NPCUncheckedUpdateWithoutCampaignsInput>
  }

  export type NPCUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    alignment?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    goals?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NPCUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    race?: StringFieldUpdateOperationsInput | string
    class?: NullableStringFieldUpdateOperationsInput | string | null
    alignment?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    background?: StringFieldUpdateOperationsInput | string
    personality?: StringFieldUpdateOperationsInput | string
    goals?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCreateWithoutItemsInput = {
    id?: string
    name: string
    theme: string
    tone: JsonNullValueInput | InputJsonValue
    homebrewAllowed: boolean
    magicCommonality?: string | null
    geographicalScale?: string | null
    civilizationState?: string | null
    commonLandscapes: JsonNullValueInput | InputJsonValue
    technologyLevel?: string | null
    roleOfReligion?: string | null
    religiousFiguresPerception?: string | null
    majorConflictsThreats?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cities?: CampaignCityCreateNestedManyWithoutCampaignInput
    npcs?: CampaignNPCCreateNestedManyWithoutCampaignInput
  }

  export type CampaignUncheckedCreateWithoutItemsInput = {
    id?: string
    name: string
    theme: string
    tone: JsonNullValueInput | InputJsonValue
    homebrewAllowed: boolean
    magicCommonality?: string | null
    geographicalScale?: string | null
    civilizationState?: string | null
    commonLandscapes: JsonNullValueInput | InputJsonValue
    technologyLevel?: string | null
    roleOfReligion?: string | null
    religiousFiguresPerception?: string | null
    majorConflictsThreats?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    cities?: CampaignCityUncheckedCreateNestedManyWithoutCampaignInput
    npcs?: CampaignNPCUncheckedCreateNestedManyWithoutCampaignInput
  }

  export type CampaignCreateOrConnectWithoutItemsInput = {
    where: CampaignWhereUniqueInput
    create: XOR<CampaignCreateWithoutItemsInput, CampaignUncheckedCreateWithoutItemsInput>
  }

  export type ItemCreateWithoutCampaignsInput = {
    id?: string
    name: string
    type: string
    rarity: string
    description: string
    properties: JsonNullValueInput | InputJsonValue
    history?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemUncheckedCreateWithoutCampaignsInput = {
    id?: string
    name: string
    type: string
    rarity: string
    description: string
    properties: JsonNullValueInput | InputJsonValue
    history?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ItemCreateOrConnectWithoutCampaignsInput = {
    where: ItemWhereUniqueInput
    create: XOR<ItemCreateWithoutCampaignsInput, ItemUncheckedCreateWithoutCampaignsInput>
  }

  export type CampaignUpsertWithoutItemsInput = {
    update: XOR<CampaignUpdateWithoutItemsInput, CampaignUncheckedUpdateWithoutItemsInput>
    create: XOR<CampaignCreateWithoutItemsInput, CampaignUncheckedCreateWithoutItemsInput>
    where?: CampaignWhereInput
  }

  export type CampaignUpdateToOneWithWhereWithoutItemsInput = {
    where?: CampaignWhereInput
    data: XOR<CampaignUpdateWithoutItemsInput, CampaignUncheckedUpdateWithoutItemsInput>
  }

  export type CampaignUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    tone?: JsonNullValueInput | InputJsonValue
    homebrewAllowed?: BoolFieldUpdateOperationsInput | boolean
    magicCommonality?: NullableStringFieldUpdateOperationsInput | string | null
    geographicalScale?: NullableStringFieldUpdateOperationsInput | string | null
    civilizationState?: NullableStringFieldUpdateOperationsInput | string | null
    commonLandscapes?: JsonNullValueInput | InputJsonValue
    technologyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    roleOfReligion?: NullableStringFieldUpdateOperationsInput | string | null
    religiousFiguresPerception?: NullableStringFieldUpdateOperationsInput | string | null
    majorConflictsThreats?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cities?: CampaignCityUpdateManyWithoutCampaignNestedInput
    npcs?: CampaignNPCUpdateManyWithoutCampaignNestedInput
  }

  export type CampaignUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    theme?: StringFieldUpdateOperationsInput | string
    tone?: JsonNullValueInput | InputJsonValue
    homebrewAllowed?: BoolFieldUpdateOperationsInput | boolean
    magicCommonality?: NullableStringFieldUpdateOperationsInput | string | null
    geographicalScale?: NullableStringFieldUpdateOperationsInput | string | null
    civilizationState?: NullableStringFieldUpdateOperationsInput | string | null
    commonLandscapes?: JsonNullValueInput | InputJsonValue
    technologyLevel?: NullableStringFieldUpdateOperationsInput | string | null
    roleOfReligion?: NullableStringFieldUpdateOperationsInput | string | null
    religiousFiguresPerception?: NullableStringFieldUpdateOperationsInput | string | null
    majorConflictsThreats?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cities?: CampaignCityUncheckedUpdateManyWithoutCampaignNestedInput
    npcs?: CampaignNPCUncheckedUpdateManyWithoutCampaignNestedInput
  }

  export type ItemUpsertWithoutCampaignsInput = {
    update: XOR<ItemUpdateWithoutCampaignsInput, ItemUncheckedUpdateWithoutCampaignsInput>
    create: XOR<ItemCreateWithoutCampaignsInput, ItemUncheckedCreateWithoutCampaignsInput>
    where?: ItemWhereInput
  }

  export type ItemUpdateToOneWithWhereWithoutCampaignsInput = {
    where?: ItemWhereInput
    data: XOR<ItemUpdateWithoutCampaignsInput, ItemUncheckedUpdateWithoutCampaignsInput>
  }

  export type ItemUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    properties?: JsonNullValueInput | InputJsonValue
    history?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ItemUncheckedUpdateWithoutCampaignsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    rarity?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    properties?: JsonNullValueInput | InputJsonValue
    history?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCityCreateManyCampaignInput = {
    id?: string
    cityId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignNPCCreateManyCampaignInput = {
    id?: string
    npcId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignItemCreateManyCampaignInput = {
    id?: string
    itemId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCityUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type CampaignCityUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCityUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignNPCUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    npc?: NPCUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type CampaignNPCUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    npcId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignNPCUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    npcId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignItemUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    item?: ItemUpdateOneRequiredWithoutCampaignsNestedInput
  }

  export type CampaignItemUncheckedUpdateWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignItemUncheckedUpdateManyWithoutCampaignInput = {
    id?: StringFieldUpdateOperationsInput | string
    itemId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignNPCCreateManyNpcInput = {
    id?: string
    campaignId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignNPCUpdateWithoutNpcInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutNpcsNestedInput
  }

  export type CampaignNPCUncheckedUpdateWithoutNpcInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignNPCUncheckedUpdateManyWithoutNpcInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCityCreateManyCityInput = {
    id?: string
    campaignId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignCityUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutCitiesNestedInput
  }

  export type CampaignCityUncheckedUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignCityUncheckedUpdateManyWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignItemCreateManyItemInput = {
    id?: string
    campaignId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CampaignItemUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    campaign?: CampaignUpdateOneRequiredWithoutItemsNestedInput
  }

  export type CampaignItemUncheckedUpdateWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CampaignItemUncheckedUpdateManyWithoutItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    campaignId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}