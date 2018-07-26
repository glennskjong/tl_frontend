<template>
  <div id="app">
    <AppNavigation/>
    <main class="content">
      <router-view/>
    </main>
  </div>
</template>

<script>
import AppNavigation from "@/components/Navigation";

export default {
  name: "App",
  components: { AppNavigation }
};
</script>

<style>
html,
body {
  height: 100%;
}

.content {
  margin-left: 5%;
  margin-right: 5%;
  flex: 1 0 auto;
}
</style>
