<template>
    <container>
        <div class="text-center my-5">
            <h1 class="display-4 text-secondary">{{ title }}</h1>
        </div>

        <!-- Create a carousel for the images -->
        <b-carousel
            id="carousel-fade"
            fade
            indicators
            controls
            img-width="100vw"
        >
            <!-- Go through the images and add them to the carousel -->
            <b-carousel-slide v-for="image in carouselImages" :key="image.id" :img-src="image.src" :img-alt="image.alt">
            </b-carousel-slide>
        </b-carousel>
    
        <!-- Add images based on if they're left, right or centered -->
        <div class="clearfix">
            <b-img v-for="image in imageBlock" :key="image.id" :src="image.src" :img-alt="image.alt" :left="image.left" :right="image.right" :center="image.center" rounded></b-img>
        </div>

        <!-- Can make image fluid just by adding it to the b-img -->
        <b-img :src="wideHills.src" :alt="wideHills.alt" fluid></b-img>
    </container>
</template>

<script>
    export default {
        data: () => {
            return {
                title: 'Responsive Images',
                carouselImages: [
                    {
                        src: require('@/assets/TheBasement.jpg'),
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
                ],
                imageBlock: [
                    {
                        src: require('@/assets/RockPile.jpg'),
                        alt: 'A pile of rocks in nature',
                        left: true,
                        right: false,
                        center: false
                    },
                    {
                        src: require('@/assets/RockPile.jpg'),
                        alt: 'A pile of rocks in nature',
                        left: false,
                        right: true,
                        center: false
                    },
                    {
                        src: require('@/assets/RockPile.jpg'),
                        alt: 'A pile of rocks in nature',
                        left: false,
                        right: false,
                        center: true
                    },
                ],
                wideHills: {
                    src: require('@/assets/WideHills.jpg'),
                    alt: "A skyline of a mountain range"
                }
            };
        },
    };
</script>
