import React from 'react'
import s from './Contact.module.scss'

interface Column {
  title: string
  rows: string[]
}

export interface ContactPros {
  columns: Column[]
}

export const Contact = ({ columns }: ContactPros) => (
  <div className={s.container}>
    {columns.map((column) => (
      <div key={column.title} className={s.column}>
        <h1 className={s.title}>{column.title}</h1>
        {column.rows.map((row) => (
          <span className={s.row} key={row}>
            {row}
          </span>
        ))}
      </div>
    ))}
  </div>
)
