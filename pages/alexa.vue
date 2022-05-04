<template>
  <div class="wrapper landing-page">
    <div class="page-header page-header-small rellax-header">
      <div
        class="page-header-image"
        style="background-image: url('img/bg4.jpg')"
      ></div>
      <div class="content-center">
        <h1 class="title">Alexa, ask Blitz Budget, What's my balance?</h1>
        <div class="text-center">
          Now, from tracking your spending to planning your goals, now you can
          manage your BlitzBudget accounts through Amazon Alexa-enabled devices.
          Talk about convenience.
        </div>
      </div>
    </div>
    <!--     *********     FEATURES 3      *********      -->
    <div class="features-3">
      <div class="container">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto">
            <h2 class="title">Simpler. Smarter. Faster.</h2>
            <h4 class="description">
              Manage your BlitzBudget account simply by using your voice.
            </h4>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="info info-hover">
              <div class="icon icon-success icon-circle">
                <em class="now-ui-icons business_money-coins"></em>
              </div>
              <h4 class="info-title">Check Your Balance</h4>
              <p class="description">
                Quickly check the balance of your wallet, accounts or
                categories.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="info info-hover">
              <div class="icon icon-info icon-circle">
                <em class="now-ui-icons shopping_credit-card"></em>
              </div>
              <h4 class="info-title">Track Your Expenses</h4>
              <p class="description">
                Stay on top of your spending by asking Alexa for the most recent
                transactions on your accounts.
              </p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="info info-hover">
              <div class="icon icon-success icon-circle">
                <em class="now-ui-icons shopping_cart-simple"></em>
              </div>
              <h4 class="info-title">Add Your Earnings</h4>
              <p class="description">
                Easily add your spendings, and earnings with a single voice
                command.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--     *********    END FEATURES 3      *********      -->
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
