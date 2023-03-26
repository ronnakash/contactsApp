import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import api from "../api";

const EditingContact = ({ id, name, company, address, phone, title, setIsEditing, handleUpdate}) => {
  const [formData, setFormData] = useState({
    name,
    address,
    company,
    address,
    phone,
    title,
  });

  const handleChange = async (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Check if phone number is valid
    const phoneRegex = /^[+()0-9]+$/;
    const isValidPhone = phoneRegex.test(formData.phone);
    if (!isValidPhone) {
      //warning message
      swal({
        title: "Invalid Phone Number",
        text: "Please enter a valid phone number",
        icon: "error",
        dangerMode: true,
      })
      return;
    }
    
    console.log("Form submitted with data:", formData);
    await handleUpdate({id, ...formData});
    setIsEditing(false);
  };

  const handleCancel = async () => {
    setIsEditing(false);
  };


  return (
    <Form onSubmit={handleSubmit} className="contact form">
      <Form.Group className="form-group" controlId="name" >
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="form-group" controlId="address" >
        <Form.Label>Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter address"
          name="address"
          value={formData.address}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="form-group" controlId="company">
        <Form.Label>Company</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter company"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="form-group" controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group className="form-group" controlId="phone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
            className="form-control"
          type="text"
          placeholder="Enter phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </Form.Group>
        <div className="buttons buttons-center">
        <Button variant="primary" type="submit" onClick={e => handleSubmit(e)}>
        Save
      </Button>
      <Button variant="secondart" type="cancel" onClick={e => handleCancel(e)}>
        Cancel
      </Button>
        </div>
    </Form>
  );
};

export default EditingContact;
