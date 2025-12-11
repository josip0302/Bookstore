"use client";
import { addNewBook } from "@/_hooks/addNewBook";
import {
    Button,
    Field,
    Fieldset,
    Input,
    Stack,
    Textarea,
} from "@chakra-ui/react";
import { useState } from "react";

const BookForm = () => {
    const [newBook, setNewBook] = useState({
        title: "",
        pageNumber: "",
        isbn: "",
    });

    const handleSubmit = () => {
        const submitBook = async () => {
            await addNewBook({
                title: newBook.title,
                pageNumber: Number(newBook.pageNumber),
                isbn: newBook.isbn,
            });
        };
        submitBook();
        setNewBook({ title: "", pageNumber: "", isbn: "" });
    };
    return (
        <Fieldset.Root
            size="lg"
            color={"white"}
            as="form"
            bg={"green.800"}
            borderColor={"white"}
            borderWidth={1}
            padding={6}
        >
            <Stack>
                <Fieldset.Legend color={"white"}>
                    Enter new Book
                </Fieldset.Legend>
            </Stack>

            <Fieldset.Content>
                <Field.Root required>
                    <Field.Label>
                        Title <Field.RequiredIndicator />
                    </Field.Label>
                    <Input
                        type="text"
                        name="title"
                        placeholder="Enter book title"
                        value={newBook.title}
                        onChange={(e) => {
                            setNewBook({ ...newBook, title: e.target.value });
                        }}
                    />
                </Field.Root>
                <Field.Root required>
                    <Field.Label>
                        Page number <Field.RequiredIndicator />
                    </Field.Label>
                    <Input
                        type="number"
                        name="pageNumber"
                        placeholder="Enter number of pages book contains"
                        value={newBook.pageNumber}
                        onChange={(e) => {
                            setNewBook({
                                ...newBook,
                                pageNumber: e.target.value,
                            });
                        }}
                    />
                </Field.Root>
                <Field.Root required>
                    <Field.Label>
                        International Standard Book Number(isbn)
                        <Field.RequiredIndicator />
                    </Field.Label>
                    <Input
                        type="text"
                        name="isbn"
                        placeholder="Enter ISBN"
                        value={newBook.isbn}
                        onChange={(e) => {
                            setNewBook({ ...newBook, isbn: e.target.value });
                        }}
                    />
                </Field.Root>
            </Fieldset.Content>

            <Button
                type="submit"
                alignSelf="flex-center"
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </Fieldset.Root>
    );
};

export default BookForm;
