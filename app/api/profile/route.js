import { getRequestContext } from '@cloudflare/next-on-pages'

export const runtime = 'edge'

export async function GET(request) {
 
	
	//My Variables
	const KV = getRequestContext().env.cc_5
	const userID = request.headers.get("UserId")
	const validuser = await KV.get(UserId)

//Determine if UserID is in KV cc_5

	if (userID != validuser) {
		return new Response("The User is Invalid")
	}

//For Valid Users, Set the Auth-Token
	else {
	let value = await KV.get("Value")
	const newrequest = new Request(request)
	newrequest.headers.set("Auth-Token", value)
	

	}
	

	};
