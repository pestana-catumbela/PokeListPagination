import useSWR from 'swr';
import axios from 'axios';
import { useState } from 'react';
import { Skeleton } from '@chakra-ui/react'
import { ChakraProvider, Box, Center } from '@chakra-ui/react';
import { ButtonsComponent } from './ButtonsComponent';

const Fetcher = (url:string) => axios.get(url).then(res => res.data);

export function FetchDataComponent() {
    const [index, setIndex] = useState(0);

    const { data: pokemons, error: isError, isLoading } = useSWR(`https://pokeapi.co/api/v2/pokemon?offset=${index}&limit=20`, Fetcher, {
        revalidateOnMount: true, // Revaliadate datas on mount
        revalidateOnFocus: false, // No revalidate on focus
        revalidateOnReconnect: true, // Revalidate datas when re-connect
        refreshInterval: 60000 * 30, // Refresh data in each 30 minutes

        keepPreviousData: true // Keep previous datas while revalidate datas
    });

    if(isError)
        console.log("Error in request");
 
    return(
        <>
            <ChakraProvider>
                <ul>
                    {pokemons?.results.map((poke:any) => {
                        return(
                            <li key={poke.name}>
                                <Center>
                                    <Box width='80%' borderWidth='1px' borderRadius='lg' mt={1.5} mb={1.5} p={4}>
                                        <Skeleton isLoaded={!isLoading}>{poke.name}</Skeleton>
                                    </Box>
                                </Center>
                            </li>
                        );
                    })}
                </ul>
            </ChakraProvider>

            <ButtonsComponent Pokemons={pokemons} SetIndex={setIndex} />
        </>
    );
}
