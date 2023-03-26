import axios from 'axios';


let {PROD, VITE_PROD_URL, VITE_DEV_URL} = import.meta.env;
const BASE_URL = PROD ? VITE_PROD_URL : VITE_DEV_URL;


console.log(import.meta.env)

// get all contacts
const getContacts = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/contacts`);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

// add new contact
const addContact = async (contact) => {
	try {
		const response = await axios.post(`${BASE_URL}/contacts`, contact);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

// update contact contact
const updateContact = async (updatedContact) => {
	try {
    console.log(updatedContact);
		const response = await axios.put(`${BASE_URL}/contacts`, updatedContact);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

// delete contact
const deleteContact = async (id) => {
	try {
		const response = await axios.delete(`${BASE_URL}/contacts/${id}`);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export default { getContacts, addContact, updateContact, deleteContact };
