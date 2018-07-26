<template>
  <GChart 
    v-if="chartData && chartData.length"
    type="LineChart"
    :data="chartData"
    :options="chartOptions"
  />
</template>


<script>
import axios from "axios";
import Vue from "vue";

export default {
  name: "TopListsIntersection",
  data() {
    return {
      domains: [],
      chartData: [],
      chartOptions: {}
    };
  },

  created() {
    this.getIntersections();
  },

  methods: {
    getIntersections() {
      axios
        .get("http://localhost:8888/intersections-between-lists")
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
      this.chartData.push([
        "Date",
        "Alexa-Umbrella",
        "Alexa-Majestic",
        "Umbrella-Majestic"
      ]);
      var arr = JSON.parse(response);
      arr.forEach(element => {
        this.chartData.push([element[0], element[1], element[2], element[3]]);
      });
      this.chartOptions = {
        chart: {
          title: "Top list intersections"
        }
      };
    }
  }
};
</script>

<style>
</style>
