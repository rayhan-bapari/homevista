<template>
    <div id="backToTop"
        class="fixed bottom-0 right-0 z-50 w-[50px] h-[50px] flex justify-center items-center rounded-[50%] bg-gray text-white text-xl font-normal leading-[120%] mr-[30px] mb-[30px] cursor-pointer transition-all duration-300 ease-in-out">
        <i class="fas fa-chevron-up"></i>
    </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    const backToTop = document.getElementById('backToTop')

    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            backToTop.classList.add('visible')
        } else {
            backToTop.classList.remove('visible')
        }
    })

    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    })
})
</script>

<style scoped></style>
