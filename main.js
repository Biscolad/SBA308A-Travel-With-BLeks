// code snippets from API website
const url = 'https://travel-info-api.p.rapidapi.com/country-details';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '78bbde1bf9msh49c8ca25d9838c6p115afbjsncde3f07062d9',
		'X-RapidAPI-Host': 'travel-info-api.p.rapidapi.com'
	}
};


// using fetch API to communicate with an external API
async function fetchCountryData() {
    try {
        const response = await fetch('https://travel-info-api.p.rapidapi.com/country-details');
        if (!response.ok) {
            throw new Error('Error in fetching data');
        }
       
        const result = await response.json();

        console.log(result);
        // const data = await response.json();

    } catch (error) {
        console.error('Error fetching country data:', error);
    }
  }
 

//CREATE USER INTERACTION
// ADD Event listener for COUNTRY SEARCH
const destinationInput = document.getElementById('destinationCountry');
const searchButton = document.getElementById('country-Search');
searchButton.addEventListener('click', async() => {
    const destination = destinationInput.value;
    const countryData = await fetchCountryData(destination);
    console.log(countryData);
});


//USER MANIPULATION
async function postData(destination, result) {
    try {
      const response = await fetch('https://travel-info-api.p.rapidapi.com/country-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ destination, result }),
      });
      if (!response.ok) {
        throw new Error('Failed to post data');
      }
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  }
  
  

  








 