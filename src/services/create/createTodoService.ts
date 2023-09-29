import type { ICreateToDo } from '../../types'
import { api }  from '../connection'

export const createTodo = async (todo: ICreateToDo) => {
  const res = await api.post('/todos', {
    title: todo.title,
    description: todo.description
  })
  console.log(res)
}