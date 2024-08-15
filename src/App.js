// import logo from './logo.svg';
import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'

import './App.css';


const App = () => {

  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([])

  console.log("render")

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => { setMonsters(users)})
  }, 
  [])

  const onSearchChange = (event)=> { 
    const searchFieldString = event.target.value.toLocaleLowerCase()
    setSearchField(searchFieldString)
    }

  const filteredMonsters = monsters.filter((monster)=>{ 
      return monster.name.toLocaleLowerCase().includes(searchField)
  })

  return (
    <div className='App'>
    <h1 className="app-title">Monster Roladex</h1>
    <SearchBox 
      className='monsters-search-box' 
      placeholder="Search Monsters" 
      onChangeHandler={onSearchChange}
      />
    <CardList monsters={filteredMonsters}/>
  </div>

  )
}


// class App2 extends Component {

//   constructor() {
//     super() 

//     this.state = {
//       monsters: [],
//       searchField: ""
//     }

//     console.log("constructor")
//   }

//   onSearchChange = (event)=> { 

//     const searchField = event.target.value.toLocaleLowerCase()

//     this.setState((state, props)=> {
//       return { searchField }
//     })
//   }

//   componentDidMount() {
//     console.log("Did Mount")
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then(response => response.json())
//       .then((users) => this.setState(()=> {
//         return {monsters: users }
//       },
//     ()=> {
//       console.log(this.state)
//     }))
//   }

//   render() {
//     console.log("render")

//     const { monsters, searchField } = this.state;
    

//     const filteredMonsters = monsters.filter((monster)=>{ 
//       return monster.name.toLocaleLowerCase().includes(searchField)
//     })

//     console.log(filteredMonsters)

//     return (

//       <h1></h1>
//     )
//   }
// }

export default App;
