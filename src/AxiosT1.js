import React, { Component } from 'react';
import axios from 'axios';
const api = axios.create({
    baseURL: 'https://yts.mx/api/v2/list_movies.json',
});

export class AxiosT1 extends Component {
    state = {
        courses: []
    }
    constructor(){
        super();
        api.get('/').then(res => {
            this.setState({ courses: res.data.data.movies})
            console.log(this.state.courses)
        })
        this.getCourses();
    }
    getCourses = async () => {
        let data = await axios({
            method: 'get',
            url: 'https://yts.mx/api/v2/list_movies.json'
        }).then(({ data }) => data);
        this.setState({ course: data })
    }

    render() {
        const { courses } = this.state;
        console.log(courses[1])
        return (
        <div>{courses.map(course => <li>{course.title}</li>)}</div>
        )
    }
}

export default AxiosT1
