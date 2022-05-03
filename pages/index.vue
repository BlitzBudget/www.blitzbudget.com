<template>
  <div class="wrapper landing-page">
    <div class="page-header page-header-small rellax-header">
      <div
        class="page-header-image"
        style="background-image: url('img/bg26.jpg')"
      ></div>
      <div class="content-center">
        <h1 class="title">One place to control your money</h1>
        <div class="text-center">
          Join our growing community of people who get to control their finances
          with BlitzBudget.We're offering complete control over your data,
          highest security and affordable services.
        </div>
      </div>
    </div>
    <features-section></features-section>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput, Tabs, TabPane } from "@/components";
import initParallax from "@/utils/initParallax";
import FeaturesSection from "@/components/pages/sections/Features";
export default {
  name: "landing-page",
  layout: "gray-footer",
  components: {
    Card,
    Tabs,
    TabPane,
    FeaturesSection,
    [Button.name]: Button,
    [FormGroupInput.name]: FormGroupInput,
  },
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        message: "",
      },
    };
  },
  mounted() {
    initParallax();
  },
};
</script>
<style>
</style>
