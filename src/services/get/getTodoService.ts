import { api } from '../connection'
import type { ITodoList } from '../../types'

export const getAll = async (): Promise<ITodoList[]> => {
  const res = await api.get('/todos').then(function(response){
    return response.data
  }).catch(function (error) {
    if(error.response) {
      return { error: error.response.status }
    }else if(error.request ) {
      return { error: error.request }
    }else {
      return { error: error.message }
    }
  })
  return res
}