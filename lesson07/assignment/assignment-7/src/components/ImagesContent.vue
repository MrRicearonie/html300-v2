<template>
    <b-container>
        <b-carousel
            id="carousel-fade"
            fade
            indicators
            controls
            img-width="100vw"
        >
            <b-carousel-slide v-for="image in carouselImages" :key="image.id" :img-src="image.src">
            </b-carousel-slide>
        </b-carousel>

        <!-- <div v-for="image in carouselImages" :key="image.id">
            <img :src="image.src" :alt="image.alt" class="img-fluid">
        </div> -->
    </b-container>
</template>

<script>
    export default {
        data: () => {
            return {
                carouselImages: [
                    {
                        src: require("@/assets/TheBasement.jpg"),
                        alt: "A basement of an abandoned building covered in graffiti"
                    },
                    {
                        src: require('@/assets/RubyBeach.jpg'),
                        alt: "Sunset over the ocean from a beach with a tall island"
                    },
                    {
                        src: require('@/assets/MossRockGrass.jpg'),
                        alt: "A rock covered in moss"
                    },
                ]
            };
        },
    };
</script>