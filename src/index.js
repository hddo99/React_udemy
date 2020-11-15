import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
class App extends React.Component {
    state = { lat: null, errorMessage: ''}

    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position) =>  this.setState({ lat: position.coords.latitude}), 
            (err) => this.setState({ errorMessage: err.message })
        )
    }

    componentDidUpdate(){

    }
    render(){
        
        return(
            <div>
                {(!this.state.errorMessage && !this.state.lat) 
                    ? <Spinner message="Please accept location request"/>
                    : (!this.state.lat && this.state.errorMessage) ? <div>Error: {this.state.errorMessage}</div>  : <SeasonDisplay lat={this.state.lat}/>
                }
            </div>
          
        )
        // if(this.state.errorMessage && !this.state.lat) return <div>Error: {this.state.errorMessage}</div>

        // if(!this.state.errorMessage && this.state.lat)
        //     return <SeasonDisplay lat={this.state.lat}/>

        
    
    }
}
ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)