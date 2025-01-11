<template>
    <Header />
    <Hero />
    <Process />
    <Project />
    <About />
    <Newsletter />
    <Footer />
    <BackToTop />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import Process from "@/components/Process.vue";
import Project from "@/components/Project.vue";
import About from "@/components/About.vue";
import Newsletter from "@/components/Newsletter.vue";
import Footer from "@/components/Footer.vue";
import BackToTop from "@/common/BackToTop.vue";

// implement AOS
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ duration: 1000 });
</script>

<style scoped></style>
