/**
 * HTTP request methods
 */
export enum FetchMethod {
  GET = "GET",
  DELETE = "DELETE",
  POST = "POST",
}

/**
 * Request
 * @param url path to database with data for quiz
 * @param method GET or DELETE
 * @returns response with data (quiz questions, answers, etc) or Error
 */

// eslint-disable-next-line
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
   * @param url request addres
   * @returns server response
   */
  get: async <T>(url: string): Promise<T> => { return request(url, FetchMethod.GET); },

  /**
   * @description create delete request
   * @param url requset addres
   * @returns server response
   */
  delete: async <T>(url: string): Promise<T> => { return request(url, FetchMethod.DELETE); },

  /**
   * @description create post request
   * @param url request addres
   * @returns server response
   */
  post: async <T>(url: string): Promise<T> => { return request(url, FetchMethod.POST); },

};