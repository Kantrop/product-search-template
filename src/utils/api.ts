import Results from "../components/Results/Results";
import { Instance } from 'mobx-state-tree';

let url = `https://api.punkapi.com/v2`;

export const getBeers = async () => {
  const response = await fetch(url + `/beers`);
  const json = (await response.json()) as Instance<typeof Results>[];
  return json;
};

export const getBeersByName = async (name: string) => {
  const response = await fetch(url + `/beers?beer_name=${name}`);
  const json = (await response.json()) as Instance<typeof Results>[];
  return json;
};

export const getBeer = async (id: number) => {
  const response = await fetch(url + `/beers/${id}`);
  const json = (await response.json()) as Instance<typeof Results>[];
  return json;
};

/*export const fetchData = {
  async fetchBeers() {
    const response = await fetch(url + `/beers`)
    const data = await response.json()
    console.log('getBeers', data[0]);
  },
  async fetchRandomBeer() {
    const response = await fetch(url + `/beers/random`);
    const data = await response.json();
    console.log('getRandomBeer', data[0]);
  },
  async fetchBeerById(id: number) {
    let response = await fetch(url + `/beers/${id}`);
    const data = await response.json();
    console.log('getBeerById', data);
  },
  async fetchBeerByName(name: string) {
    let response = await fetch(url + `/beers/${name}`);
    const data = await response.json();
    console.log('getBeerByName', data);
  }
}*/

