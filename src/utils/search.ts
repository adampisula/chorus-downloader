import type AdvancedSearchQuery from '../types/AdvancedSearchQuery'
import advancedSearchQueryToString from './advancedSearchQueryToString'

const search = (query: string | AdvancedSearchQuery) => {
  if(typeof query === 'object' && query !== null) {
    query = advancedSearchQueryToString(query)
  }

  
}

export default search