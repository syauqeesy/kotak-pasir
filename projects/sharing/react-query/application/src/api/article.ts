import axios, { AxiosError } from "axios";

export function listArticle(): Promise<APIResponse<Article[]>> {
  return axios("http://127.0.0.1:1323/article", {
    method: "get",
  })
    .then((response) => response.data)
    .catch((error) => {
      if (error instanceof AxiosError && error.response != null) {
        return error.response.data;
      }
    });
}

export function detailArticle(id: string): Promise<APIResponse<Article>> {
  return axios("http://127.0.0.1:1323/article/" + id, {
    method: "get",
  })
    .then((response) => response.data)
    .catch((error) => {
      if (error instanceof AxiosError && error.response != null) {
        return error.response.data;
      }
    });
}

export function createArticle(body: {
  title: string;
  body: string;
}): Promise<APIResponse<Article>> {
  return axios("http://127.0.0.1:1323/article", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
  })
    .then((response) => response.data)
    .catch((error) => {
      if (error instanceof AxiosError && error.response != null) {
        return error.response.data;
      }
    });
}
