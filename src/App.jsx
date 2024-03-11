import {Post} from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css'

import './global.css'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/cadugr.png",
      name: "Carlos Eduardo Guerra Resende",
      role: "Coordenador @ Americanas S.A."
    },
    content: [
      {type: "paragraph", content: 'Fala galeraa 👋'},
      {type: "paragraph", content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no na pós Go Expert da FullCycle. O nome do projeto é Multithreading com Go. 🚀'},
      {type: "link", content:'https://github.com/cadugr/desafio-multithreading-go'}
    ],
    publishedAt: new Date('2024-03-07 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayke Brito",
      role: "Educator @ Rocketseat"
    },
    content: [
      {type: "paragraph", content: 'Fala galeraa 👋'},
      {type: "paragraph", content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no na pós Go Expert da FullCycle. O nome do projeto é Multithreading com Go. 🚀'},
      {type: "link", content:'https://github.com/cadugr/desafio-multithreading-go'}
    ],
    publishedAt: new Date('2024-03-10 20:00:00')
  }
]

export function App() {
  //console.log(posts)
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                //key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            ) 
          })}
        </main>
      </div>   
    </div>
  )
}