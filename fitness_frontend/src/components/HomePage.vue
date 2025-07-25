<template>
  <div class="app-container , my-bg">
    <div class="top-bar">
      <button class="hamburger" @click="toggleSidebar">☰</button>
      <h1 class="heading"> OUR FITNESS </h1>
    </div>

    <div class="sidebar" :class="{ open: isSidebarOpen }">
      <router-link to="/member/login" class="nav-link" @click="closeSidebar">Member</router-link>
    </div>

    <div class="main-content" @click="closeSidebar">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const isSidebarOpen = ref(false) 
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}

function closeSidebar() {
  isSidebarOpen.value = false
}

</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  background-color: #E19898;
}

.app-container {
  height: 100vh;
  width: 100vw;
  display: flex;
  left: 0%;
  flex-direction: column;
}
.my-bg {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  /* background-color: #fbc7c7; */
}

.my-bg::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url('@/assets/bg.jpg');
  background-size: cover;
  background-position: center;
  opacity: 0.2; 
  z-index: -1;
}


h1 {
  font-size: 1.3rem;
  margin: 0;
}
.intro{
    text-align: center;
    color: white;
    font-weight: bold;
    font-size:30px;
    padding:15rem;
}
.hamburger {
  background: none;
  border: none;
  font-size: 1.2rem;
  margin-right: 0.6rem;
  cursor: pointer;
  color: #000000;
}

.sidebar {
  position: absolute;
  top: 60px; 
  left: -200px;
  width: 180px;
  height: calc(100% - 60px); 
  background-color:#A2678A;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 1000;
  transition: left 0.3s ease;
}

.sidebar.open {
  left: 0;
}

.nav-link {
  display: block;
  padding: 0.75rem 1rem;
  background-color: #A2678A;
  color: #3F1D38;
  text-decoration: none;
  font-size: 1rem;
  text-align: center;
}

.nav-link:hover {
  background-color: #8d5576;
  color:#E19898
}

.main-content {
  padding: 1rem;
}
.top-bar {
  display: flex;
  justify-content: space-between; /* Pushes profile to right */
  align-items: center;
  background-color: #A2678A;
  color: #3F1D38;
  padding: 0.6rem 1rem;
  width: 100%;
  box-sizing: border-box;
  height: 60px;
  position: relative;
}

.heading {
  flex-grow: 1;
  text-align:left;
  margin-left: 50px;
  font-size: 2rem;
  font-family: fantasy;
}

</style>
