import { Texts } from '../helpers/utils/texts';
import { ChakraProvider, Center, Text, Box } from '@chakra-ui/react';

export function FooterComponent() {
    return (
        <>
            <ChakraProvider>
                <Box w='100%' pt='120px' pb='40px' bg='#FFFDFD' position='absolute' bottom={0}>
                    <Center>
                        <Text opacity={0.6}>{ Texts.copyright } <b>{ Texts.nameDev }</b></Text>
                    </Center>
                </Box>
            </ChakraProvider>
        </>
    );
}
