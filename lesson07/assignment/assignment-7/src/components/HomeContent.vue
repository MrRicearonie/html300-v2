<template>
    <container>
        <!-- Create the jumbotron -->
        <b-jumbotron header-level="3" variant="text-center rounded-lg">
            <template #header>Hello, <span class="text-primary">Colors!</span></template>
            <template #lead>{{ leadText}} </template>
            <hr class="my-4">
            <p>{{ jumbotronText }}</p>
            <b-button variant="primary" size="lg" href="#" id="button-1" @click="btnClicked = !btnClicked">{{ btnText }}</b-button>
        </b-jumbotron>
        <!-- Show an alert if the user clicks the button -->
        <b-alert show variant="danger" v-if = "btnClicked">{{ alert }}</b-alert>
        <p v-else>{{ placeholder }}</p>
        <b-tooltip target="button-1" placement="bottom">Let's find those <span class="text-primary">colors!</span></b-tooltip>
    </container>
</template>

<script>
export default {
    data: () => {
        return {
            leadText: "Welcome to the best way to find a color palette for your next site!",
            jumbotronText: "At a lost for what colors to use for your site, or already have some in mind but need some complimentary colors for them? Color Cards is here to help! Based on your color choices, the site will generate a complementary palette and show you examples on how they will look on a webpage. So, lets get started.",
            btnText: "Get Started",
            btnClicked: false,
            alert: 'The site is currently being constructed. Sorry for the inconvenience',
            placeholder: 'Placeholder text'
        };
    }
};
</script>
