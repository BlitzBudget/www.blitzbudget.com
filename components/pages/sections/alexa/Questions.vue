<template>
  <div class="section section-pills">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto">
          <h2 class="title text-center">Got Questions?</h2>
          <p class="text-center">
            From setting up the skill to troubleshooting it, we’ve got answers.
          </p>

          <div
            class="questions-container mt-3 ml-3 ml-md-5 ml-lg-0 mb-3 mb-lg-0"
          >
            <h2
              class="my-5 questions-section active"
              @click="expandQuestionsSection"
            >
              Enabling the skill
              <em class="now-ui-icons arrows-1_minimal-down"></em>
            </h2>
            <div class="foldable-section">
              <div class="question-container">
                <h4
                  class="info-title my-0"
                  id="how-do-i-enable-skill"
                  @click="expandAnswer"
                  v-bind:class="[alexaQuestions]"
                >
                  How do I enable BlitzBudget skill for Amazon Alexa?
                </h4>
                <div class="answer-container mt-3">
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
                  <ul>
                    <li>Enter your voice code.</li>
                    <li>
                      Enter your login credentials for BlitzBudget account.
                    </li>
                  </ul>
                  <p>Optionally you could optout of voice code.</p>
                  <p>
                    After successfully saving the voice code. You will then be
                    redirected to link your account with Alexa. You may be
                    requested to login again with the BlitzBudget account.
                  </p>
                  <p>
                    When your account has been successfully paired, you'll see a
                    screen that says, “Your BlitzBudget skill was successfully
                    linked.” You are now set up to use the BlitzBudget skill
                    across all of your Amazon devices, including the Echo and
                    the Echo Show.
                  </p>
                </div>
              </div>
              <div class="question-container">
                <h4
                  class="info-title my-0"
                  @click="expandAnswer"
                  v-bind:class="[alexaQuestions]"
                >
                  Do I need to pair every Amazon device to my BlitzBudget skill?
                </h4>
                <div class="answer-container mt-3">
                  <p>
                    Nope. Once you've paired your account with the Alexa app. It
                    can then be accessed all the Amazon devices.
                  </p>
                </div>
              </div>
              <div class="question-container">
                <h4
                  class="info-title my-0"
                  @click="expandAnswer"
                  v-bind:class="[alexaQuestions]"
                >
                  Does Alexa store the information accessed through BlitzBudget?
                </h4>
                <div class="answer-container mt-3">
                  <p>No.</p>
                </div>
              </div>
              <div class="question-container">
                <h4
                  class="info-title my-0"
                  @click="expandAnswer"
                  v-bind:class="[alexaQuestions]"
                >
                  Why can't Alexa access my BlitzBudget account after enabling
                  the skill?
                </h4>
                <div class="answer-container mt-3">
                  <p>
                    You might need to link your Alexa with BlitzBudget account.
                    Refer
                    <a hre="#how-do-i-enable-skill"
                      >How do I enable BlitzBudget skill for Amazon Alexa?</a
                    >.
                  </p>
                </div>
              </div>
              <div class="question-container">
                <h4
                  class="info-title my-0"
                  @click="expandAnswer"
                  v-bind:class="[alexaQuestions]"
                >
                  How does Alexa know the information in the BlitzBudget
                  account?
                </h4>
                <div class="answer-container mt-3">
                  <p>
                    When you've linked your BlitzBudget account information with
                    Alexa. BlitzBudget can use Alexa to interact with you. But,
                    Do not worry, We do not share any of your information with
                    Amazon (or anyone else).
                  </p>
                </div>
              </div>
              <div class="question-container">
                <h4
                  class="info-title my-0"
                  @click="expandAnswer"
                  v-bind:class="[alexaQuestions]"
                >
                  Will my BlitzBudget credentials be shared with Alexa?
                </h4>
                <div class="answer-container mt-3">
                  <p>No. We do not share your credentials with anyone!</p>
                </div>
              </div>
              <div class="question-container">
                <h4
                  class="info-title my-0"
                  @click="expandAnswer"
                  v-bind:class="[alexaQuestions]"
                >
                  How do I unlink my BlitzBudget account from Alexa?
                </h4>
                <div class="answer-container mt-3">
                  <p>
                    You could disable the
                    <a
                      title="Link opens in a new window"
                      target="_blank"
                      class="text-success"
                      href="https://www.amazon.com/dp/B08PZBNBSF"
                      >BlitzBudget skill</a
                    >
                    to unlink BlitzBudget from Alexa.
                  </p>
                </div>
              </div>
              <div class="question-container">
                <h4
                  class="info-title my-0"
                  @click="expandAnswer"
                  v-bind:class="[alexaQuestions]"
                >
                  What is a voice code?
                </h4>
                <div class="answer-container mt-3">
                  <p>
                    A 4-digit code (numbers only) that you make so we can verify
                    it's really you before saying your information out loud.
                  </p>
                </div>
              </div>
              <div class="question-container">
                <h4
                  class="info-title my-0"
                  @click="expandAnswer"
                  v-bind:class="[alexaQuestions]"
                >
                  How do I change my voice code?
                </h4>
                <div class="answer-container mt-3">
                  <p>
                    By disabling and then reenabling your
                    <a
                      title="Link opens in a new window"
                      target="_blank"
                      class="text-success"
                      href="https://www.amazon.com/dp/B08PZBNBSF"
                      >BlitzBudget skill</a
                    >.
                  </p>
                </div>
              </div>
              <div class="question-container">
                <h4
                  class="info-title my-0"
                  @click="expandAnswer"
                  v-bind:class="[alexaQuestions]"
                >
                  What should I do if my voice code isn't working?
                </h4>
                <div class="answer-container mt-3">
                  <p>
                    You can disable and then reenable your
                    <a
                      title="Link opens in a new window"
                      target="_blank"
                      class="text-success"
                      href="https://www.amazon.com/dp/B08PZBNBSF"
                      >BlitzBudget skill</a
                    >
                    to set a new voice code.
                  </p>
                </div>
              </div>
              <div class="question-container">
                <h4
                  class="info-title my-0"
                  @click="expandAnswer"
                  v-bind:class="[alexaQuestions]"
                >
                  Should my voice code be the same as my ATM PIN?
                </h4>
                <div class="answer-container mt-3">
                  <p>
                    No. For security purposes, It is discouraged to set the same
                    voice code as your ATM PIN.
                  </p>
                </div>
              </div>
              <div class="question-container">
                <h4
                  class="info-title my-0"
                  @click="expandAnswer"
                  v-bind:class="[alexaQuestions]"
                >
                  How do I disable my voice code?
                </h4>
                <div class="answer-container mt-3">
                  <p>
                    You can disable and then reenable your
                    <a
                      title="Link opens in a new window"
                      target="_blank"
                      class="text-success"
                      href="https://www.amazon.com/dp/B08PZBNBSF"
                      >BlitzBudget skill</a
                    >
                    Choose "Optout of voice code" while linking your BlitzBudget
                    skill again.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="questions-container ml-3 ml-md-5 ml-lg-0 mb-3 mb-lg-0">
            <h2
              class="my-5 questions-section active"
              @click="expandQuestionsSection"
            >
              Using the skill
              <em class="now-ui-icons arrows-1_minimal-down"></em>
            </h2>
            <div class="foldable-section">
              <div class="question-container">
                <h4
                  class="info-title my-0"
                  @click="expandAnswer"
                  v-bind:class="[alexaQuestions]"
                >
                  What are all the things that I could do with my BlitzBudget
                  skill?
                </h4>
                <div class="answer-container mt-3">
                  <p>
                    The BlitzBudget skill provides yet another means to manage
                    your finances including budgets, transactions, goals, and
                    more.
                  </p>
                  <br />
                  <p>
                    You can ask the BlitzBudget skill for information about:
                  </p>
                  <br />
                  <p>Ask for information</p>
                  <ul>
                    <li>Expense by date</li>
                    <li>Earnings by date</li>
                    <li>Transaction total by date</li>
                    <li>Get your current budget</li>
                    <li>Get your default wallet for Alexa</li>
                    <li>Get your default account for the wallet</li>
                    <li>Get your tag's transaction balance</li>
                    <li>See how much you have left to spend in a category</li>
                    <li>See how much you have spend in a category</li>
                    <li>Send a new feature request</li>
                  </ul>
                  <br />
                  <p>Add information</p>
                  <ul>
                    <li>Add a new category by date</li>
                    <li>Add a new wallet with a currency</li>
                    <li>Add a new goal for the wallet</li>
                    <li>Add a new budget for the wallet</li>
                    <li>Add a new transaction for in the wallet.</li>
                  </ul>
                  <br />
                  <p>Change information:</p>
                  <ul>
                    <li>Change your budget for the default wallet.</li>
                    <li>Change your default account for your wallet.</li>
                    <li>Change your default wallet for Alexa</li>
                  </ul>
                  <p>
                    Disclaimer: Your financial information will be read aloud
                    and/or displayed visually.
                  </p>
                </div>
              </div>
              <div class="question-container">
                <h4
                  class="info-title my-0"
                  @click="expandAnswer"
                  v-bind:class="[alexaQuestions]"
                >
                  How do I access my BlitzBudget account in Alexa?
                </h4>
                <div class="answer-container mt-3">
                  <p>Alexa, Ask Blitz Budget what's my balance?</p>
                </div>
              </div>
            </div>
          </div>
          <div class="questions-container ml-3 ml-md-5 ml-lg-0 mb-3 mb-lg-0">
            <h2
              class="my-5 questions-section active"
              @click="expandQuestionsSection"
            >
              FAQ <em class="now-ui-icons arrows-1_minimal-down"></em>
            </h2>
            <div class="foldable-section">
              <div class="question-container">
                <h4
                  class="info-title my-0"
                  @click="expandAnswer"
                  v-bind:class="[alexaQuestions]"
                >
                  Can someone else access my BlitzBudget account in Alexa?
                </h4>
                <div class="answer-container mt-3">
                  <p>
                    It depends. Anyone with a keen ear should be able to hear
                    what you say to Alexa. Anyone with access to your Alexa
                    device can surely ask it questions. That's why we would like
                    you to have a voice code as an extra layer of security. But,
                    No one can access your BlitzBudget credentials.
                  </p>
                </div>
              </div>
              <div class="question-container">
                <h4
                  class="info-title my-0"
                  @click="expandAnswer"
                  v-bind:class="[alexaQuestions]"
                >
                  When should I access my BlitzBudget skill in Alexa?
                </h4>
                <div class="answer-container mt-3">
                  <p>
                    Whenever you want. Alexa is always on, ready to give you any
                    information that you want!
                  </p>
                </div>
              </div>
              <div class="question-container">
                <h4
                  class="info-title my-0"
                  @click="expandAnswer"
                  v-bind:class="[alexaQuestions]"
                >
                  Will I know if someone else uses my BlitzBudget skill through
                  Alexa?
                </h4>
                <div class="answer-container mt-3">
                  <p>
                    Yes, We would be sending you a home card to your Alexa app
                    every time someone makes an addition, modification, or
                    deletion in your BlitzBudget account using Alexa.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      alexaQuestions: "alexa-questions",
    };
  },
  methods: {
    expandAnswer: function (event) {
      event.target.classList.toggle("active");
      var content = event.target.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    },
    expandQuestionsSection: (event) => {
      var content = event.target.nextElementSibling;
      if (event.target.classList.contains("active")) {
        content.style.maxHeight = 0;
      } else {
        content.style.maxHeight = "5000px";
      }
      event.target.classList.toggle("active");
      event.target.classList.toggle("my-5");
      event.target.lastElementChild.classList.toggle("transform180");
    },
  },
};
</script>

<style>
.questions-container {
  cursor: pointer;
}

.questions-container > h3 {
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0;
  margin: 1.3rem 0;
  display: flex;
  align-items: center;
}

.answer-container {
  max-height: 0;
  cursor: auto;
}

.foldable-section,
.answer-container {
  transition: all 0.2s ease-out;
  overflow: hidden;
}

.alexa-questions,
.questions-section,
.questions-section > span {
  cursor: pointer;
  transition: all 0.5s;
}

.transform180 {
  -webkit-transform: rotate(-180deg);
  -moz-transform: rotate(-180deg);
  -ms-transform: rotate(-180deg);
  -o-transform: rotate(-180deg);
  transform: rotate(-180deg);
}

em.now-ui-icons {
  font-size: 1rem;
}
</style>