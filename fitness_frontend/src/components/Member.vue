<template>
<div class="login-wrap">
<div class="login-container">
<h2>LOGIN</h2>
<input v-model="member_id" placeholder="Member ID" />
<input v-model="password" type="password" placeholder="Password" />
<button @click="login">Login</button>
<router-link to="/member/signup" class="nav-link" @click="closeSidebar">Sign up</router-link>

<p v-if="successMessage" class="success">{{ successMessage }}</p>
<p v-if="error" class="error">{{ error }}</p>
</div>
</div>
</template>


<script setup>
import { ref } from 'vue'
import api from '../api.js'
import { useRouter } from 'vue-router'

const member_id = ref('')
const password = ref('')
const error = ref('')
const successMessage = ref('')
const router = useRouter()

async function login() {
  error.value = ''
  try {
    const response = await api.get(`/member/${member_id}`)

    const pass = response.data.member_password

    successMessage.value = 'Login successful';
    if(pass===password.value){
      setTimeout(() => {router.push('/memberpage')}, 1000);
    }
  } catch (err) {
    console.error(err)
    error.value = 'Not registered! Sign up'
  }
}
</script>

<style>
.login-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: #A2678A;
}

.login-container {
  width: 100%;
  max-width: 400px;
  background-color: #EEEFE0;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1);
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
}
.error {
  color: rgb(165, 66, 66);
  margin-top: 10px;
}
h2{
color: #3F1D38;
}
button:hover {
  background-color: #A2678A;
}

.nav-link {
  text-decoration: none;          
  color: #3F1D38;                
  font-weight: 500;
  padding: 5px;
  background: none;               
  border: none;                   
  display: inline;                
  cursor: pointer;
  transition: color 0.2s ease;
}

.nav-link:hover {
  text-decoration: underline;     
  color: #c497bb;                
}
</style>