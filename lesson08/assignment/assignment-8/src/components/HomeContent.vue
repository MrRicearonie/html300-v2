<template>
    <div>
        <!-- Create the jumbotron -->
        <b-jumbotron header-level="3" variant="text-center rounded-lg">
            <template #header>{{ headerText }}<span class="text-primary">{{ colorText }}</span></template>
            <template #lead>{{ leadText}} </template>
            <hr class="my-4">
            <p>{{ jumbotronText }}</p>
            <div class="btnContainer">
                <b-button variant="outline-primary" size="lg" href="#" class="homeBtn" id="button-1" @click="btnClicked = !btnClicked">{{ btnPersonal }}</b-button>
                <b-button variant="outline-primary" size="lg" href="#" class="homeBtn" id="button-2" @click="btnClicked = !btnClicked">{{ btnShop }}</b-button>
                <b-button variant="outline-primary" size="lg" href="#" class="homeBtn" id="button-3" @click="btnClicked = !btnClicked">{{ btnBlog }}</b-button>
            </div>
        </b-jumbotron>
        <!-- Show an alert if the user clicks the button -->
        <b-alert show variant="danger" v-if = "btnClicked">{{ alert }}</b-alert>
        <p v-else>{{ placeholder }}</p>
        <b-tooltip target="button-1" placement="bottom">{{ tooltipText }} <span class="text-primary">{{ colorText }}</span></b-tooltip>
        <b-tooltip target="button-2" placement="bottom">{{ tooltipText }} <span class="text-primary">{{ colorText }}</span></b-tooltip>
        <b-tooltip target="button-3" placement="bottom">{{ tooltipText }} <span class="text-primary">{{ colorText }}</span></b-tooltip>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            headerText: "Hello, ",
            colorText: "Colors!",
            leadText: "Welcome to the best way to find a color palette for your next site!",
            jumbotronText: "At a lost for what colors to use for your site, or already have some in mind but need some complimentary colors for them? Color Cards is here to help! Based on your color choices, the site will generate a complementary palette and show you examples on how they will look on a webpage. Let's get started by choosing what type of site you are going to be building.",
            btnPersonal: "Personal Site",
            btnShop: "Shop",
            btnBlog: "Blog",
            tooltipText: "Let's find those",
            btnClicked: false,
            alert: 'The site is currently being constructed. Sorry for the inconvenience',
            placeholder: 'Use links in navbar for now'
        };
    }
};
</script>
