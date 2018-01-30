import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import Music from '@/components/music/Music'
import Book from '@/components/book/Book'
import Photo from '@/components/photo/Photo'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Movie',
    component: Movie
  }, {
    path: '/music',
    component: Music
  }, {
    path: '/book',
    component: Book
  }, {
    path: '/photo',
    component: Photo
  }]
})
