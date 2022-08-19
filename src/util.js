export const playNewAudio = (allQuran, audio, setQuran) => {
  const newClip = allQuran.map(q => {
    if (audio.id === q.id) {
      return {
        ...q,
        active: true,
      }
    } else {
      return {
        ...q,
        active: false,
      }
    }
  })

  setQuran(newClip)
}

export const activeLibraryHandler = (
  allQuran,
  activeQuran,
  setQuran,
  soundInfo
) => {
  playNewAudio(allQuran, activeQuran, setQuran)
  soundInfo.animationPercentage = 0
}
