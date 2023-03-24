import axios from 'axios';
import dotenv from 'dotenv'

if (process.env.ENVIRONMENT == dev){
	dotenv.config({ path: path.join(process.cwd()+"/src/", ".env") });
}

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

// const BASE_URL = 'https://contacts-app-server.vercel.app'
// const BASE_URL = 'http://localhost:3000';

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
