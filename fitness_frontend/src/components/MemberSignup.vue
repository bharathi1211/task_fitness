<template>
<home-page>
  <div class="login-wrap">
  <div class="login-container">
    <h2>SIGN UP</h2>
    <input v-model="newM.id" placeholder="Member ID" />
    <input v-model="newM.name" placeholder="Name" />
    <input v-model="newM.age" placeholder="Age" />
    <input v-model="newM.contact" placeholder="Contact Number" />
    <input v-model="newM.password" type="password" placeholder="Password" />
    <select v-model="newM.selectedCourse" class="course" placeholder="Course type">
      <option disabled value="">Course type</option>
      <option value="3">3 months</option>
      <option value="6">6 months</option>
      <option value="12">One year</option>
    </select>
    
    <button @click="signup">Sign up</button>

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
import { validateMember } from '@/validator/memberValidator'
const error = ref('')
const successMessage = ref('')
const router = useRouter()
const newM = ref({
  id: '',
  name: '',
  age: '',
  password: '',
  selectedCourse:'',
  contact:''
})
async function signup() {
  error.value = ''
  successMessage.value=''
  const err = validateMember(newM.value);
   if (err) {
    error.value=err;
    return;
  }
  try {
    const token = sessionStorage.getItem('token')
    const response = await api.post('/member/signup',{
        "member_id":Number(newM.value.id),
        "member_name":newM.value.name,
        "member_age":Number(newM.value.age),
        "member_contact":newM.value.contact,
        "course_type":Number(newM.value.selectedCourse),
        "member_password":newM.value.password
    },{headers:{Authorization:`Bearer ${token}`,'Content-Type': 'application/json'}})
    successMessage.value = response.data.message
    setTimeout(() => {router.push('/member/login')}, 1000);
  } catch (err) {
    console.error(err)
    error.value = 'Please try again later!'
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
.success{
    margin-top: 1rem;
    color:rgb(159, 198, 159);
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
  margin-top: 2rem;
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
.course{
    padding:0.3rem;
    border-radius: 5px;
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
