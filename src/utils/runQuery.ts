import type AdvancedSearchQuery from '../types/AdvancedSearchQuery'
import advancedSearchQueryToString from './advancedSearchQueryToString'
import { apiUrl } from '../config'
import SongData from '@/types/SongData'

import ExampleSongList from '@/ExampleSongList'

const runQuery = (query: string): Promise<SongData[]> => {
  if(typeof query === 'object' && query !== null) {
    query = advancedSearchQueryToString(query)
  }

  return new Promise((resolve, reject) => {
    fetch(`${apiUrl}/${query}`, { mode: 'cors' }).then((apiResp) => {
      apiResp.json().then((parsedResp) => {
        resolve(parsedResp.songs)
      }).catch((err) => {
        reject(err)
      }).catch((err) => {
        reject(err)
      })
    })
  })
}

export default runQuery