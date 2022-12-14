import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Box,
    useBoolean,
  } from '@chakra-ui/react'
import { useState } from 'react'

  import { BiSearch } from 'react-icons/bi'
  import { GrClose } from 'react-icons/gr'
import Search from './Search'
function Popsearch() {
    const [isEditing, setIsEditing] = useBoolean()
  return (<Popover 
    isOpen={isEditing}
    onOpen={setIsEditing.on}
    onClose={setIsEditing.off}>
  <PopoverTrigger>
    <Box>
   {isEditing? <GrClose />: <BiSearch/> }
    </Box>
  </PopoverTrigger>
  <PopoverContent w="100vw">
    <PopoverArrow />
    <PopoverBody><Search/></PopoverBody>
  </PopoverContent>
</Popover>)
}

export default Popsearch