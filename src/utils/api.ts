import Results from "../components/Results/Results";
import { Instance } from 'mobx-state-tree';

let url = `https://api.punkapi.com/v2`;

export const getBeers = async (page: number) => {
  const response = await fetch(url + `/beers?page=${page}`);
  const json = (await response.json()) as Instance<typeof Results>[];
  return json;
};

export const getBeer = async (id: number) => {
  const response = await fetch(url + `/beers/${id}`);
  const json = (await response.json()) as Instance<typeof Results>[];
  return json;
};

/*
export const fetchData = {

  async fetchRandomBeer({ commit }: any) {
    const response = await fetch(url + `/beers/random`);
    const data = await response.json();
    commit('setRandomBeer', data)
    console.log('setRandomBeer', data[0]);
  },
  
  async fetchBeerById({ commit }: any, id: number) {
    let response = await fetch(url + `/beers/${id}`);
    const data = await response.json();
    commit('setBeer', data)
    console.log('setBeer', data);
  }
}
*/
