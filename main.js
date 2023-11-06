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
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error ('HTTP error!: error');
        }
        const result = await response.json();
        console.log(result);
        // const data = await response.json();

    } catch (error) {
        console.error(error);
    }
  }
  fetchData();
  


//CREATE USER INTERACTION
// ADD Event listener for COUNTRY SEARCH
const searchDestination = document.getElementById('destinationCountry');
searchDestination.addEventListener('change', async() => {
    const selectedCountry = searchDestination.value;
    const response = await fetch(url);
    if (response.ok) {
        const result = await response.json();
    }
});
   

  

//ENABLE USER MANIPULATION THROUGH POST REQUEST








 