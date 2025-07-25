
<template>
  <HomePage>
    <div class="table-full">
    <table v-if="cls" cellspacing="0" cellpadding="8">
      <thead>
        <tr>
          <th>Class-ID</th>
          <th>Class-Name</th>
          <th>Trainer-ID</th>
          <th>Timing</th>
          <th>Days</th>
          <th>Price</th>
          <th>Book</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ cls.cId }}</td>
          <td>{{ cls.cName}}</td>
          <td>{{ cls.tId}}</td>
          <td>{{ cls.startTime}} to {{cls.endTime }}</td>
          <td>{{ cls.days}}</td>
          <td>{{cls.price}}/-</td>
          <td><button>Book</button></td>
        </tr>
      </tbody>
    </table>
    </div>
    <p v-if="error" class="error">{{ error }}</p>
    </HomePage>
</template>

<script setup>
import HomePage from './HomePage.vue';
import api from '../api';
import { ref , onMounted } from 'vue';
const response = ref('')
const error = ref('')
// const Data = ref({})
const cls = ref(null);
onMounted(async () => {
  try {
    const token = sessionStorage.getItem('token')
    response.value = await api.get('/admin/class',{headers:{Authorization:`Bearer ${token}`,'Content-Type': 'application/json'}})
     console.log(response.value.data.class)
    cls.value = response.value.data.class[0];
  } catch (err) {
    error.value = 'Failed to load members'
  }
})

</script>

<style>
table {
  width: 80%;
  margin: 20px auto;
  table-layout: auto;
  border-color: transparent;
  border-color: white;
}
.table-full{
    display: flex;
   justify-content: center;
   margin-top: 15rem;
}
th, td {
  border: 1px solid #E19898;
  text-align: center;
  padding: 8px;
}

th {
  background-color: #f0e6ff;
  color: #6a0dad;
  font-weight:bold;
}

td {
  background-color: #f0e6ff;
  color:#6a0dad;
}
button{
    background-color: #fab9b9;
    border-color: transparent;
    border-radius: 5px;
    padding: 0.3rem;
    color:#6a0dad;
}
button:hover{
    background-color:#e5a3a3 ;
    color:#4e0a7e;
}
.error {
  color: red;
  margin-top: 10px;
  text-align: center;
}
</style>