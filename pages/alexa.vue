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
    <section>
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
                  Stay on top of your spending by asking Alexa for the most
                  recent transactions on your accounts.
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
    </section>
    <!--     *********    END FEATURES 3      *********      -->
    <alexa-skills-section></alexa-skills-section>
    <!--     *********     FEATURES 5      *********      -->
    <section>
      <div class="features-5">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <h2 class="title">Get Started</h2>
              <h4 class="description">
                Once you've downloaded the Amazon Alexa app, you can enable the
                BlitzBudget skill in a snap.
              </h4>
              <div class="row text-center my-5">
                <div class="col-12 col-md-6 my-auto text-md-right alexa-apps">
                  <img
                    class="apple-store"
                    src="/img/playstore/btn_download_appstore_en.svg"
                    alt="apple store icon"
                  />
                </div>
                <div class="col-12 col-md-6 my-auto text-md-left alexa-apps">
                  <img
                    class="play-store"
                    src="/img/playstore/btn_download_playstore_en.svg"
                    alt="play store icon"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-5">
              <div class="info info-horizontal">
                <div class="icon icon-success icon-circle">
                  <em class="now-ui-icons location_world"></em>
                </div>
                <div class="description">
                  <h4 class="info-title">Enable the skill</h4>
                  <p>
                    Open the Alexa app or go to&nbsp;<a
                      title="Link opens in a new window"
                      target="_blank"
                      class="text-success"
                      href="https://www.amazon.com/dp/B08PZBNBSF"
                      >Amazon.com</a
                    >. Select “Skills” and search for BlitzBudget. Select
                    “Enable”.
                  </p>
                </div>
              </div>
              <div class="info info-horizontal">
                <div class="icon icon-info icon-circle">
                  <em class="now-ui-icons sport_user-run"></em>
                </div>
                <div class="description">
                  <h4 class="info-title">Link your account</h4>
                  <p>
                    Enter your BlitzBudget username and password. Optionally,
                    create a voice code.
                  </p>
                </div>
              </div>
              <div class="info info-horizontal">
                <div class="icon icon-success icon-circle">
                  <em class="now-ui-icons ui-2_time-alarm"></em>
                </div>
                <div class="description">
                  <h4 class="info-title">Talk to Alexa</h4>
                  <p>
                    Now you can talk to Alexa about your BlitzBudget account.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-7">
              <div class="tablet-container">
                <img v-lazy="'img/alexa/alexa-echo-white.svg'" alt="alexa white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--     *********    END FEATURES 5      *********      -->
    <alexa-question-section></alexa-question-section>
  </div>
</template>
<script>
import { Card, Button, FormGroupInput, Tabs, TabPane } from "@/components";
import initParallax from "@/utils/initParallax";
import FeaturesSection from "@/components/pages/sections/Features";
import AlexaSkillsSection from "@/components/pages/sections/alexa/skills";
import AlexaQuestionSection from "@/components/pages/sections/alexa/questions";
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
    AlexaSkillsSection,
    AlexaQuestionSection,
  },
  data() {
    return {
      form: {
        firstName: "",
        email: "",
        message: "",
      },
      hideViewMore: false,
    };
  },
  methods: {
    loadMore() {
      // Load More Alexa Questions to display none
      this.hideViewMore = !this.hideViewMore;
    },
  },
  mounted() {
    initParallax();
  },
};
</script>
<style>
</style>
