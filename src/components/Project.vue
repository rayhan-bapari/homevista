<template>
    <section class="project__area">
        <div class="project__header--config">
            <div class="project__header--content">
                <h3 class="project__header--subtitle" data-aos="fade-right" data-aos-duration="1000"
                    data-aos-delay="300">
                    Best Project of the Years
                </h3>
                <h2 class="project__header--title" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                    Our recent projects
                </h2>
            </div>
            <div class="projects__slider--navigation" data-aos="fade-left" data-aos-duration="1000"
                data-aos-delay="300">
                <div class="swiper-button-prev"></div>
                <div class="swiper-button-next"></div>
            </div>
        </div>
        <div class="projects">
            <swiper :slides-per-view="1" :space-between="30" :free-mode="true" :loop="true"
                :breakpoints="swiperBreakpoints" :modules="modules" :navigation="{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }" class="projectsSlider">
                <swiper-slide v-for="(project, index) in projects" :key="index"
                    :class="'project__card' + ((index % 3) + 1)" data-aos="flip-down" data-aos-duration="1000"
                    data-aos-delay="300">
                    <div class="project__img" :style="getBackgroundStyle(project.image)"></div>
                    <div class="project__card--content">
                        <h3 class="project__card--title">{{ project.title }}</h3>
                        <p class="project__card--desc">{{ project.description }}</p>
                        <div class="ratings">
                            <i v-for="n in 5" :key="n" :class="[
                                'fas fa-star',
                                { 'fa-regular': n > Math.floor(project.rating) }
                            ]"></i>
                            <span>{{ project.rating }}</span>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, FreeMode } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'

const modules = [Navigation, FreeMode]

const swiperBreakpoints = {
    768: {
        slidesPerView: 2,
        spaceBetween: 16,
    },
    1200: {
        slidesPerView: 3,
        spaceBetween: 16,
    },
    1400: {
        slidesPerView: 4,
        spaceBetween: 16,
    },
}

const getBackgroundStyle = (image) => {
    return {
        background: `linear-gradient(116deg,
            rgba(193, 222, 232, 0.7) 9.86%,
            rgba(255, 255, 255, 0) 52.13%,
            rgba(251, 217, 185, 0.7) 97.99%),
            url(${image}) lightgray 50% / cover no-repeat`
    }
}

const projects = ref([
    {
        title: 'Sobha Hearland II Villas',
        description: 'Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.',
        rating: 4.5,
        image: '/src/assets/images/projects/project-1.png'
    },
    {
        title: 'Sobha Hearland II Villas',
        description: 'Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.',
        rating: 4.5,
        image: '/src/assets/images/projects/project-2.png'
    },
    {
        title: 'Sobha Hearland II Villas',
        description: 'Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.',
        rating: 4.5,
        image: '/src/assets/images/projects/project-3.png'
    },
    {
        title: 'Sobha Hearland II Villas',
        description: 'Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.',
        rating: 4.5,
        image: '/src/assets/images/projects/project-4.png'
    },
    {
        title: 'Sobha Hearland II Villas',
        description: 'Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.',
        rating: 4.5,
        image: '/src/assets/images/projects/project-5.png'
    },
])
</script>

<style scoped></style>
