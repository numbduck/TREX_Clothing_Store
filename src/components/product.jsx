import { AspectRatio, Box, Button, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { useContext } from 'react';
import CartContext from '../cartContext';

export const Product = ({ imagePath, productName, price, id, quantity }) => {
    const { cartValue } = useContext(CartContext)
    const [cart, setCart] = cartValue
    return (
        <Card maxW='sm' _hover={{ background: "gray.100" }}>
            <CardBody>
                <AspectRatio ratio={8 / 7}>
                    <Image
                        src={imagePath}
                        alt={productName}
                        objectFit='cover'
                        borderRadius='lg'
                    /></AspectRatio>
                <Stack mt='6' spacing='3'>
                    <Heading size='sm' color='gray.500'>{productName}</Heading>
                    <Text color='blue.800' fontSize='2xl'>
                        ₹{price}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter justify='center'>
                {(quantity == 0) ? <Button isDisabled={quantity == 0}>Sold Out</Button> :
                    <Button onClick={() => { setCart(() => [...cart, { imagePath, productName, price, id, quantity }]) }} variant='solid' colorScheme='blue'>
                        Add to cart
                    </Button>}
            </CardFooter>
        </Card>
    )
}
