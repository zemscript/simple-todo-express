const API_BASE = "http://localhost:3000/api/todos";

export const fetchTodos = async () => {
  const responce = await fetch(API_BASE);
  if (!responce) throw new Error("Failed to fetch tasks");
  return responce.json();
};

export const createTodo = async (title: string) => {
  const responce = await fetch(API_BASE, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  if (!responce) throw new Error("Failed to create tasks");
  return responce.json();
};

export const deleteTodo = async (id: number) => {
  const responce = await fetch(`${API_BASE}/${id}`, { method: "DELETE" });
  if (!responce) throw new Error("Failed to delete tasks");
  return responce.json();
};

export const toggleTodo = async (id: number, completed: number) => {
  const responce = await fetch(`${API_BASE}${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed }),
  });
  if (!responce) throw new Error("Failed to update tasks");
  return responce.json();
};
