import React, {useState} from 'react';
import EditingContact from './contactEdit';
import NewContactButton from './newContactButton';

function NewContact({ handleCreate }) {

    const [isAdding, setIsAdding] = useState(false);
    
    return (
        <div className="contact-container">
            {isAdding?
                <EditingContact 
                    id={""}
                    image={""}    
                    title={""} 
                    name={""} 
                    company={""} 
                    address={""} 
                    phone={""} 
                    setIsEditing={setIsAdding}
                    handleUpdate={handleCreate}
                /> : 
                <NewContactButton
                    setIsAdding={setIsAdding}
                />
            }
        </div>
    )

  }
  
  export default NewContact;