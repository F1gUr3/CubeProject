<script>
toggle(); {
        this.showMenu = !this.showMenu;
    }
</script>

<template>
<div class="block xl:hidden 2xl:hidden">
        <div class="dropdown">
            <div class="bg-black">
                
                <i v-on:click="toggle()" class="fa-solid fa-bars fa-xl pulse-animation text-white"></i>
                <div v-show="showMenu"  class=" bg-black-pearl text-white absolute right-0 top-0 w-[187px] h-[400px]">
                    <div class="border-b-2 border-deep-blue2">
                        <div class="ml-[23px] mr-[16px] flex flex-row gap-[66px] ">
                            <p class="font-sailec-bold text-2xl py-2"></p>
                            <div class="pt-[15px]">
                                <svg v-on:click="toggle()" class="pulse-animation" xmlns="http://www.w3.org/2000/svg" width="25.51" height="19.828" viewBox="0 0 25.51 19.828">
                                    <line id="Line_40" data-name="Line 40" x2="11.338" transform="translate(12.672 9.914)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>
                                    <line id="Line_41" data-name="Line 41" x2="22.51" transform="translate(1.5 1.5)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>
                                    <line id="Line_42" data-name="Line 42" x2="5.338" transform="translate(18.672 18.328)" fill="none" stroke="#fff" stroke-linecap="round" stroke-width="3"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-col gap-[11px] mx-[23px] pt-[11px] pb-[18px] font-sailec-light text-15 leading-19">
                        <a class="hover:underline" routerLink="/landing-page">dsasd</a>
                        <a class="hover:underline" routerLink="/services-page">sdsadas</a>
                        <a class="hover:underline" routerLink="/packages-page">sdsda</a>
                        <a class="hover:underline" routerLink="">sdsadasd</a>
                        <a class="hover:underline" routerLink="/contact-page">sdasadd</a> 
                    </div>
                </div>
            </div>
        </div>
</div>
</template>

</script>
<style scoped>

</style>