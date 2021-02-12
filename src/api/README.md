# GraphQL API



## API Explorer

The easiest way to access our GraphQL API is using the **"Explorer API"**. You can access this application from the project or collection view where you will find a shortcut button.

<video width="100%" muted loop autoplay playsinline>
  <source src="/assets/video/api-explorer.mp4" type="video/mp4">
</video> 

Thanks to the **"API Explorer"** you can experiment with your GraphQL API, launch queries and see results, create new documents generating mutations and consult the documentation of the data scheme. Everything in a very simple and intuitive way.

## Endpoint

One of the advantages of using GraphQL is to have a single endpoint that will be able to deal with all our requests and queries. Regardless of the project or collection we are working with, we will always use the same endpoint:

```
https://graphql.apirocket.io
```

To access your API you will need to authenticate using a Bearer Token (API Key).


## Get an API Key

An access token is required to start sending queries to your API. This access token is called **API Key**.

Each **API Key** is associated with a single project. With an **API Key** you will only get access to the collections and data of the project it is associated with.

To get an **API Key** you will have to access your project settings and choose one of the default generated tokens or create a new one.

All requests you send to your project's API must include in its headers a valid **API Key** as a Bearer Token.

<video width="100%" controls muted loop playsinline>
  <source src="/assets/video/api-token.mp4" type="video/mp4">
</video>


## Rate Limits

API Rate limits specify the number of requests a client can make to Apirocket API in a specific time frame. By default we set a **rate limits of 1000 requests per 10 seconds**. Higher rate limits may apply depending on your current plan.

When a client gets rate limited the API responds with the `429 Too Many Requests` HTTP status code and **blocks any new request for 1 minute**.

## Code examples

### Terminal cURL

``` bash
curl --request POST \
  --url https://graphql.apirocket.io/ \
  --header 'Authorization: Bearer YOUR_API_KEY_TOKEN' \
  --header 'Content-Type: application/json' \
  --header 'Accept: application/json' \
  --data '{"query":"YOUR_QUERY_HERE"}'
```

### Javascript Fetch

``` js
// Set the main variables and your custom QUERY and KEY TOKEN.
const url = 'https://graphql.apirocket.io';
const method = 'POST';
const headers = {
	'Content-Type': 'application/json',
	Authorization: 'Bearer YOUR_API_KEY_TOKEN',
};
const body = JSON.stringify({
	query: `YOUR_QUERY_HERE`
});

fetch(url, { method, body })
	.then((data) => data.json())
	.then((response) => console.log(response))
	.catch(err => console.error(err));
```

### Javascript Axios

``` js
// Import the main dependencies.
import axios from "axios";

// Set the main variables and your custom QUERY and KEY TOKEN.
const url = 'https://graphql.apirocket.io';
const method = 'POST';
const headers = {
	'Content-Type': 'application/json',
	Authorization: 'Bearer YOUR_API_KEY_TOKEN',
};
const data = JSON.stringify({
	query: `YOUR_QUERY_HERE`
});

axios.request({ url, method, headers, data })
	.then((response) => console.log(response))
	.catch((err) => console.error(err));	
```

### NodeJS Native

``` js
// Import the main dependencies.
import https from 'https';

// Set the main variables and your custom QUERY and KEY TOKEN.
const hostname = 'graphql.apirocket.io';
const method = 'POST';
const headers = {
	'Content-Type': 'application/json',
	Authorization: 'Bearer YOUR_API_KEY_TOKEN',
};
const body = JSON.stringify({
	query: `YOUR_QUERY_HERE`
});

// Create a request instance.
const req = https.request({ hostname, method, headers }, (res) => {
	let response = '';
	res.on('data', (chunk) => response += chunk);
	res.on('end', () => console.log(response));
});
req.on('error', (err) => console.error(err));
req.write(body);
req.end();
```