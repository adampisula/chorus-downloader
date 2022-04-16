import Difficulty from './Difficulty'
import DifficultyNoteCount from './DifficultyNoteCount'
import LevelsHashes from './LevelsHashes'

interface InstrumentTierAndDiff {
  name: string
  tier: number
  difficulty: DifficultyNoteCount
  hashes: LevelsHashes
}

export default InstrumentTierAndDiff