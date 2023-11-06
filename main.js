import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://ai-trip-planner.p.rapidapi.com/',
  params: {
    days: '3',
    destination: 'London,UK'
  },
  headers: {
    'X-RapidAPI-Key': '78bbde1bf9msh49c8ca25d9838c6p115afbjsncde3f07062d9',
    'X-RapidAPI-Host': 'ai-trip-planner.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}




const apiUrl = 'https://ai-trip-planner.p.rapidapi.com/'; 

async function createResource() {
  const newData = {
    name: 'New Item',
    description: 'Description of the new item',
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });

    if (!response.ok) {
      throw new Error('Failed to create a new resource');
    }

    const createdItem = await response.json();
    console.log('New item created:', createdItem);
  } catch (error) {
    console.error('POST request error:', error);
  }
}

createResource();
