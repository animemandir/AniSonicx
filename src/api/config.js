const QUERIES = {
    TRENDING: `query {
        Page(page: 1,perPage: 8) {
        media(type: ANIME,sort : TRENDING_DESC) {
        id
        title{
        romaji
        english
        }
        description
        bannerImage
        coverImage{
        large
        medium
        }
        averageScore
        }
        }
        }`,
    POPULAR: `query {
        Page(page: 1, perPage: 15) {
    media(type: ANIME,sort : POPULARITY_DESC) {
    id
    title{
    romaji
    english
    }
    description
    coverImage{
    large
    medium
    }
    averageScore
    }
    }
    }`,
    RECENT: `query {
        Page(page: 1, perPage: 15) {
    media(type: ANIME,sort : START_DATE_DESC) {
    id
    title{
    romaji
    english
    }
    coverImage{
    large
    medium
    }
    averageScore
    }
    }
    }`,
    ACTION: `query {
        Page(page: 1, perPage: 15) {
    media(type: ANIME,genre: "Action", sort: POPULARITY_DESC) {
    id
    title{
    romaji
    english
    }
    coverImage{
    large
    medium
    }
    averageScore
    }
    }
    }`,
    DRAMA: `query {
        Page(page: 1, perPage: 15) {
    media(type: ANIME,genre: "Drama", sort: POPULARITY_DESC) {
    id
    title{
    romaji
    english
    }
    coverImage{
    large
    medium
    }
    averageScore
    }
    }
    }`,
    ADVENTURE: `query {
        Page(page: 1, perPage: 15) {
    media(type: ANIME,genre: "Adventure", sort: POPULARITY_DESC) {
    id
    title{
    romaji
    english
    }
    coverImage{
    large
    medium
    }
    averageScore
    }
    }
    }`,
}

const API_CALLS = {
    GET_INFO: (id, dub) => `info/${id}?dub=${dub}`,
    STREAM: (id) => `watch/${id}`
}

const ENDPOINTS = {
    GRAPHQL: import.meta.env.VITE_ANILIST_GRAPHQL_URL ,
    CONSUMET: import.meta.env.VITE_ANILIST_CONSUMET_URL 
}

export default { QUERIES, API_CALLS, ENDPOINTS }