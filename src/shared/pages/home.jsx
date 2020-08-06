import React from 'react'
import homeStyles from './home.module.scss'
import Section1 from '../components/Section-1'
import Section2 from '../components/Section-2'
import Section3 from '../components/Section-3'

export default function home() {
  return (
    <div className={homeStyles.main}>
      <section className={homeStyles.section}>
        <Section1 />
      </section>
      <section className={homeStyles.section}>
        <Section2 />
      </section>
      <section className={homeStyles.section}>
        <Section3 />
      </section>
    </div>
  )
}
