import * as api from '../api';

//action creators

export const getArticles = () => async (dispatch) => {

try {
    const { data } = await api.fetchArticles();
    dispatch({ type: 'FETCH_ALL', payload: data });
} catch (error) {
    console.log(error.message);
    }
    
}

export const createArticle = (article) => async (dispatch) => {

try {
    const { data } = await api.createArticle(article);
    dispatch({ type: 'CREATE', payload: data });
} catch (error) {
    console.log(error.message);
}

}

export const updateArticle = (id, article) => async (dispatch) => {
    try {
        const { data } = await api.updateArticle(id, article);

        dispatch({ type: 'UPDATE', payload: data });

    } catch (error) {
        console.log(error);
    }
}