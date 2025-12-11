import api from "@/_lib/api";
import type { Book } from "@/_objects/book";

export async function getBookById(id: string): Promise<Book | null> {
    try {
        const response = await api.get<Book>(`/api/books/${id}`);
        return response.data;
    } catch (error: any) {
        alert("Error fetching book by ID:" + error.message);
        return null;
    }
}
