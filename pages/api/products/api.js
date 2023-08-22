import fetch from 'isomorphic-unfetch';

//Example function to make an API request
export async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

