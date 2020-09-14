import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons1: []
  }

  componentDidMount() {
    axios.get(`https://yts.mx/api/v2/list_movies.json`)
      .then(res => {
        const person = res.data.data.movies;
        this.setState({ persons1: person });
        console.log(this.state.persons1)
      })
  }

  render() {
    const { persons1 } = this.state;
    console.log(persons1)
    for(let i = 0; i < 3; ++i){
      const save = persons1[i];
    }
    return (
      <ul>
        { this.state.persons1.map(person => <li>{person.name}</li>)}
      </ul>
    )
  }
}