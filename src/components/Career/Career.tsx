import React, { useLayoutEffect, useState } from 'react'
import s from './Career.module.scss'
import * as t from '../../@types'
import { useDimensions } from '../../hooks/useDimensions'
import { Experience } from './Experience'

interface CareerProps {
  firstColumn: t.Experience
  secondColumn: t.Experience
}

export const Career = ({ firstColumn, secondColumn }: CareerProps) => {
  const { width } = useDimensions()
  const [responsive, setResponsive] = useState(true)

  useLayoutEffect(() => {
    if (width >= 1024) {
      setResponsive(false)
    }
  }, [width])

  return (
    <>
      {!responsive && (
        <section className={s.container}>
          <Experience
            title={firstColumn.title}
            activities={firstColumn.activities}
          />
          <Experience
            title={secondColumn.title}
            activities={secondColumn.activities}
          />
        </section>
      )}
      {responsive && (
        <>
          <section>
            <Experience
              title={firstColumn.title}
              activities={firstColumn.activities}
            />
          </section>
          <section>
            <Experience
              title={secondColumn.title}
              activities={secondColumn.activities}
            />
          </section>
        </>
      )}
    </>
  )
}
