import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

//took this from Rapid API Article Extractor and Summarizer link: https://rapidapi.com/restyler/api/article-extractor-and-summarizer
/*
const options = {
    method: 'GET',
    url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
    params: {url: 'https://time.com/6266679/musk-ai-open-letter/', length: '3'},
    headers: {
      'X-RapidAPI-Key': '8fad436a20mshd957e148bb91e5cp10c09bjsnd52741bfefa0',
      'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
    }
  };*/

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');
        
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            query: (params) => `/summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`
        })      
    })
})


export const { useLazyGetSummaryQuery } = articleApi;

