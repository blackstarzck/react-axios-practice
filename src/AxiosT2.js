import Axios from 'axios'
import React, { Component } from 'react'

export class AxiosT2 extends Component {
    state = {
        persons: []
    }
    componentDidMount(){
        Axios.get('url').then(res => {
            this.setState({ persons: res.data})
        })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default AxiosT2
