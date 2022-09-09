/** Methods request */
export enum FetchMethod {
  GET = "GET",
  DELETE = "DELETE",
}

export const request = async (url: string, method: FetchMethod): Promise<any> => {
  const rawResponse = await fetch(url, {method});

  // Response processing
  if (rawResponse.ok) {
    return method !== FetchMethod.DELETE
      ? rawResponse.json()
      : undefined;
  }

  throw new Error(String(rawResponse.status));
};

export const fetchRequest = {

  /**
	 * Create get request
	 */
  get: async <T>(url: string): Promise<T> => { return request(url, FetchMethod.GET); },

};