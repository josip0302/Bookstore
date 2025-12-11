import api from "@/_lib/api";
import type { Book } from "@/_objects/book";

export async function getAllBooks(): Promise<Book[]> {
    try {
        const response = await api.get<Book[]>("/api/books");
        return response.data;
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
}
