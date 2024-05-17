import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

export async function GET(request) {
  console.log("Logging: " + request.url)
	
	//My Lookuptable
	const randomresponse = {

		1: "Would you like a cheeseburger?",
		2: "Would you like a salad?",
		3: "Would you like a cold beverage?",
		4: "Would you like another round?",
	};

	function getRandomIntInclusive(min, max) {
		const minCeiled = Math.ceil(min);
		const maxFloored = Math.floor(max);
		return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
	  }
	  
	const ResponseNumber = getRandomIntInclusive(1,4);
	const responsemap = randomresponse[ResponseNumber];

	return new Response (responsemap);
	
	}
