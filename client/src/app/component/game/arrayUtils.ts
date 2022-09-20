export const getElementByIndex = <T>(rounds: T[], currentRoundIndex: number): T => {
  const currentRound = rounds[currentRoundIndex];

  if (!currentRound) {
    throw new Error("Round does not exist");
  }

  return currentRound;
};