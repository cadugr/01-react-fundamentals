import {Post} from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post 
            author="Diego fernandes" 
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque nulla explicabo, laudantium tempora neque quas quod nihil porro cum id sit tempore tenetur fugit. Adipisci libero quam a cumque nisi."
          />
          <Post 
            author="Gabriel Buzzi" 
            content="Um novo post muito legal"
          />
        </main>
      </div>   
    </div>
  )
}