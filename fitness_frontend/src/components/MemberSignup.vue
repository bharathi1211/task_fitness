<template>
    <div class="form-container">
    <input v-model="id" placeholder="Member ID"/>
    <input v-model="name" placeholder="Name"/>
    <input v-model="age" placeholder="Age"/>
    <input v-model="contact" placeholder="Contact Number"/>
    <input v-model="password" placeholder="Set ur password"/>
    <label for="course_type">Choose a course:</label>
    <select v-model="selectedCourse" id="course">
      <option value="3">3 months</option>
      <option value="6">6 months</option>
      <option value="12">One year</option>
    </select>

    <button @click="signup">Sign up</button>

    <p v-if="successMessage" class="success">{{ successMessage }}</p>
    <p v-if="error" class="error">{{ error }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import api from '../api'
import { useRouter } from 'vue-router'

const id = ref('')
const password = ref('')
const name = ref('')
const age = ref('')
const contact = ref('')
const selectedCourse = ref('')
const error = ref('')
const successMessage = ref('')
const router = useRouter()

async function signup(){
    error.value = ''
    try{
        const response = await api.post('/member/signup',{
            member_id:id.value,
            member_name:name.value,
            member_age:age.value,
            member_contact:contact.value,
            member_password:password.value,
            course_type:selectedCourse.value
        })
        successMessage.value = response.message
        setTimeout(() => {router.push('/members')}, 1000);
    }
    catch(err){
        error.value = 'Please try again later'
    }
}
</script>

<style>
.form-container {
  max-width: 400px;
  margin: 40px auto;
  padding: 25px;
  background-color: #A2678A; /* light purple background */
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(145, 85, 215, 0.2);
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-family: 'Segoe UI', sans-serif;
}

h2 {
  text-align: center;
  color: #3F1D38;
  margin-bottom: 10px;
}
.form-container{
    display: flex;
  justify-content: center;
  align-items: center;
}
input,
select {
  padding: 10px;
  border: 1px solid #b58be1;
  border-radius: 8px;
  font-size: 14px;
  background-color: #ffffff;
}

select {
  background-color: #ffffff;
}

button {
  padding: 10px;
  background-color: #3F1D38;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #5e3d57;
}

.success {
  color: rgb(146, 212, 146);
  text-align: center;
}

.error {
  color: rgb(239, 182, 182);
  text-align: center;
}
</style>