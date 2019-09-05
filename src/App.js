import React,{Component} from 'react';
import './App.css';
import BookList from './BookList';
import BookForm from './BookForm'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      books: [],
    }
    this.fetchBooks()
  }

  fetchBooks = () => {

    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    .then(response => response.json())
    .then(books => {
      
      this.setState({
        books: books,
      })
    })
  }

  
  








  render() {

    return (
      <div>
        <BookList books = {this.state.books} />
        <BookForm  onSubmit = {this.handleSubmit}/>
      </div>
      
    )
  }
}


export default App;
