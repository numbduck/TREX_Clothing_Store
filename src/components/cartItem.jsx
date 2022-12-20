import { AspectRatio, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, IconButton, Image, Stack, Text } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import CartContext from '../cartContext'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

export const CartItem = ({ imagePath, productName, price, id, quantity }) => {
    const { cartValue } = useContext(CartContext);
    const [cart, setCart] = cartValue;
    const [stock, setStock] = useState(1)

    return (
        <Card maxW='sm' _hover={{ background: "gray.50" }}>
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
                <ButtonGroup size='sm' isAttached variant='outline'>
                    <IconButton isDisabled={stock == 1} onClick={() => setStock(stock - 1)} aria-label='Decrement' icon={<AiOutlineMinus />} />
                    <Button cursor='text'>{stock}</Button>
                    <IconButton onClick={() => setStock(stock + 1)} isDisabled={stock >= quantity} aria-label='Increment' icon={<AiOutlinePlus />} />
                </ButtonGroup>
            </CardFooter>
            <Divider />
            <CardFooter justify='center'>
                <Button onClick={() => setCart(cart.filter((a) => a.id !== id))} variant='solid' colorScheme='red'>
                    Remove from Cart
                </Button>
            </CardFooter>
        </Card>
    )
}
