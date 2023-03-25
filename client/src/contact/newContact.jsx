import React, {useState} from 'react';
import EditingContact from './contactEdit';
import NewContactButton from './newContactButton';

function NewContact({ }) {

    const [isAdding, setIsAdding] = useState(false);
    
    if(isAdding) {
        return(
            <EditingContact 
            id={contact.id}
            image={contact.image}    
            title={contact.title} 
            name={contact.name} 
            company={contact.company} 
            address={contact.address} 
            phone={contact.phone} 
            setIsEditing={setIsEditing}
            handleUpdate={handleUpdate}
            />
        )
    }

    return(
        <NewContactButton
            setIsAdding={setIsAdding}
        />
    )

  }
  
  export default NewContact;