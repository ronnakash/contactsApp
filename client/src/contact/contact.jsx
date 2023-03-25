import React, {useState} from 'react';
import '../App.css';
import './contact.css'
import ContactDisplay from './contactDisplay';
import EditingContact from './contactEdit';

const Contact = ( {contact, handleDelete, handleUpdate}) => {
    
    const [isEditing, setIsEditing] = useState(false);

    if (!isEditing) {
        return (
            <div className='contact-container'>
                <ContactDisplay
                    id={contact.id}
                    image={contact.image}    
                    title={contact.title} 
                    name={contact.name} 
                    location={contact.location} 
                    company={contact.company} 
                    address={contact.address} 
                    lat={contact.lat} 
                    lng={contact.lng} 
                    phone={contact.phone} 
                    setIsEditing={setIsEditing}
                    handleDelete={handleDelete}
                />
            </div>
        )
    }
    
    return (
        <div className='contact-container'>
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
        </div>
    );
  }
  
  export default Contact;
  