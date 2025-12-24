<template>
  <nav class="nav-bar-container">
    <div class="input">
      <router-link class="nav-item single-link" to="/">Overview</router-link>

      <div class="nav-item dropdown">
        <router-link class="nav-link" to="/Eco-Awakening/page1">Eco-Awakening</router-link>
        <ul class="dropdown-menu">
          <li><router-link to="/Eco-Awakening/page1">Introductory Science Outreach Materials</router-link></li>
          <li><router-link to="/Eco-Awakening/page2">Outreach Events</router-link></li>
        </ul>
      </div>

      <div class="nav-item dropdown">
        <router-link class="nav-link" to="/Eco-Empowering">Eco
          -Empowering</router-link>
        <ul class="dropdown-menu">
          <li><router-link to="/Eco-Empowering/Stage1">Stage I: Sparking Curiosity, Shaping Intuition</router-link></li>
          <li><router-link to="/Eco-Empowering/Stage2">Stage II: Grasping and Exploring the Frontiers of Knowledge</router-link></li>
          <li><router-link to="/Eco-Empowering/Stage3">Stage III: Connecting Lab and Industry</router-link></li>
        </ul>
      </div>

      <div class="nav-item dropdown">
        <router-link class="nav-link" to="/Eco-Globalizing">Equ-Globalizing</router-link>
        <ul class="dropdown-menu">
          <li><router-link to="/Equ-Globalizing/part1">Education for minorities</router-link></li>
          <li><router-link to="/Equ-Globalizing/part2">International Educational Efforts</router-link></li>
          <li><router-link to="/Equ-Globalizing/part3">International Dialogue and Cooperation</router-link></li>
        </ul>
      </div>

      <div class="nav-item dropdown">
        <a class="nav-link" href="#team">Team</a>
        <ul class="dropdown-menu">
          <li><a href="#team-members">Members</a></li>
          <li><a href="#team-attributions">Attributions</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import router from '../router';

</script>

<style scoped>
.nav-bar-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: #0d1117;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2); 
}

.input {
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 18px 20px; 
    justify-content: space-evenly; 
    max-width: 1200px;
    margin: 0 auto;
}

.nav-item {
    position: relative;
    flex-grow: 1; 
    flex-basis: 0; 
    text-align: center;
}

.nav-link,
.single-link {
    background-color: transparent;
    border: none;
    padding: 10px 15px; 
    color: white;
    display: inline-block;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s ease;
    text-decoration: none; 
    font-weight: 500;
}

.nav-link:hover,
.single-link:hover {
    background-color: #21262c;
    color: #2f81f7;
}

.dropdown-menu {
    display: none;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    list-style: none;
    padding: 5px 0;
    margin: 0;
    min-width: 200px;
    background-color: #1a1f24;
    border: 1px solid #21262c;
    border-radius: 4px;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
    z-index: 100;
}

.dropdown:hover > .dropdown-menu {
    display: block;
}

.dropdown-menu li a {
    color: white;
    padding: 10px 15px;
    text-decoration: none;
    display: block;
    white-space: nowrap;
    transition: background-color 0.2s ease;
    text-align: left;
}

.dropdown-menu li a:hover {
    background-color: #2f81f7;
    color: #ffffff;
}

.nav-link::before,
.single-link::before {
    content: "";
    position: absolute;
    bottom: 0px; 
    left: 50%; 
    transform: translateX(-50%);
    width: 80%;
    height: 3px;
    background-color: #2f81f7;
    border-radius: 5px;
    opacity: 0;
    transition: opacity 0.2s ease;
}

.nav-link:hover::before,
.single-link:hover::before {
    opacity: 1;
}
</style>