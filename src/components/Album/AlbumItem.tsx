import { IconButton, Heading, Text, VStack, WrapItem, } from '@chakra-ui/react'
import randomColor from 'randomcolor'
import { useNavigate } from "react-router-dom";

import { InfoOutlineIcon } from '@chakra-ui/icons'
import { Album } from '../../types';
export default function AlbumItem ({email,id,name,title}:Album) {
  const navigate = useNavigate();

  function navigateToAlbum (){

    navigate(`/album/${id}`)
  }

  return (
    <WrapItem flexBasis='20%' >
      <VStack p='1' bg={randomColor()} alignItems='start' width='100%' height='100%'  >
      <Heading alignSelf='center' size='md'>{name}</Heading>
      <Text>id: {id}</Text>
      <Text>email: {email}</Text>
      <Text>title: {title}</Text>
      <IconButton alignSelf='center' onClick={navigateToAlbum} aria-label='Search database' icon={<InfoOutlineIcon />} />
    </VStack>
  </WrapItem>
  )
}
