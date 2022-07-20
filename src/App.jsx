import React from "react";
import { Container, Error } from './App.styled';
import ContactForm from './components/ContactForm/Form';
import ContactsList from './components/ContactList/ContactsList';
import Filter from './components/ContactsFilter/Filter';
import Loader from './components/Loader/Loader';

import { useFetchContactsQuery } from "./redux/contacts/contactsApi";

export const App = () => {
    const { isError, error, isFetching} = useFetchContactsQuery();
      
    return (
        <Container>
            <h1>Phonebook</h1>
            <ContactForm />
            <h2>Contacts</h2>
            <Filter />

            {isFetching && <Loader />}
            {isError && <Error>{error.status}</Error>}
            <ContactsList />
        </Container>
    );
};

// export const App = () => {
//     const { data, isError, error, isFetching} = useFetchContactsQuery();
//     const showContactsData = data && !isError;
//     const [removeContact] = useRemoveContactMutation();
//     const [addContact, { isSuccess: isAdded }] = useAddContactMutation();
//     return (
//         <Container>
//             <h1>Phonebook</h1>
//             <ContactForm contacts={data} onAdd={addContact} isAdded={isAdded} />
//             <h2>Contacts</h2>
//             <Filter />
//             {isFetching && <Loader />}
//             {isError && <Error>{error.status}</Error>}
//             {showContactsData && (
//                 <ContactsList contacts={data} onDelete={removeContact}/>
//             )}
//         </Container>
//     );
// };