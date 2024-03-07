import { TUser } from "../types/data";

interface IOptions {
  method: string;
  headers: {
    "Content-Type": "application/json";
  };
}

const getResponse = async (req: Response) => {
  if (!req.ok) {
    console.log(`Статус ошибки: ${req.status}`);
  }
  if (req.ok) {
    return req.json();
  }
  return Promise.reject(await req.json());
};

const request = (url: string, options: IOptions) => {
  return fetch(url, options).then(getResponse);
};

export const getUsersList = (
  name: string
): Promise<{
  users: TUser[];
}> => {
  return request(`https://dummyjson.com/users/search?q=${name}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
};
