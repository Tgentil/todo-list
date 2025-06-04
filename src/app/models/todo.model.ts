export interface TodoComment {
  id: number;
  text: string;
  createdAt: Date;
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
  description: string;
  comments: TodoComment[];
}
