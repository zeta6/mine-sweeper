import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type GameMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Game {
  readonly id: string;
  readonly mines?: string | null;
  readonly mine_total?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Game, GameMetaData>);
  static copyOf(source: Game, mutator: (draft: MutableModel<Game, GameMetaData>) => MutableModel<Game, GameMetaData> | void): Game;
}