export const patchAction = async (
  url: string,
  options?: {
    data?: Record<string, any>;
    id?: string;
    move?: boolean;
  }
) => {
  const baseURL = process.env.NEXT_PUBLIC_API_URL;
  let endpoint = `${baseURL}/api/${url}`;

  if (options?.id) {
    endpoint += `/${options.id}`;
  } else if (options?.move) {
    endpoint += "/move";
  }

  const fetchOptions: RequestInit = {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (options?.data) {
    fetchOptions.body = JSON.stringify(options.data);
  }

  return fetch(endpoint, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((responseData) => responseData)
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};
