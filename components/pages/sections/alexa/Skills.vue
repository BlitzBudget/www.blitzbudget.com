<template>
  <div class="section section-pills">
    <div class="container">
      <div class="row">
        <div class="col-md-8 ml-auto mr-auto text-center">
          <h2 class="title">Things you can say</h2>
          <p class="text-center mb-5">
            Here are some things you can ask Alexa about your BlitzBudget
            accounts. First, be sure to say,
            <strong><u>“Alexa, open Blitz Budget”</u></strong> and provide your
            optional voice code.
          </p>
          <tabs type="danger" centered pills>
            <tab-pane label="“Add” Skills">
              <div class="row">
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"Add a new category for beauty"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"Add a new wallet for euro"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">
                      "Add a new goal with a target amount of ten euros"
                    </h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">
                      "Add a new budget for extra income category"
                    </h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">
                      "Add a new transaction for salary category with twenty
                      euros"
                    </h3>
                  </card>
                </div>
              </div>
            </tab-pane>
            <tab-pane label="“Get” Skills">
              <div class="row">
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"What's my balance?"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"What are my recent transactions?"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"How much did I spend today?"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"How much did I earn today?"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"What is my transaction total today?"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">
                      "Whats the budget amount for extra income?"
                    </h3></card
                  >
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"Whats my default account?"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"Whats my default wallet?"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"How much did I earn on monthly tags?"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">
                      "Whats my budget balance for beauty category?"
                    </h3>
                  </card>
                </div>
              </div>
            </tab-pane>
            <tab-pane label="“Change” Skills">
              <div class="row">
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">
                      "Change the budget amount for education"
                    </h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"Change the default account to HSBC"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"Change the default wallet to rupiah"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">
                      "Send a new feature request for paying credit dues"
                    </h3>
                  </card>
                </div>
              </div>
            </tab-pane>
            <tab-pane label="All Skills">
              <div class="row">
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"What's my balance?"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"What are my recent transactions?"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"How much did I spend today?"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"How much did I earn today?"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"What is my transaction total today?"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">
                      "Whats the budget amount for extra income?"
                    </h3></card
                  >
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"Whats my default account?"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"Whats my default wallet?"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"How much did I earn on monthly tags?"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">
                      "Whats my budget balance for beauty category?"
                    </h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"Add a new category for beauty"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"Add a new wallet for euro"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">
                      "Add a new goal with a target amount of ten euros"
                    </h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">
                      "Add a new budget for extra income category"
                    </h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">
                      "Add a new transaction for salary category with twenty
                      euros"
                    </h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">
                      "Change the budget amount for education"
                    </h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"Change the default account to HSBC"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">"Change the default wallet to rupiah"</h3>
                  </card>
                </div>
                <div class="col-lg-4 col-12">
                  <card
                    class="text-center p-lg-3 m-lg-2 my-2 p-0 alexa-question"
                  >
                    <h3 class="mb-0">
                      "Send a new feature request for paying credit dues"
                    </h3>
                  </card>
                </div>
              </div>
            </tab-pane>
          </tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Card, Tabs, TabPane } from "@/components";

export default {
  components: {
    Card,
    Tabs,
    TabPane,
  },
  Card,
};
</script>

<style>
</style>