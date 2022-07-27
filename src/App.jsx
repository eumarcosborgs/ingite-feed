import { Header } from "./components/Header" 
import { Sidebar } from "./components/Sidebar";
import { Post } from "./components/Post"

import styles from './App.module.css';

import './global.css';

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post 
            author="Marcos Paulo" 
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt modi possimus quam, dolore officia quas dicta sit molestiae non accusantium consequuntur? Velit officia delectus corporis repellat eveniet rem facere molestiae."
          />
          
          <Post
            author="Marcos Paulo"
            content="Um, novo post"
          />
        </main>
      </div>
    </>
  )
}

export default App
