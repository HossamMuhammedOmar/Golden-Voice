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
