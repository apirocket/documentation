# GraphQL API



## API Explorer

The easiest way to access our GraphQL API is using the "Explorer API". You can access this application from the project or collection view where you will find a shortcut button.

<video width="100%" muted loop autoplay playsinline>
  <source src="/assets/video/api-explorer-button.mp4" type="video/mp4">
</video> 

Thanks to the "API Explorer" you can experiment with your GraphQL API, launch queries and see results, create new documents generating mutations and consult the documentation of the data scheme. Everything in a very simple and intuitive way.

## Endpoint

One of the advantages of using GraphQL is to have a single endpoint that will be able to deal with all our requests and queries. Regardless of the project or collection we are working with, we will always use the same endpoint:

```
https://graphql.apirocket.io
```

To access your API you will need to authenticate using a Bearer Token.


## Get an access token

An access token is associated with a single project. To get an access token you will have to access your project settings and choose one of the default generated tokens or create a new one.


## Rate Limits

API Rate limits specify the number of requests a client can make to Apirocket API in a specific time frame. By default we set a **rate limits of 1000 requests per 10 seconds**. Higher rate limits may apply depending on your current plan.

When a client gets rate limited the API responds with the `429 Too Many Requests` HTTP status code and **blocks any new request for 1 minute**.

## Code examples

### Curl

### Postman

### Javascript fetch

### Javascript Axios