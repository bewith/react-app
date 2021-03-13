import { Table, TableContainer, TableHead, TableCell, TableBody, TableRow, Paper, IconButton } from "@material-ui/core";
import { useEffect, useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import BookAddIcon from "./BookAddIcon";

function BookList() {
    const [books, setBooks] = useState([]);
    // fetch from api
    function fetchBooks() {
        fetch('http://localhost:8080/api/books')
        .then(res => res.json())
        .then(res => {
            setBooks(res);
        })
        .catch(err => {
            console.log(err);
        })
    }

    
    function deleteBook(id) {
        fetch('http://localhost:8080/api/books/' + id, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            fetchBooks();
        })
        .catch(err => {
            console.log(err);
        });

    }
    // setBooks
    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div>
            <h1>BookList</h1>
            <TableContainer component={Paper}>
                <Table area-label="book table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Author</TableCell>
                            <TableCell align="left">URL</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {books.map((book, i) => (
                            <TableRow key={i}>
                                <TableCell>{book.name}</TableCell>
                                <TableCell>{book.author}</TableCell>
                                <TableCell>
                                    <a href={book.url} target="_blank" rel="noreferrer" >{book.url}</a>
                                </TableCell>
                                <TableCell align="right" padding="checkbox">
                                    <IconButton aria-label="delete" onClick={() => deleteBook(book.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))} 
                    </TableBody>
                </Table>
            </TableContainer>
            <BookAddIcon />
        </div>
    );
}

export default BookList;
