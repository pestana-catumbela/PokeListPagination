import { Texts } from '../helpers/utils/texts';
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi';
import { ChakraProvider, ButtonGroup, Button, Center, Spacer } from '@chakra-ui/react';

export function ButtonsComponent({ SetIndex, Pokemons }:any) {
    return(
        <>
            <ChakraProvider>
                <Center>
                    <ButtonGroup w='80%' mt={8} mb='250px'>
                        <Spacer />
                        <Button color='#333333' colorScheme='transparent' borderWidth='1px' leftIcon={<HiArrowNarrowLeft />} isDisabled={!Pokemons?.previous} onClick={() => SetIndex(Pokemons.previous.split("offset=")[1])}>{ Texts.buttonPrev }</Button>
                        <Button color='#333333' colorScheme='transparent' borderWidth='1px' rightIcon={<HiArrowNarrowRight />} isDisabled={!Pokemons?.next} onClick={() => SetIndex(Pokemons.next.split("offset=")[1])}>{ Texts.buttonNext }</Button>
                    </ButtonGroup>
                </Center>
            </ChakraProvider>
        </>
    );
}
