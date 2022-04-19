import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public/',
    params: {
        "apikey": "74166f17b15dd1ce4da595e787d72ed1",
        "ts": "1",
        "hash": "01aa0eeb7f34a00d5f2977ee205e6289"
      }
})

export const charactersApi = {
    getCharacters(search, sort, page = 1){
        return instance.get(`characters?${search === '' ? '' : `nameStartsWith=${search}`}&orderBy=${sort}&limit=8&offset=${(page - 1) * 8}`).then(response =>{
            return response.data;
        })
    },
    getCharacterInfo(id){
        return instance.get(`characters/${id}`).then(response =>{
            return response.data;
        })
    },
    getCharacterInfoComics(id){
        return instance.get(`characters/${id}/comics?format=comic&limit=3&offset=0`).then(response =>{
            return response.data;
        })
    },
} 

export const comicsApi = {
    getComics(search, sort, page = 1){
        return instance.get(`comics?format=comic&${search === '' ? '' : `titleStartsWith=${search}`}&orderBy=${sort}&limit=8&offset=${(page - 1) * 8}`)
        .then(response =>{
            return response.data;
        })
    },

    getComicInfo(id){
        return instance.get(`comics/${id}`)
        .then(response =>{
            return response.data;
        })
    },

} 
