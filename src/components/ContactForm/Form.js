import { useState } from "react";
import { FormContainer, Text, Input, Button } from './Form.styled'

const ContactForm = ({ contacts, onAdd}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const onAddNewContact = evt => {
        evt.preventDefault();
        if (contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase()
        )
        ) { 
            alert(`${name} is already in contacts`);
            return;
        } else {
            // console.log(name, phone);
            onAdd({name, phone});
        }
        reset();
    };

    const reset = () => {
        setName("");
        setPhone("");
    };
    
    return (
        <FormContainer onSubmit={onAddNewContact}>
            <label>
                <Text>Name</Text>
                <Input
                    type="text"
                    name="name"
                    value={name}
                    onChange={evt => setName(evt.target.value)}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />  
            </label>
            <label>
                <Text>Number</Text>
                <Input
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={evt => setPhone(evt.target.value)}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <Button type="submit">Add contact</Button>
        </FormContainer>
    )
};
export default ContactForm;