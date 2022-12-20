import { Box, Button, Divider, Flex, Grid, GridItem, Heading, Table, TableContainer, Tbody, Td, Text, Tfoot, Th, Thead, Tr } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../cartContext'
import { CartItem } from '../components/cartItem'
import { IoMdArrowRoundForward } from "react-icons/io";

export const Cart = () => {
  const { cartValue } = useContext(CartContext)
  const [cart] = cartValue
  const [total, setTotal] = useState(0)


  // cart Total value:
  useEffect(() => setTotal(cart.reduce((acc, item) => acc + item.price, 0)), [cart])

  return (
    <Box w="full" px={{ base: '12', md: '40' }} py={{ base: '6', md: '10' }} >
      <Heading mb='10'>Your Shopping Cart</Heading>
      <Flex flexDirection={{ base: 'column', md: 'row' }} justifyContent='space-between'>
        <Grid w={{ base: '90%', md: '65%' }} templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }} gap={{ base: '3', md: '6' }} >
          {
            cart.map((item) =>
              <GridItem mb='10'>
                <CartItem id={item.id} imagePath={item.imagePath} price={item.price} productName={item.productName} quantity={item.quantity} >
                </CartItem></GridItem>)

          }
        </Grid> <Flex w={{ base: '80%', md: '30%' }} flexDirection='column' justify='initial' align='flex-start' >
          <TableContainer>
            <Table size={{ base: 'sm', md: 'lg' }} variant='striped' colorScheme='blue'>
              <Thead>
                <Tr>
                  <Th fontSize='20px'>Cart Total</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>SubTotal</Td>
                  <Td>₹{total}</Td>
                </Tr>
                <Tr>
                  <Td>Sales Tax</Td>
                  <Td>₹0</Td>
                </Tr>
                <Tr>npm run build
                  <Td>Coupon Code</Td>
                  <Td><u>Apply coupon</u></Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr >
                  <Th fontSize='17px'>Grand Total</Th>
                  <Th fontSize='17px'>₹{total}</Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
          <Button rightIcon={<IoMdArrowRoundForward />} variant={(total == 0) ? 'ghost' : 'solid'} colorScheme='blue' mt='5'>Checkout</Button>
        </Flex>
      </Flex>
    </Box>
  )
}
