import React, {Component} from 'react'

class BookForm extends Component {

    constructor() {
        super()
        this.state = {
            title: '',
            genre: '',
            publisher: '',
            year: '',
            imageUrl: '',
        }
    }

    handleTextBoxChange = (e) => {

        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state.title,this.state.genre, this.state.publisher, this.state.year, this.state.imageUrl)
    }




    render() {
        return <div>
            <hr />
            <input name="title" placeholder="Enter Title" onChange={this.handleTextBoxChange}/>
            <input name="genre" placeholder="Enter Genre" onChange={this.handleTextBoxChange}/>
            <input name="publisher" placeholder="Enter Publisher" onChange={this.handleTextBoxChange}/>
            <input name="year" placeholder="Enter Year" onChange={this.handleTextBoxChange}/>
            <input name="imageUrl" placeholder="Enter ImageUrl" onChange={this.handleTextBoxChange}/>
            <button onClick={this.handleSubmit}>Submit</button>
            <hr />
        </div>

        
        

    }

}

export default BookForm