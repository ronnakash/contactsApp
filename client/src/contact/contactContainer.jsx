import React from 'react';
import Contact from './contact';
import '../App.css'

function ContactContainer({ contacts, isMobile }) {
    const numContactsPerRow = isMobile ? 1 : 3;
    const numRows = contacts.length / numContactsPerRow;
    console.log("contact container")

    
    // const rows = [];
    // for (let i = 0; i < numRows; i++){
    //     console.log("i")
    //     let row = [];
    //     for (let j = 0; j < numContactsPerRow; j++){
    //         console.log("j")
    //         row.push(contacts.shift());
    //     }
    //     // const contactRow = (row) => {
    //     //     return (
    //     //         <div className="contact-row">
    //     //             <Contact key={1} 
    //     //                 imageUrl={row[0].imageUrl} 
    //     //                 title={row[0].title} 
    //     //                 name={row[0].name} 
    //     //                 location={row[0].location} 
    //     //                 company={row[0].company} 
    //     //                 address={row[0].address} 
    //     //                 phone={row[0].phone} 
    //     //                 />
    //     //                 <Contact key={2} 
    //     //                 imageUrl={row[1].imageUrl} 
    //     //                 title={row[1].title} 
    //     //                 name={row[1].name} 
    //     //                 location={row[1].location} 
    //     //                 company={row[1].company} 
    //     //                 address={row[1].address} 
    //     //                 phone={row[1].phone} 
    //     //                 />
    //     //                 <Contact key={3} 
    //     //                 imageUrl={row[2].imageUrl} 
    //     //                 title={row[2].title} 
    //     //                 name={row[2].name} 
    //     //                 location={row[2].location} 
    //     //                 company={row[2].company} 
    //     //                 address={row[2].address} 
    //     //                 phone={row[2].phone} 
    //     //                 />
    //     //         </div>
    //     //     )
    //     // }
    //     rows.push(row);
    //     console.log(rows)
    // }

  return (
    <div className="contact-container">
        {/* {rows.map((row, rowIndex) => {
            // console.log(0);
            return <div key={rowIndex*100} className="contact-row">
                {row.map((contact, contactIndex) => {
                        console.log(contact);
                        return (<Contact key={contactIndex + rowIndex*100 + 1} 
                        imageUrl={contact.imageUrl} 
                        title={contact.title} 
                        name={contact.name} 
                        location={contact.location} 
                        company={contact.company} 
                        address={contact.address} 
                        phone={contact.phone} 
                        />)
                })}
            </div>
        })} */}
        {contacts.map((contact, rowIndex) => {
            console.log(0);
            return (<Contact key={rowIndex} 
                imageUrl={contact.imageUrl} 
                title={contact.title} 
                name={contact.name} 
                location={contact.location} 
                company={contact.company} 
                address={contact.address} 
                phone={contact.phone} 
                />)
        })}
    </div>
  );
}


export default ContactContainer;
