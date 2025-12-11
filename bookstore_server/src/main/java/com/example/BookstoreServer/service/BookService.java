package com.example.BookstoreServer.service;

import com.example.BookstoreServer.entity.Book;
import com.example.BookstoreServer.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;


@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public Book createBook(Book book) {
        Book book1=bookRepository.save(book);
        return book1;

    }

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book getBookById(Integer id) {
        Optional<Book> book=bookRepository.findById(id);
        if(book.isPresent()) {
            return book.get();
        }else {
            return null;
        }

    }

}
