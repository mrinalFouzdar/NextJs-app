"use client"
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
        <h1> Joy maa tara</h1>
        <button onClick={()=> alert('hello')}>click on me</button>
    </main>
  )
}
