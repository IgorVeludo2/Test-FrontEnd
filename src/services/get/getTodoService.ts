import { api } from '../connection'
import type { ITodoList } from '../../types'

export const getAll = async (): Promise<ITodoList[]> => {
  const res = await api.get('/todos').then(function(response){
    return response.data
  }).catch(function (error) {
    throw new Error(`${error}`)
  })
  return res
}