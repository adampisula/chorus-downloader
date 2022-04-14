import type Difficulty from './Difficulty'

interface AdvancedSearchQuery {
  name?: string
  artist?: string
  album?: string
  genre?: string
  charter?: string
  md5?: string

  tier_band?: number
  tier_guitar?: number
  tier_bass?: number
  tier_rhythm?: number
  tier_drums?: number
  tier_vocals?: number
  tier_keys?: number
  tier_guitarghl?: number
  tier_bassghl?: number

  diff_guitar?: Difficulty
  diff_bass?: Difficulty
  diff_rhythm?: Difficulty
  diff_drums?: Difficulty
  diff_keys?: Difficulty
  diff_guitarghl?: Difficulty
  diff_bassghl?: Difficulty

  hasForced?: boolean
  hasOpen?: boolean
  hasTap?: boolean
  hasSections?: boolean
  hasStarPower?: boolean
  hasSoloSections?: boolean
  hasStems?: boolean
  hasVideo?: boolean
  hasLyrics?: boolean
}

export default AdvancedSearchQuery