import axios from 'axios';

export function updateArticles(data){
    return{
        type: "UPDATE_ARTICLES",
        data
    }
}

export function getArticles(){
    return function(dispatch, getState){
        let url = "https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=9b64bcfe576047ba8e5bb7fd24c9e526"
        axios.get(url)
        .then(res => dispatch(updateArticles(res.data.articles)))
    }
}