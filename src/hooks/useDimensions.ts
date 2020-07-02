import { useEffect, useState } from 'react'

interface Dimensions {
  width: number
  height: number
}

export const useDimensions = (): Dimensions => {
  const [dimentions, setDimentions] = useState({} as Dimensions)

  useEffect(() => {
    if (window) {
      const { innerWidth, innerHeight } = window

      setDimentions({
        height: innerHeight,
        width: innerWidth,
      })
    }
  }, [])

  return dimentions
}
