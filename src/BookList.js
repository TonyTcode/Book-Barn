import React, {Component} from 'react'

class BookList extends Component {


    render() {

        let bookItems = this.props.books.map(book => {
            return <div>{book.title}</div>
        })

        return <div>{bookItems}</div>
    }

}

export default BookList