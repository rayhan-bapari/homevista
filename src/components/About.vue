<template>
    <!-- About Area -->
    <section class="about__area">
        <div class="about__hedaer--config">
            <h2 class="about__header--title" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                We are a global, boutique real estate brokerage
            </h2>
        </div>
        <div class="about__content--area">
            <div class="about__content">
                <h2 class="about__content--title" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                    The transfer of real estate
                </h2>
                <p class="about__content--desc" data-aos="fade-right" data-aos-duration="1000" data-aos-delay="300">
                    Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin.
                    Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus
                    scelerisque vehicula ante nunc. Tellus consequat nisl quis nisl justo.
                </p>
                <div class="button__group" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                    <button type="button" class="book__btn">Book Now</button>
                    <button type="button" class="learn__btn">Learn More</button>
                </div>
                <div class="counter" data-aos="flip-down" data-aos-duration="1000" data-aos-delay="300">
                    <div class="customers__count">
                        <span class="customer__value">{{ customerValue }}</span> <!-- Updated binding -->
                        <span class="counter__title">Customers</span>
                    </div>

                    <div class="projects__count">
                        <span class="projects__value">{{ projectsValue }}</span> <!-- Updated binding -->
                        <span class="counter__title">Projects</span>
                    </div>

                    <div class="agents__count">
                        <span class="agents__value">{{ agentsValue }}</span> <!-- Updated binding -->
                        <span class="counter__title">Happy Agents</span>
                    </div>
                </div>

            </div>
            <div class="about__img" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="300">
                <img src="../assets/images/about-img.png" alt="" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const customerValue = ref(0);
const projectsValue = ref(0);
const agentsValue = ref(0);

onMounted(() => {
    let customerCounter = 0;
    let projectsCounter = 0;
    let agentsCounter = 0;

    const customerInterval = setInterval(() => {
        if (customerCounter < 80) {
            customerCounter++;
            customerValue.value = customerCounter + "+";
        } else {
            clearInterval(customerInterval);
        }
    }, 20);

    const projectsInterval = setInterval(() => {
        if (projectsCounter < 125) {
            projectsCounter++;
            projectsValue.value = projectsCounter + "+";
        } else {
            clearInterval(projectsInterval);
        }
    }, 20);

    const agentsInterval = setInterval(() => {
        if (agentsCounter < 120) {
            agentsCounter++;
            agentsValue.value = agentsCounter + "+";
        } else {
            clearInterval(agentsInterval);
        }
    }, 20);
});
</script>

<style scoped></style>
