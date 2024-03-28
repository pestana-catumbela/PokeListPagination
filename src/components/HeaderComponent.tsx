import { Texts } from '../helpers/utils/texts';
import { ChakraProvider, Heading, Center } from '@chakra-ui/react';

export function HeaderComponent() {
  return (
    <>
      <ChakraProvider>
        <Heading bg='tomato' color='white' size='lg' mb={10} w='100%'>
          <Center h='70px'>{ Texts.title }</Center>
        </Heading>
      </ChakraProvider>
    </>
  );
}
