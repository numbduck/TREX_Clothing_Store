import { Box, Grid, GridItem, Heading, } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { Product } from '../components/product';
import { Filter } from '../components/filter';
import CartContext from '../cartContext';

export const Products = () => {

  const { filteredValue } = useContext(CartContext);
  const [filtered, setFiltered] = filteredValue;




  return (
    <Box w="full" px={{ base: '12', md: '40' }} py={{ base: '6', md: '10' }} alignContent='space-evenly'>
      <Filter />
      <Heading m={{ base: '6', md: '10' }}>Our Collection</Heading>
      <Grid templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={{ base: '3', md: '6' }} >
        {
          filtered.map((item) =>
            <GridItem mb='10'>
              <Product id={item.id} imagePath={item.imageURL} price={item.price} productName={item.name} quantity={item.quantity} >
              </Product></GridItem>)

        }
      </Grid>
    </Box>)
}
