
export default function authMiddleware(to, from, next) {
 const token = sessionStorage.getItem('token');
    if(to.meta.requireAuth && !token) {
      next('/member/login');
    }
    else {
      next();
    }
}
