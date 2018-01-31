import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import Music from '@/components/music/Music'
import Book from '@/components/book/Book'
import Photo from '@/components/photo/Photo'
import MovieDetail from '@/components/movie/MovieDetail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Movie',
    component: Movie
  }, {
    path: '/music',
    name: 'music',
    component: Music,
    beforeEnter(to, from, next){
      from.name === null ? next('/') : next();
    }
  }, {
    path: '/book',
    name: 'book',
    component: Book,
    beforeEnter(to, from, next){
      from.name === null ? next('/') : next();
    }
  }, {
    path: '/photo',
    name: 'photo',
    component: Photo,
    beforeEnter(to, from, next){
      from.name === null ? next('/') : next();
    }
  }, {
    path: '/moviedetail/:movieId',
    component: MovieDetail
  }]
})
