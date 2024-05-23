/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'

const PostController = () => import('#controllers/posts_controller')
const TeacherController = () => import('#controllers/teachers_controller')
router.on('/').render('pages/home')

router.group(() => {
  router.get('posts', [PostController, 'index']).as('index')
  router.get('posts/:id', [PostController, 'details']).as('posts.details')
  router.get('posts/create', [PostController, 'creationForm']).as('posts.form')
  router.post('posts/create', [PostController, 'store']).as('posts.store')
})

router.group(() => {
  router.get('teachers/create', [TeacherController, 'form']).as('teachers.form')
})