import axios from 'axios';

export type AxiosPost = {
  id: number;
  title: string;
  body: string;
};

export async function fetchPostsWithAxios(): Promise<AxiosPost[]> {
  const response = await axios.get<AxiosPost[]>(
    'https://jsonplaceholder.typicode.com/posts?_limit=5',
  );

  return response.data;
}