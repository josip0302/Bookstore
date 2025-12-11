import { Flex, Text } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
    return (
        <Flex
            justifyContent={"center"}
            bg={"green.900"}
            alignItems={"center"}
            position={"absolute"}
            bottom={0}
            width={"100%"}
            height={100}
        >
            <Text color={"white"}>
                @2025 Bookstore. All rights reserved. Created by Josip Dosen
            </Text>
        </Flex>
    );
};

export default Footer;
