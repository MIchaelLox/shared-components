export interface ApiOptions extends RequestInit {
  baseUrl?: string;
}

const DEFAULT_BASE_URL = "https://dummyjson.com"; // placeholder API

export async function apiGet<T>(
  path: string,
  { baseUrl = DEFAULT_BASE_URL, ...init }: ApiOptions = {},
): Promise<T> {
  const res = await fetch(`${baseUrl}${path}`, {
    method: "GET",
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...(init.headers || {}),
    },
  });

  if (!res.ok) {
    throw new Error(`API error: ${res.status} ${res.statusText}`);
  }

  return res.json() as Promise<T>;
}

// Example typed call for documentation/demo
export interface ExampleTodo {
  id: number;
  todo: string;
  completed: boolean;
}

export async function fetchExampleTodos(): Promise<ExampleTodo[]> {
  const data = await apiGet<{ todos: ExampleTodo[] }>("/todos?limit=5");
  return data.todos;
}
