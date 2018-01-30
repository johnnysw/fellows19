import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/Test'
import Test1 from '@/components/Test1'
import Test2 from '@/components/Test2'
import TestUrl from '@/components/TestUrl'
import Error404 from '@/components/Error404'
import Counter from '@/components/Counter'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/test',
      component: Test,
      name: 'test',
      alias: '/abc',
      children: [
        {
          path: 'test1',
          name: 'test1',
          component: Test1
        }, {
          path: 'test2',
          name: '/test/test2',
          component: Test2
        }
      ],
      beforeEnter (to, from, next) {
        console.log(to)
        console.log(from)
        // next(false)
        next()
      }
    }, {
      path: '/testUrl/:userId(\\d+)/:username',
      component: TestUrl,
      name: 'testUrl'
    }, {
      path: '/home/:userId(\\d+)/:username',
      redirect: '/testUrl/:userId(\\d+)/:username'
    }, {
      path: '*',
      component: Error404
    }, {
      path: '/couter',
      component: Counter
    }
  ]
})
