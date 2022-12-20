import { Box, Button, ButtonGroup, Flex, FormControl, Input, InputGroup, InputRightElement, Menu, MenuButton, MenuItem, MenuList, Select, Spacer } from '@chakra-ui/react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { AiOutlineSearch, AiOutlineDown } from 'react-icons/ai'
import CartContext from '../cartContext';

export const Filter = () => {
    const { filteredValue, activeValue, dataValue, queryValue } = useContext(CartContext);
    const [data, setData] = dataValue;
    const [filtered, setFiltered] = filteredValue;
    const [activegender, setActivegender] = activeValue;
    const [query, setQuery] = queryValue

    // the below section is for sort
    useEffect(() => {
        const sort = data.filter((item) => item.gender.includes(activegender))
        setFiltered(sort);
    }, [activegender])

    // the below section is for search
    const handlechange = (event) => setQuery(event.target.value)
    useEffect(() => {
        const sort = data.filter(
            (item) => item.name.toLowerCase().includes(query.toLowerCase())
                || item.type.toLowerCase().includes(query.toLowerCase())
                || item.color.toLowerCase().includes(query.toLowerCase()))
        setFiltered(sort);
    }, [query])

    // the below section is for price sorting
    const sortByPriceL = () => {
        const userCopy = [...data]
        userCopy.sort((A, B) => {
            return A.price - B.price;
        }
        );
        setFiltered(userCopy);
    };
    const sortByPriceH = () => {
        const userCopy = [...data]
        userCopy.sort((A, B) => {
            return B.price - A.price;
        }
        );
        setFiltered(userCopy);
    };

    return (
        <>
            <Flex minWidth='max-content' alignItems='center' gap='2' mb={{ base: '3', md: '6' }} >
                <ButtonGroup gap={2} w='50%'>
                    <Button p={2} variant='outline' colorScheme='teal' onClick={() => setActivegender("en")}>All</Button>
                    <Button p={2} variant={activegender == 'Men' ? 'solid' : 'outline'} colorScheme='teal' onClick={() => setActivegender("Men")}>Men</Button>
                    <Button p={2} variant={activegender == 'men' ? 'solid' : 'outline'} colorScheme='teal' onClick={() => setActivegender("men")}>Women</Button>
                </ButtonGroup>

                <Menu color='teal' w={{ base: '25%', md: '30%' }}>
                    <MenuButton as={Button} variant='solid' colorScheme='teal' rightIcon={<AiOutlineDown />}>
                        Sort by Price
                    </MenuButton>
                    <MenuList zIndex={10}>
                        <MenuItem onClick={sortByPriceL}>Low to high</MenuItem>
                        <MenuItem onClick={sortByPriceH}>High to low</MenuItem>
                    </MenuList>
                </Menu>

            </Flex>
            <Box minWidth='max-content' alignItems='center' gap='2' mb={{ base: '3', md: '8' }} >
                <InputGroup w={{ base: '80%', md: '50%' }}>
                    <Input placeholder='search..' onChange={handlechange} variant='outline'></Input>
                    <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm'><AiOutlineSearch color='teal' />
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Box>
        </>
    )
}
