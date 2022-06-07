interface DownloadStatus {
  hash: string
  status?: 'WAITING' | 'DOWNLOADING' | 'DOWNLOADED'
  progress?: number
}

export default DownloadStatus