<template>
    <!-- Header Area -->
    <header>
        <div class="logo">
            <a href="index.html"> <img src="../assets/images/ELYSIYAN.svg" alt="Elysian" /> </a>
        </div>
        <nav class="navbar">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">Agents</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Listings</a></li>
            </ul>
        </nav>
        <a href="#" class="header__btn">Contact Us</a>
        <button type="button" class="menu__btn">
            <i class="fa-solid fa-bars"></i>
        </button>

        <!-- mobile menu -->
        <div class="mobile__menu">
            <nav class="mobile__nav">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Agents</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Listings</a></li>
                </ul>
            </nav>
            <a href="#" class="mobile__menu--btn">Contact Us</a>
        </div>
    </header>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    const menuBtn = document.querySelector(".menu__btn");
    const mobileMenu = document.querySelector(".mobile__menu");

    menuBtn.addEventListener("click", () => {
        const isMenuShown = mobileMenu.classList.toggle("show");

        menuBtn.innerHTML = isMenuShown ? '<i class="fa-solid fa-times"></i>' : '<i class="fa-solid fa-bars"></i>';

        if (isMenuShown) {
            mobileMenu.classList.remove("hidden");
        } else {
            mobileMenu.classList.add("hidden");
        }
    });
});
</script>

<style scoped></style>
