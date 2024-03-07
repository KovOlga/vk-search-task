import { TUser } from "../types/data";

interface IOptions {
  method: string;
  headers: {
    "Content-Type": "application/json";
  };
}

const getResponse = async (res: Response) => {
  if (!res.ok) {
    console.log(`Статус ошибки: ${res.status}`);
  }
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(await res.json());
};

const request = (url: string, options: IOptions) => {
  return fetch(url, options).then(getResponse);
};

export const getUsersList = (
  name: string
): Promise<{
  users: TUser[];
}> => {
  return request(`https://dummyjson.com/users/psearch?q=${name}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
};
