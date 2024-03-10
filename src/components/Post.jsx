import { Comment } from './Comment';
import { Avatar } from './Avatar';

import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/diego3g.png"/>
          <div className={styles.authorInfo}>
            <strong>Carlos Eduardo</strong>
            <span>Developer</span>
          </div>
        </div>

        <time title="11 de Maio às 08:13h" dateTime='2022-05-11 08:13:30'>Publicado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no na pós Go Expert da FullCycle. O nome do projeto é Multithreading com Go. 🚀</p>
        <p>👉{' '}<a href="">https://github.com/cadugr/desafio-multithreading-go</a></p>
        <p>
          <a href="">#novoprojeto</a>{' '} 
          <a href=''>#posgoexpert</a>{' '} 
          <a href=''>#fullcycle</a>{' '}
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea 
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form> 
      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/> 
      </div>
    </article>
  )
}