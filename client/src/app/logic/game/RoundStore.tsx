import {createContext, useState, Dispatch, SetStateAction, FC, PropsWithChildren} from "react";

/**
 * Round store interface
 */
export interface RoundStoreInterface {
  /**
   * Round store interface
   */
  currentRoundIndex: number;

  /**
   * Set current round index
   */
  setCurrentRoundIndex: Dispatch<SetStateAction<number>>;
}

/**
 * Store for round store
 */
export const useRoundStore = (): RoundStoreInterface => {
  const [currentRoundIndex, setCurrentRoundIndex] = useState<number>(0);

  return {currentRoundIndex, setCurrentRoundIndex};
};

/**
 * Provide access to RoundStore
 */
export const RoundContext = createContext({} as RoundStoreInterface);

/**
 * Provider for game store
 */
export const RoundProvider: FC<PropsWithChildren> = (props: PropsWithChildren) => {
  return (
    <RoundContext.Provider value={useRoundStore()}>
      {props.children}
    </RoundContext.Provider>
  );
};
