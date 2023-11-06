// code snippets from API website
const url = 'https://travel-info-api.p.rapidapi.com/find-embassy?source=turkey&destination=usa';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '78bbde1bf9msh49c8ca25d9838c6p115afbjsncde3f07062d9',
		'X-RapidAPI-Host': 'travel-info-api.p.rapidapi.com'
	}
};


// using fetch API to communicate with an external API
async function fetchData() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
        // const data = await response.json();

    } catch (error) {
        console.error(error);
    }
  }
  
  window.addEventListener('load', fetchData);




