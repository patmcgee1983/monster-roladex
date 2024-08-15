import { Component } from "react";
import './search-box.style.css'

class SearchBox extends Component {
    constructor() {
        super()
    }

    render() {
        const { onSearchChange } = this

        return (
            <div>
                <input 
                    className={`search-box ${this.props.className}`}
                    type='search' 
                    placeholder={this.props.placeholder} 
                    onChange={this.props.onChangeHandler}
                />
            </div>
        )
    }
}

export default SearchBox;