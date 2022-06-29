<template>
    <div class="jumbotron text-center rounded-lg">
      <h1 class="display-4">Hello, <span class="text-primary">Colors!</span></h1>
      <p class="lead">Welcome to the best way to find a color palette for your next site!</p>
      <hr class="my-4">
      <p>At a lost for what colors to use for your site, or already have some in mind but need some complimentary colors for them? Color Cards is here to help! Based on your color choices, the site will generate a complementary palette and show you examples on how they will look on a webpage. So, lets get started.</p>

      <!-- The button that will take the user to the color picker. Includes a tooltip -->
      <p class="lead">
        <a class="btn btn-primary btn-lg" href="#" role="button" data-toggle="tooltip" data-placement="bottom" title="Let's find those colors!">Get Started</a>
      </p>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            test: "This is a test",
        };
    },
};
</script>
