import { Header } from "./components/Header";
import { Offer } from "./components/Offer";
import { IngredientsContainer } from "./components/IngredientsContainer";

import styles from './App.module.scss'

export function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Offer />
        <IngredientsContainer />
      </main>
    </>
  )
}
