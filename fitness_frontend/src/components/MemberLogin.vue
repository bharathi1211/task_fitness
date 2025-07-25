<template>
<home-page>
  <div class="login-wrap">
  <div class="login-container">
    <h2>LOGIN</h2>
    <input v-model="id" placeholder="Member ID" />
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="login" >Login</button>

    <router-link to="/member/signup" class="nav-link">Sign up</router-link>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
  </div>
  </home-page>
</template>

<script setup>
import { ref } from 'vue'
import api from '../api'
import { useRouter } from 'vue-router'
import HomePage from './HomePage.vue'

const id = ref('')
const password = ref('')
const error = ref('')
const successMessage = ref('')
const router = useRouter()

async function login() {
  error.value = ''
  try {
    const response = await api.post('/member/login',{
        member_id:id.value,
        member_password:password.value}
    )

    // console.log(response.data)
    const token = response.data.token
    sessionStorage.setItem('token', token)
    sessionStorage.setItem('id', id.value)
    successMessage.value = 'Login successful';
    setTimeout(() => {router.push('/member/dashboard')}, 1000);
  } catch (err) {
    console.error(err)
    error.value = 'Invalid username or password'
  }
}
</script>
<style scoped>
.login-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

.login-container {
  width: 100%;
  max-width: 400px;
  background-color: #A2678A;
  padding: 2rem;
  border-radius: 10px;
}

input {
  display: block;
  border-radius: 5px;
  margin: 0.5rem 0;
  padding: 0.5rem;
  width: 100%;
  border-color:transparent;
}
button {
  padding: 0.5rem 1rem;
  background-color: #debad7;
  margin-left: 8rem;
  border-radius: 5px;
}
.error {
  color: rgb(235, 228, 228);
  margin-top: 10px;
}
h2{
color: #3F1D38;
text-align: center;
font-weight: bold;
}
button:hover {
  background-color: #ba7fad;
  color:white
}
p{
text-align: center;
}
.success{
    margin-top: 1rem;
    color:rgb(159, 198, 159);
}
.nav-link{
    text-align: center;
    text-decoration: none;
}
.nav-link:hover{
    text-decoration: underline;
    background: none;
}
</style>
