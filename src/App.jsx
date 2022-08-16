import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const person = {
    tittle:'Datos personales',
    name: 'Douglas',
    age:31,
    favoriteMovie:'Muchas',
    favoriteMusic:'Muchas'
  }
  const hobbies = {
    tittle: 'hobbies ',
    list: [ 'Música', 'jugar futbol', 'Películas'],
    number:2,
  }
  const favoriteFood = {
    tittle: 'Mi comida favorita',
    list: [ 'sopa de mondongo', 'pizza', 'pasta'],
    number:3,
   
  }
  const miStackTech = {
    tittle: 'Mi stack tech',
    list: [ 'Js', 'HTML', 'CSS'],
    number:4,
  }
  return (
    <div className="App">
      <div className="articulos">
       <article className='datos'>
         <h2>{person.tittle}</h2>
     <ul>
       <li>Nombre:<span>{person.name}</span></li>
       <li>Age:<span>{person.age}</span></li>
       <li>Pelucula Favorita: <span>{person.favoriteMovie}</span></li>
       <li>Musica Favorita:<span>{person.favoriteMusic}</span></li>
     </ul>
      </article>
         <Card objInfo={hobbies} />
         <Card objInfo={favoriteFood} />
         <Card objInfo={miStackTech} />
        </div>
    </div>
  )
}

export default App
