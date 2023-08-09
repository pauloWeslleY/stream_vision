import { memo } from 'react'
import { List, ListProps } from '@chakra-ui/react'
import { CONTACT } from './data/[contact_list]'
import { ContactListItem } from './index'

const ContactList = ({ ...props }: ListProps) => {
  return (
    <List {...props} spacing={'2rem'}>
      {CONTACT.map((items, index) => (
        <ContactListItem key={index} contact={items} />
      ))}
    </List>
  )
}
export default memo(ContactList)
