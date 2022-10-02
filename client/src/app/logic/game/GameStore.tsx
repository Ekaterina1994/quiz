import {createContext, useState, Dispatch, SetStateAction, FC, PropsWithChildren} from "react";
import {RoundModel} from "src/app/model/RoundModel";

/**
 * Game store interface
 */
export interface GameStoreInterface {
  /**
   * User scores
   */
  scores: number;

  /**
   * Set user scores
   */
  setScores: Dispatch<SetStateAction<number>>;

  /**
   * TODO: what is rounds, why do u need them etc....
   * Rounds
   */
  rounds: RoundModel[];

  /**
   * TODO: what is rounds, why do u need them etc....
   * Set rounds
   */
  setRounds: Dispatch<SetStateAction<RoundModel[]>>;
}

/**
 * Store for game
 */
export const useGameStore = (): GameStoreInterface => {
  const [scores, setScores] = useState<number>(0);
  const [rounds, setRounds] = useState<RoundModel[]>([]);

  return {scores, setScores, rounds, setRounds};
};

/**
 * Provide access to GameStore
 */
export const GameContext = createContext({} as GameStoreInterface);

/**
 * Provider for game store
 */
export const GameProvider: FC<PropsWithChildren> = (props: PropsWithChildren) => {
  return (
    // TODO: remove eslint-disable-next-line
    // eslint-disable-next-line react/react-in-jsx-scope
    <GameContext.Provider value={useGameStore()}>
      {props.children}
    </GameContext.Provider>
  );
};
