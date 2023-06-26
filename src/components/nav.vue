<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>

<div class="navigation-bar">
<img src="../assets/kocka-logo.png" alt="Logo" id="brand-logo">
<div class="list-items">
    <ul>
       <li class="menu-item"><RouterLink to="/">Főoldal</RouterLink></li>
       <li class="menu-item"><RouterLink to="/team">Csapat</RouterLink></li>
       <li class="menu-item"><RouterLink to="/gallery">Galéria</RouterLink></li>
       <li class="menu-item"><RouterLink to="/cube">A Kockáról</RouterLink></li> 

    </ul>
</div>

</div>

</template>

<style scoped>

.navigation-bar{
    width: 100%;
    height: 100px;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
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
    
    
}
.menu-item{
    padding-right: 0.5rem;
    font-size: 120%;
}
.menu-item>a{
    transition-duration: 0.3s;
    color: white;

}
.menu-item:hover>a{
    text-decoration: underline;
    font-size: 105%;
}


</style>