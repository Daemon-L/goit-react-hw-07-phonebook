import { ContactItem, Button, Text } from './ContactList.styled'
import { useSelector } from 'react-redux';
import { getContactsFilter } from 'redux/contacts/selectors';

const ContactsList = ({ contacts, onDelete }) => {
    const filter = useSelector(getContactsFilter);
    
    return (
        <ul>
            {contacts.map(
                ({ id, name, phone }) =>
                name.toLowerCase().indexOf(filter.toLowerCase()) !== -1 && (
                    <ContactItem key={id}>
                        <Text>{name}: {phone}</Text>
                        <Button type="button" onClick={() => onDelete(id)}>Delete</Button>
                    </ContactItem>
                )
            )}
        </ul>
       
    );
};
export default ContactsList;