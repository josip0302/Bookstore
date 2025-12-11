"use client";
import { useLinkStatus } from "next/link";
import React, { use, useEffect, useState } from "react";
import { Box, Text, Flex } from "@chakra-ui/react";
import { getBookById } from "@/_hooks/getBookById";
import { Book } from "@/_objects/book";

const page = ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = use(params);

    const [book, setBook] = useState<Book | null>(null);
    useEffect(() => {
        const fetchBook = async () => {
            const data = await getBookById(id);
            setBook(data);
        };
        fetchBook();
    }, [id]);

    return (
        <Box
            padding={4}
            width={400}
            height={500}
            borderColor={"white"}
            borderWidth={2}
            justifyContent={"center"}
            alignItems={"center"}
            borderRadius={8}
            backgroundImage={"url('/knjiga.jpg')"}
            backgroundSize={"cover"}
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            mt={10}
        >
            <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
                mt={20}
                gap={10}
            >
                <Text color={"white"} fontSize={"4xl"} fontWeight={"bold"}>
                    {book ? book.title : "Loading..."}
                </Text>
                <Text color={"white"} fontSize={"2xl"} fontWeight={"bold"}>
                    {book ? book.pageNumber : "Loading..."} pages
                </Text>
                <Text
                    color={"white"}
                    fontSize={"xl"}
                    fontWeight={"bold"}
                    justifyContent={"center"}
                    alignContent={"center"}
                    alignItems={"center"}
                >
                    ISBN: {book ? book.isbn : "Loading..."}
                </Text>
            </Flex>
        </Box>
    );
};

export default page;
