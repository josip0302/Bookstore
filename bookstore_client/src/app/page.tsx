"use client";
import { Flex, Table, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getAllBooks } from "@/_hooks/getAllBooks";

export default function Home() {
    const router = useRouter();
    const [books, setBooks] = useState<any[]>([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const data = await getAllBooks();
            setBooks(data);
        };
        fetchBooks();
    }, []);
    return (
        <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            gap={20}
        >
            <Text
                color={"white"}
                fontSize={"4xl"}
                fontWeight={"bold"}
                marginTop={10}
            >
                Table of Books
            </Text>
            <Table.Root
                colorScheme="teal"
                size="lg"
                interactive
                p={10}
                colorPalette="green"
                variant={"outline"}
                width={"50vw"}
            >
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>Title</Table.ColumnHeader>
                        <Table.ColumnHeader>Page Number</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign="end">
                            ISBN
                        </Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {books.map((book, index) => (
                        <Table.Row
                            key={index}
                            cursor={"pointer"}
                            onClick={() => {
                                router.push(`/${book.id}`);
                            }}
                        >
                            <Table.Cell>{book.title}</Table.Cell>
                            <Table.Cell>{book.pageNumber}</Table.Cell>
                            <Table.Cell textAlign="end">{book.isbn}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </Flex>
    );
}
