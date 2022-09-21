/**
 * HTTP request methods
 */
export enum FetchMethod {
  GET = "GET",
  DELETE = "DELETE",
  POST = "POST",
}

/**
 * Execute request and preprocess response
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const request = async (url: string, method: FetchMethod): Promise<any> => {
  const rawResponse = await fetch(url, {method});
  return rawResponse.json();
};

/**
 * Requests methods
 */
export const fetchRequest = {

  /**
   * @description create get request
   * @param url request address
   * @returns server response
   */
  get: async <T>(url: string): Promise<T> => { return request(url, FetchMethod.GET); },

  /**
   * @description create delete request
   * @param url request address
   * @returns server response
   */
  delete: async <T>(url: string): Promise<T> => { return request(url, FetchMethod.DELETE); },

  /**
   * @description create post request
   * @param url request address
   * @returns server response
   */
  post: async <T>(url: string): Promise<T> => { return request(url, FetchMethod.POST); },

};