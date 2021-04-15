import React, {useState,useEffect} from 'react';
import Header from "./components/Header";
import ContactsList from "./components/ContactsList";
import axios from "axios";
import AddForm from "./components/AddForm";

function App() {
  const [search, setSearch] = useState('')
  const [contacts,setContacts] = useState([])
    useEffect(() => {
        axios("https://605c25256d85de00170d957c.mockapi.io/user")
            .then(({data}) => setContacts(data))
    },[])
    const deleteUser =(id) => {
      axios.delete(`https://605c25256d85de00170d957c.mockapi.io/user/${id}`)
          .then(({data}) => {
              setContacts(contacts.filter(el => el.id !== data.id))

    })
    }
    const addUser = (user) => {
      axios.post('https://605c25256d85de00170d957c.mockapi.io/user', user)
          .then(({data}) => setContacts([...contacts, data]))
    }

  return (
    <div className="w-1/3 mx-auto my-6 shadow">
     <Header setSearch={setSearch} />
     <AddForm addUser={addUser}/>
     <ContactsList
         search={search}
         contacts={contacts}
         onDelete={deleteUser}
     />
    </div>
  );
}

export default App;
