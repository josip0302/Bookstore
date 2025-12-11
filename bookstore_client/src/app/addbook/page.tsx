import BookForm from "@/_components/BookForm";
import { Box } from "@chakra-ui/react";
import React from "react";

const page = () => {
    return (
        <Box p={20} w={500}>
            <BookForm />
        </Box>
    );
};

export default page;
