/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import MemberController from '#controllers/memberController'
import AdminController from '#controllers/adminController'
import MembershipController from '#controllers/membershipController'
import ClassController from '#controllers/classController'
import authJwt from '#middleware/auth'
import AuthController from '#controllers/authController'

router.post('/member/login',[AuthController,'login'])
router.post('/member/signup',[MemberController,'store'])
router.group(()=>{
  router.get('/', [MemberController,'index']),
  router.get('/:member_id',[MemberController,'show']),
  router.put('/:member_id',[MemberController,'update']),
  router.delete('/:member_id',[MemberController,'destroy'])
}).prefix('/member').use(authJwt)

router.group(()=>{
  router.get('/',[MembershipController,'index']),
  router.get('/:m_id',[MembershipController,'show']),
  router.put('/:m_id',[MembershipController,'update']),
  router.delete('/:m_id',[MembershipController,'destroy'])
}).prefix('/admin/membership').use(authJwt)

router.group(()=>{
  router.post('/add',[ClassController,'store']),
  router.get('/', [ClassController,'index']),
  router.get('/:c_id',[ClassController,'show']),
  router.put('/:c_id',[ClassController,'update']),
  router.delete('/:c_id',[ClassController,'destroy'])
}).prefix('/admin/class').use(authJwt)

router.get('admin/:admin_id',[AdminController,'show']).use(authJwt)