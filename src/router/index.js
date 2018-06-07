import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Movie from '@/components/movie/movie'
import Music from '@/components/music/music'
import Post from '@/components/post/post'
import Home from '@/components/demo/index'
import InterView from '@/components/pages/interview'
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/',
    component:Home,
      children:[
        {
          path:'/interview',
          name:'interview',
          component:InterView
        }
      ]
    }
    // {
    //   path:'/user/HelloWorld',
    //   component:HelloWorld
    // },
    // {
    //   path: '/user',
    //   component: Post,
    //   children:[
    //     {
    //       path:'/user/music',
    //       name:'music',
    //       component:Music
    //     },
    //     {
    //       path:'/user/movie',
    //       component:Movie
    //     }
    //   ]
    // }
    // {
    //   path:'/music',
    //   name:'music',
    //   component:Music
    // },
    // {
    //   path:'/movie',
    //   name:'movie',
    //   component:Movie
    // }
  ]
})
