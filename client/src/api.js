import axios from 'axios';
// import dotenv from 'dotenv'


// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// const API_KEY = import.meta.env.VITE_API_KEY;


const BASE_URL = import.meta.env.MY_URL || import.meta.env.MY_URL2 || "https://contacts-app-server.vercel.app";

console.log(BASE_URL)

console.log(import.meta.env)


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
