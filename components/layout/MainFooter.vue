<template>
  <footer class="footer" :class="{ [`footer-${type}`]: type }" :data-background-color="backgroundColor">
    <div class="container">
      <nav>
        <ul>
          <li>
            <nuxt-link to="/privacy"> Privacy Policy </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/terms"> Terms of Service </nuxt-link>
          </li>
          <li>
            <a href="https://blog.blitzbudget.com/"> Blog </a>
          </li>
          <li>
            <a href="https://app.blitzbudget.com/"> Get Started </a>
          </li>
          <li>
            <nuxt-link to="/alexa"> Alexa </nuxt-link>
          </li>
        </ul>
      </nav>
      <div class="copyright">
        &copy; {{ year }}, Created by
        <a href="https://www.blitzbudget.com" target="_blank" rel="noopener" class="text-success">BlitzBudget</a>.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: {
    backgroundColor: String,
    type: String,
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style>
</style>
