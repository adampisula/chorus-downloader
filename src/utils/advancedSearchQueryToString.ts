import type AdvancedSearchQuery from '../types/AdvancedSearchQuery'
import type Difficulty from '../types/Difficulty'

const advancedSearchQueryToString = (query: AdvancedSearchQuery): string => {
  let returnQuery = ''

  const noQuotesRule = ['md5', 'tier_band', 'tier_guitar', 'tier_bass', 'tier_rhythm', 'tier_drums', 'tier_vocals', 'tier_keys', 'tier_guitarghl', 'tier_bassghl', 'diff_guitar', 'diff_bass', 'diff_rhythm', 'diff_drums', 'diff_keys', 'diff_guitarghl', 'diff_bassghl', 'hasForced', 'hasOpen', 'hasTap', 'hasSections', 'hasStarPower', 'hasSoloSections', 'hasStems', 'hasVideo', 'hasLyrics']

  for(const key in query) {
    if(noQuotesRule.includes(key)) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      returnQuery += `${key}=${query[key]} `
    } else {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      returnQuery += `${key}="${query[key]}" `
    }
  }

  returnQuery = returnQuery.slice(0, -1)

  return returnQuery
}

export default advancedSearchQueryToString