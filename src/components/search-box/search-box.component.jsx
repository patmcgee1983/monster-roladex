import { Component } from "react";

class SearchBox extends Component {
    constructor() {
        super()
    }

    render() {
        const { onSearchChange } = this

        return (
            <div>
                <input 
                    className={this.props.className}
                    type='search' 
                    placeholder={this.props.placeholder} 
                    onChange={this.props.onChangeHandler}
                />
            </div>
        )
    }
}

export default SearchBox;