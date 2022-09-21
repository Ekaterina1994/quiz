/**
 * Helper returns element in array by index
 */
export const getElementByIndex = <T>(array: T[], index: number): T => {
  const element = array[index];

  if (!element) {
    throw new Error("Element does not exist");
  }

  return element;
};