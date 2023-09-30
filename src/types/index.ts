export interface ICreateToDo {
  title: string;
  description: string;
}

export interface ITodoList {
  title: string;
  description: string;
  id: string;
  isDone: boolean;
  deleteToDo: boolean;
}

export type Card = {
  title: string;
  description: string;
}