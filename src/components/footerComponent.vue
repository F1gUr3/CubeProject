<script scoped> 
import { RouterLink } from 'vue-router';


</script>

<template>

<footer>
<div class="container-fluid footer-body">
    <div class="row pt-3">
        <div class="col-6"><img src="../assets/kocka-logo.png" alt="Kocka logo"></div>
        <div class="col-6 text-end ">
            <ul class="me-5 text-white">
                <li class="menu-item"><RouterLink to="/">Főoldal</RouterLink></li>
                <li class="menu-item"><RouterLink to="/team">Csapat</RouterLink></li>
                <li class="menu-item"><RouterLink to="/gallery">Galéria</RouterLink></li>
                <li class="menu-item"><RouterLink to="/cube">A Kockáról</RouterLink></li> 
        </ul>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="separator">

            </div>
        </div>
    <div class="row pb-3">
        <div class="col-6 text-center text-white">
           <p class="menu-item">© 2023 <a href="https://njszki.hu" class="">BMSZC Neumann János IT</a></p> 
        </div>
        <div class="col-6 text-center">
            <p class="menu-item"> <RouterLink to="/impressum">Impresszum</RouterLink></p>
        </div>
    </div>
    </div>
    </div>
</div>
</footer>


</template>
    
<style scoped>
footer{
    position: relative;
    
}
.footer-body{
    background-color: black;
}
.separator{
    width: 95%;
    height: 5px;
    background-color: white;
    margin: auto;
    border-radius: 25px;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
.menu-item{
    color: white !important;
}
.menu-item>a{
    color: white;
    text-decoration: none;
    text-align: justify;
    font-size: 120%;
    transition-duration: 0.5s;

}
.menu-item>a:hover{
    color: black;
    background-color: #F9F871 ;
    border-radius: 2px;
    padding: 0.2rem;
    text-decoration: none;
    text-align: justify;
    font-size: 120%;

}
</style>