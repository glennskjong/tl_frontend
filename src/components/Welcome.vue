<template>
<div>
  <button type="button" @click="pushMain">See toplists</button> 
  <button :disabled="true" type="button" @click="pushDailyChanges">Daily changes</button> 
  <button :disabled="true" type="button" @click="pushTopListsIntersection">Top list intersections</button> 
  <button :disabled="true" type="button" @click="pushCDFDomains">CDF</button> 
</div>
</template>

<script>
export default {
  name: "Welcome",
  methods: {
    pushMain() {
      this.$router.push({ name: "Toplists" });
    },
    pushDailyChanges() {
      this.$router.push({ name: "DailyChanges" });
    },
    pushTopListsIntersection() {
      this.$router.push({ name: "TopListsIntersection" });
    },
    pushCDFDomains() {
      this.$router.push({ name: "CDFDomains" });
    }
  }
};
</script>

<style scoped>
</style>
