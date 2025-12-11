import api from "@/_lib/api";
import type { Book } from "@/_objects/book";
import CreateBook from "@/_objects/createBook";

export async function addNewBook(book: CreateBook): Promise<Book | null> {
    try {
        const response = await api.post<Book>("/api/books", book);
        return response.data;
    } catch (error: any) {
        alert("Error adding new book:" + error.message);
        return null;
    }
}
