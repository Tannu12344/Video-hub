import { Box, Button, HStack,Input, Heading, Stack,VStack,Text} from '@chakra-ui/react'
import React from 'react'
import {AiOutlineSend} from "react-icons/ai"

const Footer = () => {
  return <Box bgColor={"blackAlpha.900"} minH={"40"} p={"16"} color={"white"}>
    <Stack direction={["column", "row"]}>
        <VStack alignItems={'stretch'} w={'full'} px={'4'}>
            <Heading size={"md"} textTransform={"uppercase"} textAlign={["center","left"]}>
                Subscribe to get updates
            </Heading>
            <HStack
            borderBottom={"2px solid white"}
            py={"2"}>
                <Input
                placeholder="Enter Email Here..."
                border={'none'}
                borderRadius="none"
                outline={'none'}
                focusBorderColor="none"/>
                <Button  p={'0'}
                colorScheme={'purple'}
                variant={'ghost'}
                borderRadius={'0 20px 20px 0'}>
                 <AiOutlineSend size={20}/>
                </Button>
            </HStack>
        </VStack >
        <VStack w={'full'}
         borderLeft={['none', '1px solid white']}
         borderRight={['none', '1px solid white']}> 
         <Heading textAlign={'center'} textTransform={'uppercase'}>
            Video Hub
         </Heading>
         <Text>
            All rights received
         </Text>
        </VStack>
        <VStack w={'full'}>
            <Heading size={'md'} textTransform={'uppercase'}>
                Social Media
            </Heading>
            <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://www.youtube.com/@TaylorSwift">
              Youtube
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://www.instagram.com/taylorswift/">
              Instagram
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://twitter.com/taylorswift13/">
              Twitter
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://in.pinterest.com/taylornation13/">
              Pinterest
            </a>
          </Button>
            
        </VStack>
    </Stack>
  </Box>
}

export default Footer