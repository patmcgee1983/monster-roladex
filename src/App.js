import logo from './logo.svg';

import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component'

import './App.css';

class App extends Component {

  constructor() {
    super() 

    this.state = {
      monsters: [],
      searchField: ""
    }

    console.log("constructor")
  }

  onSearchChange = (event)=> { 

    const searchField = event.target.value.toLocaleLowerCase()

    this.setState((state, props)=> {
      return { searchField }
    })
  }

  componentDidMount() {
    console.log("Did Mount")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then((users) => this.setState(()=> {
        return {monsters: users }
      },
    ()=> {
      console.log(this.state)
    }))
  }

  render() {
    console.log("render")

    const { monsters, searchField } = this.state;
    

    const filteredMonsters = monsters.filter((monster)=>{ 
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    console.log(filteredMonsters)

    return (
      <div className='App'>
        <SearchBox className="search-box" placeholder="Search Monsters" onChangeHandler={this.onSearchChange}/>
        <CardList monsters={filteredMonsters}/>
      </div>

    );
  }
}

export default App;
