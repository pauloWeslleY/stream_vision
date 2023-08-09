import { memo } from 'react'
import { ListIcon, ListItemProps, ListItem, Text, Flex } from '@chakra-ui/react'
import { ContactProps } from './data/[contact_list]'

interface ContactListItemProps extends ListItemProps {
  contact: ContactProps
}

const ContactListItem = ({ contact }: ContactListItemProps) => {
  const { title, icon, ...props } = contact

  return (
    <ListItem {...props}>
      <Flex
        alignItems={'center'}
        fontSize={{ base: 'xl', md: '3xl', lg: '2rem' }}
      >
        <ListIcon as={icon} color={'indigo.500'} />
        <Text as={'span'} fontWeight={'regular'}>
          {title}
        </Text>
      </Flex>
    </ListItem>
  )
}

export default memo(ContactListItem)
