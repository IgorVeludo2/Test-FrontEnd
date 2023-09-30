import type { ICreateToDo } from '../../types'
import { api }  from '../connection'

export const createTodo = async (todo: ICreateToDo): Promise<void> => {
  const res = await api.post('/todos', {
    title: todo.title,
    description: todo.description
  })
  return
}