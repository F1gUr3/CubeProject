<script setup>
import { RouterLink } from 'vue-router';
//import { ref, onMounted, onUnmounted, watch } from 'vue';





</script>

<template>
<link rel="stylesheet" href="../assets/main.css">
<div class="hidden xl:block 2xl:block">
    <div class="navigation-bar">
    <img src="../assets/kocka-logo.png" alt="Logo" id="brand-logo">
    <div class="list-items">
        <ul>
           <li class="menu-item"><RouterLink to="/">Főoldal</RouterLink></li>
           <li class="menu-item"><RouterLink to="/team">Csapat</RouterLink></li>
           <li class="menu-item"><RouterLink to="/gallery">Galéria</RouterLink></li>
           <li class="menu-item"><RouterLink to="/cube">A Kockáról</RouterLink></li> 
        
        </ul>


        <div id="hamburger-menu" >
            <span></span>
            <span></span>
            <span></span>

        </div>

    
    
    </div>

</div>
</div>



</template>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.navigation-bar{
    width: 100%;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    
    position: fixed;
    top: 0;
    z-index: 9999;
    backdrop-filter: blur(5px);
}


#brand-logo{
    height: 75%;
    justify-content: center;
    align-self: center;
}
.list-items{
    display: flex;
    align-items: center;
    flex: auto;
    justify-content: flex-end;

}
.list-items>ul{
    list-style: none;
    display: flex;
    flex-direction: row;
    margin-bottom: 0px;
    
    
}
.menu-item{
    padding-right: 0.5rem;
    font-size: 120%;
}
.menu-item>a{
    transition-duration: 0.3s;
    text-decoration: none;
    color: white;

}
.menu-item:hover>a{
    text-decoration: underline;
    font-size: 105%;
}
#hamburger-menu>span{
    width: 50px;
    height: 5px;
    background-color: white;
    margin-top: 10px;

}
#hamburger-menu{
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    display: none;
}
.hamburger-menu-items>ul{
    
}
.hamburger-menu-items{
list-style: none;
}


.hamburger-menu-item>a{
    color: white;
}


@media screen and (max-width: 768px) {
  .menu-item {
    display: none;
}
#hamburger-menu{
    display: flex;
    flex-direction: column;
    margin-right: 10px;
    display: flex;
}

}

</style>