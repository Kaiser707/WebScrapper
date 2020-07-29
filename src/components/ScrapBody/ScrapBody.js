import React, {Component} from 'react'
import './ScrapBody.css'

class ScrapBody extends Component {

    constructor(props){
        super(props)
        this.state = {
            textBoxVal: '',
            scrapVal: ''
        }

        this.handleChangeURL = this.handleChangeURL.bind(this)
        this.scrapThat = this.scrapThat.bind(this)
    }

    handleChangeURL = (val) => {
        this.setState({textBoxVal: val})
    }

    scrapThat(){
        
        fetch('/scrap?data=' + this.state.textBoxVal).then(res => res.json()).then(data => {
            this.setState({scrapVal: data.scrapData})
        })
    }
        
    render(){
        return(
            <div className = "centering">
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                
                    <div className = "mainHeader">
                        <input type = "text" placeholder = "Enter URL" className = "urlstyle" onChange = {event => this.setState({textBoxVal: event.target.value})}/>
                        <input type = "button" className = "scrapbutton" value = "Scrape!" onClick = {() => this.scrapThat()}  /><br />
                        <textarea rows = "25" placeholder = "Data will appear here" value = {this.state.scrapVal} className = "scrapvalstyle"/>
                        {/* <p style = {{color:'#ffffff'}}>The Current Time is {this.state.scrapVal}</p>*/}
                    </div>
                           
            </div>
            
                        
        );
    }
}

export default ScrapBody