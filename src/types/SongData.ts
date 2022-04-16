import type NoteCounts from './NoteCounts'

interface ParentSource {
  link: string
  name: string
}

interface Source {
  id: number
  name: string
  link: string
  parent: ParentSource
  isSetList: boolean
}

interface LevelsHashes {
  e?: string
  m?: string
  h?: string
  x?: string
}

interface Hashes {
  band?: LevelsHashes
  guitar?: LevelsHashes
  bass?: LevelsHashes
  rhythm?: LevelsHashes
  drums?: LevelsHashes
  vocals?: LevelsHashes
  keys?: LevelsHashes
  guitarghl?: LevelsHashes
  bassghl?: LevelsHashes
  
  file: string
}

interface SongData {
  id: number

  name: string
  artist: string
  album: string
  genre: string
  year: string

  charter: string

  length: number
  effectiveLength: number

  tier_band: number | null
  tier_guitar: number | null
  tier_bass: number | null
  tier_rhythm: number | null
  tier_drums: number | null
  tier_vocals: number | null
  tier_keys: number | null
  tier_guitarghl: number | null
  tier_bassghl: number | null

  diff_guitar: number | null
  diff_bass: number | null
  diff_rhythm: number | null
  diff_drums: number | null
  diff_keys: number | null
  diff_guitarghl: number | null
  diff_bassghl: number | null

  isPack: boolean
  hasForced: boolean
  hasOpen: any // CHANGE THIS IN THE FUTURE
  hasTap: boolean
  hasSections: boolean
  hasStarPower: boolean
  hasSoloSections: boolean
  is120: boolean
  hasStems: boolean
  hasVideo: boolean
  hasLyrics: boolean
  hasNoAudio: boolean

  needsRenaming: boolean
  isFolder: boolean
  hasBrokenNotes: boolean
  hasBackground: boolean

  noteCounts: NoteCounts
  lastModified: string
  uploadedAt: string

  link: string
  directLinks: any // CHANGE THIS IN THE FUTURE

  sources: Source[]
  hashes: Hashes
}

export default SongData