import axios from 'axios';

axios.defaults.baseURL = `https://api.github.com/`;
// const API_KEY = `d407875648143dbc537f3d16fab2b882&page=1`;
// const queryString =
//   'q=' + encodeURIComponent('GitHub Octocat in:readme user:defunkt');

const getSearchRepo = () => {
  return axios
    .get(`/search/repositories?q`)
    .then(response => {
      return response.data.results;
    })
    .catch(error => console.log(error));
};

const getRepoDetails = id => {
  return axios
    .get(`/search/repositories?q={query}{&page,per_page,sort,order}/${id}`)
    .then(response => {
      return response.data;
    })
    .catch(error => console.log(error));
};

// const getRepoCast = id => {
//   return axios
//     .get(`/search/repositories?q={query}{&page,per_page,sort,order}/${id}/${name}/owner`)
//     .then(response => {
//       return response.data.owner;
//     })
//     .catch(error => console.log(error));
// };

// const getMovieRewiews = movie_id => {
//   return axios
//     .get(`/movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-U`)
//     .then(response => {
//       return response.data.results;
//     })
//     .catch(error => console.log(error));
// };

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getSearchRepo,
  getRepoDetails,
  // getMovieCast,
  // getMovieRewiews,
};
