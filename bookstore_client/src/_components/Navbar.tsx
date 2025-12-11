"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { color, motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react/";
import { link } from "framer-motion/m";
import path from "path";
import { usePathname } from "next/navigation";

const navLinks = [
    { name: "Home", path: "/" },
    { name: "Add Book", path: "/addbook" },
];

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const toggleNav = () => {
        setNav(!nav);
    };

    const closeNav = () => {
        setNav(false);
    };

    const handleContactClick = () => {
        router.push("/contact");
    };

    const menuVariants = {
        open: {
            x: 0,
            transition: {
                stiffness: 20,
                damping: 15,
            },
        },
        closed: {
            x: "-100%",
            transition: {
                stiffness: 20,
                damping: 15,
            },
        },
    };
    return (
        <Flex
            justifyContent={"space-between"}
            bg={"green.900"}
            alignItems={"center"}
        >
            <Flex
                display={{ base: "none", md: "flex" }}
                alignItems={"center"}
                gap={10}
                padding={5}
            >
                <Text
                    color={"white"}
                    fontSize={"3xl"}
                    fontWeight={"bold"}
                    fontFamily="cursive"
                >
                    Bookstore
                </Text>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.path}
                        style={{ color: "white" }}
                    >
                        <p>{link.name}</p>
                        {pathname === link.path && (
                            <Flex
                                flexDirection="column"
                                gap={2}
                                position={"relative"}
                            >
                                <div className="absolute w-full h-1 transition-all duration-300 ease-out bg-yellow-500 rounded full group-hover:!w-full"></div>
                                <div className=" !mt-2 absolute w-3/4 h-1 transition-all duration-300 ease-out bg-yellow-500 rounded full group-hover:!w-full"></div>
                            </Flex>
                        )}
                    </Link>
                ))}
            </Flex>
            <Flex
                display={{ base: "none", md: "flex" }}
                alignItems={"center"}
                gap={10}
                padding={5}
            ></Flex>
            <Box padding={2} display={{ base: "block", md: "none" }}>
                <Image
                    src="/logo.jpeg"
                    alt="Logo"
                    boxSize="100px"
                    borderRadius={""}
                />
            </Box>
            <Box
                display={{ base: "block", md: "none" }}
                padding={10}
                justifyContent={"center"}
                alignItems={"center"}
                onClick={toggleNav}
            >
                {nav ? (
                    <AiOutlineClose size={40} color={"white"} />
                ) : (
                    <AiOutlineMenu size={40} color={"white"} />
                )}
            </Box>
            <motion.div
                initial={false}
                animate={nav ? "open" : "closed"}
                variants={menuVariants}
                className="fixed left-0 top-29  !w-full text-white  !z-50 bg-black/90 "
            >
                <ul className="!text-4xl !font-semibold !my-20 !text-center !space-y-10">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link href={link.path} onClick={closeNav}>
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <li></li>
                </ul>
            </motion.div>
        </Flex>
    );
};

export default Navbar;
