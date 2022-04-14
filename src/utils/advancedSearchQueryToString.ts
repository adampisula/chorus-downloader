import type AdvancedSearchQuery from '../types/AdvancedSearchQuery'
import type Difficulty from '../types/Difficulty'

const advancedSearchQueryToString = (query: AdvancedSearchQuery): string => {
  let returnQuery = ''

  const noQuotesRule = ['md5']
  const addGtBeforeRule = ['tier_band', 'tier_guitar', 'tier_bass', 'tier_rhythm', 'tier_drums', 'tier_vocals', 'tier_keys', 'tier_guitarghl', 'tier_bassghl']
  const difficultyToNumberRule = ['diff_guitar', 'diff_bass', 'diff_rhythm', 'diff_drums', 'diff_keys', 'diff_guitarghl', 'diff_bassghl']
  const booleanToZeroOrOneRule = ['hasForced', 'hasOpen', 'hasTap', 'hasSections', 'hasStarPower', 'hasSoloSections', 'hasStems', 'hasVideo', 'hasLyrics']

  for(const key in query) {
    if(noQuotesRule.includes(key)) {
      // @ts-ignore
      returnQuery += `${key}=${query[key]} `
    } else if(addGtBeforeRule.includes(key)) {
      // @ts-ignore
      returnQuery += `${key}=gt${query[key]} `
    } else if(difficultyToNumberRule.includes(key)) {
      // @ts-ignore
      const difficultyObject: Difficulty = query[key]
      let difficultyNumber = 0

      if(difficultyObject.e) {
        difficultyNumber += 1
      }

      if(difficultyObject.m) {
        difficultyNumber += 2
      }

      if(difficultyObject.h) {
        difficultyNumber += 4
      }

      if(difficultyObject.x) {
        difficultyNumber += 8
      }

      returnQuery += `${key}=${difficultyNumber} `
    } else if(booleanToZeroOrOneRule.includes(key)) {
      // @ts-ignore
      returnQuery += `${key}=${(query[key]) ? 1 : 0} `
    } else {
      // @ts-ignore
      returnQuery += `${key}=${query[key]} `
    }
  }

  returnQuery = returnQuery.slice(0, -1)

  return returnQuery
}

export default advancedSearchQueryToString