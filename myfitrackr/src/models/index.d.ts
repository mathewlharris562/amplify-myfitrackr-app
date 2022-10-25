import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type MyfitrakrDBMMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerMyfitrakrDBM = {
  readonly id: string;
  readonly alias: string;
  readonly name: string;
  readonly age: number;
  readonly workout: string;
  readonly count: number;
  readonly fitgroup: string;
  readonly image: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyMyfitrakrDBM = {
  readonly id: string;
  readonly alias: string;
  readonly name: string;
  readonly age: number;
  readonly workout: string;
  readonly count: number;
  readonly fitgroup: string;
  readonly image: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type MyfitrakrDBM = LazyLoading extends LazyLoadingDisabled ? EagerMyfitrakrDBM : LazyMyfitrakrDBM

export declare const MyfitrakrDBM: (new (init: ModelInit<MyfitrakrDBM, MyfitrakrDBMMetaData>) => MyfitrakrDBM) & {
  copyOf(source: MyfitrakrDBM, mutator: (draft: MutableModel<MyfitrakrDBM, MyfitrakrDBMMetaData>) => MutableModel<MyfitrakrDBM, MyfitrakrDBMMetaData> | void): MyfitrakrDBM;
}