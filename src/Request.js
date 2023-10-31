const key = '5421249bde2ea28781b119a8615ef072'

const requests = {
    requestPopular:`http://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
    requestTopRated:`http://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
    requestTrending:`http://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
    requestUpcoming:`http://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
};
 export default requests;