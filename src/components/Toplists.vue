<template>
<div>
  <h3>Top 20 domains</h3>
  <div>
<tabs :options="{ useUrlFragment: false }">
        <tab name="Alexa">
          <vue-good-table
            :columns="columns"
            :rows="alexaDomains"
            :search-options="{
              enabled: true,
            }"
            :pagination-options="{
              enabled: true,
              perPage: 20,
            }"
          styleClass="vgt-table striped bordered"/>
        </tab>
        <tab name="Umbrella">
            <vue-good-table
            :columns="columns"
            :rows="umbrellaDomains"
            :search-options="{
              enabled: true,
            }"
            :pagination-options="{
              enabled: true,
              perPage: 20,
            }"
          styleClass="vgt-table striped bordered"/>
        </tab>
        <tab name="Majestic">
            <vue-good-table
            :columns="columns"
            :rows="majesticDomains"
            :search-options="{
              enabled: true,
            }"
            :pagination-options="{
              enabled: true,
              perPage: 20,
            }"
          styleClass="vgt-table striped bordered"/>
        </tab>
    </tabs>
  </div>
</div>
</template>

<script>
import axios from "axios";

import Vue from "vue";
import { Tabs, Tab } from "vue-tabs-component";
Vue.component("tabs", Tabs);
Vue.component("tab", Tab);
export default {
  name: "Toplists",
  data() {
    return {
      alexaDomains: [],
      majesticDomains: [],
      umbrellaDomains: [],
      domains: [],
      columns: [
        {
          label: "Rank",
          field: "rank"
        },
        {
          label: "Date",
          field: "date"
        },
        {
          label: "Domain",
          field: "domain"
        }
      ]
    };
  },

  created() {
    this.cachedGetTopLists();
  },

  methods: {
    cachedGetTopLists() {
      axios
        .get("http://localhost:8888/current-top-domains")
        .then(
          response => {
            console.log("Got response");
            console.log(response);
            this.parseArray(JSON.stringify(response.data));
          },
          error => {
            console.log("Got error");
            console.log("Error: " + error);
          }
        )
        .catch(function(error) {
          console.log("Got error");
          console.log(error);
        });
    },

    parseArray: function(response) {
      console.log(response);
      var arr = JSON.parse(response);
      arr.forEach(element => {
        this.domains.push({
          list_id: element[0],
          rank: element[1],
          date: element[2],
          domain: element[3]
        });
      });
      this.alexaDomains = this.domains.filter(x => x.list_id === 1);
      this.umbrellaDomains = this.domains.filter(x => x.list_id === 2);
      this.majesticDomains = this.domains.filter(x => x.list_id === 3);
      console.log(this.alexaDomains);
    }
  }
};
</script>

<style>
.tabs-component {
  margin: 4em 0;
}

.tabs-component-tabs {
  border: solid 1px #ddd;
  border-radius: 6px;
  margin-bottom: 5px;
}

@media (min-width: 700px) {
  .tabs-component-tabs {
    border: 0;
    align-items: stretch;
    display: flex;
    justify-content: flex-start;
    margin-bottom: -1px;
  }
}

.tabs-component-tab {
  color: #999;
  font-size: 14px;
  font-weight: 600;
  margin-right: 0;
  list-style: none;
}

.tabs-component-tab:not(:last-child) {
  border-bottom: dotted 1px #ddd;
}

.tabs-component-tab:hover {
  color: #666;
}

.tabs-component-tab.is-active {
  color: #000;
}

.tabs-component-tab.is-disabled * {
  color: #cdcdcd;
  cursor: not-allowed !important;
}

@media (min-width: 700px) {
  .tabs-component-tab {
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 3px 3px 0 0;
    margin-right: 0.5em;
    transform: translateY(2px);
    transition: transform 0.3s ease;
  }

  .tabs-component-tab.is-active {
    border-bottom: solid 1px #fff;
    z-index: 2;
    transform: translateY(0);
  }
}

.tabs-component-tab-a {
  align-items: center;
  color: inherit;
  display: flex;
  padding: 0.75em 1em;
  text-decoration: none;
}

.tabs-component-panels {
  padding: 4em 0;
}

@media (min-width: 700px) {
  .tabs-component-panels {
    border-top-left-radius: 0;
    background-color: #fff;
    border: solid 1px #ddd;
    border-radius: 0 6px 6px 6px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    padding: 4em 2em;
  }
}
</style>
