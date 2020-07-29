import React, {Component} from 'react'
import './ScrapHeader.css'

class ScrapHeader extends Component {
    render(){
        return(
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                <div className = "headback">
                    <h1 className="header1">Web Scraper</h1>
                </div>
            </div>
            
            
        )
    }
}

export default ScrapHeader