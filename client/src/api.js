import axios from 'axios';

const BASE_URL = process.env.BASE_URL || 'http://localhost:8080';

const getContacts = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/contacts`);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

const addContact = async (contact) => {
	try {
		const response = await axios.post(`${BASE_URL}/contacts`, contact);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

const updateContact = async (updatedContact) => {
	try {
    console.log(updatedContact);
		const response = await axios.put(`${BASE_URL}/contacts`, updatedContact);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

const deleteContact = async (id) => {
	try {
		const response = await axios.delete(`${BASE_URL}/contacts/${id}`);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};

export default { getContacts, addContact, updateContact, deleteContact };
