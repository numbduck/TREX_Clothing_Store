import { Button, Divider, Flex, Heading, HStack, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import CartContext from '../cartContext';

const Header = () => {
  const { cartValue } = useContext(CartContext)
  const [cart] = cartValue
  return (
    <>
      <Flex
        px={{ base: '4', md: '10' }}
        py={{ base: '4', md: '8' }}
        width="full"
        bg="gray.200"
        alignItems="flex-end"
        justifyContent="space-between">

        <Flex w={["60%", "50%", "30%", "20%"]}>
          <Heading color='blue.900'><Link to='/'>TeeRex.</Link></Heading>
        </Flex>
        <Flex>
          <HStack color="blue.800" fontWeight="semibold" spacing="40px" fontSize="20px">
            <Text display={{ base: 'none', md: 'flex' }}><Link to='/'>Products</Link></Text>
            <Button variant='outline' fontSize='20px' rightIcon={<AiOutlineShoppingCart />}><Link to='/cart'>Cart({cart.length})</Link></Button>
          </HStack>
        </Flex>
      </Flex>
      <Divider orientation='horizontal' /></>
  )
}

export default Header