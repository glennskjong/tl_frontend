<template>
  <div>
    <b-navbar
      toggleable="md" >
      <b-btn
        v-b-toggle.nav_collapse
        class="toggler d-md-none" />
      <div
        class="navbar-brand-container"
        @click="pushTopLists">
        Toplists
      </div>
      <b-collapse
        id="nav_collapse"
        is-nav
      >
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <!-- Using button-content slot -->
          <b-nav-item
            @click="pushTopLists"
          >Toplists</b-nav-item>
                   <b-nav-item
            @click="pushDailyChanges"
            hidden
          >Daily changes</b-nav-item>
                    <b-nav-item
            @click="pushTopListIntersections"
          >Top list intersections</b-nav-item>
                    <b-nav-item
            @click="pushCDF"
            hidden
          >CDF</b-nav-item>
         </b-navbar-nav>
    </b-collapse></b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navigation",

  methods: {
    pushTopLists() {
      this.$router.push({
        name: "Toplists"
      });
    },
    pushDailyChanges() {
      this.$router.push({
        name: "DailyChanges"
      });
    },
    pushTopListIntersections() {
      this.$router.push({
        name: "TopListsIntersection"
      });
    },
    pushCDF() {
      this.$router.push({
        name: "CDFDomains"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.navbar-brand-container {
  .home-icon {
    color: gray !important;
    font-size: 1.5rem;
    top: 0.1rem !important;
  }

  &:hover {
    user-select: none !important;
    cursor: pointer !important;
    div#navbar-brand.navbar-brand {
      color: darkred !important;
    }
    .home-icon {
      color: darkred !important;
    }
  }
}

.navbarLogo {
  vertical-align: middle !important;
}

.navbar {
  -webkit-box-shadow: 0 8px 6px -6px #999 !important;
  -moz-box-shadow: 0 8px 6px -6px #999 !important;
  box-shadow: 0 8px 6px -6px #999 !important;
  background-color: white;
  margin-bottom: 2.1rem !important;

  #navbar-brand {
    position: absolute !important;
    bottom: 0.3rem !important;
    font-size: 1.2rem !important;
    margin-left: 0.8rem !important;
    color: gray !important;

    &:hover {
      user-select: none !important;
      cursor: pointer !important;
    }
  }

  .nav-item {
    margin-right: 10px;
  }

  .nav-link {
    color: gray !important;

    &:visited,
    &:active {
      color: gray !important;
    }

    &:hover {
      color: darkred !important;
    }
  }

  .toggler {
    border-color: transparent;
    font-size: 1.5rem;
    line-height: 1;
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: "";
    background: no-repeat center center;
    background-image: none;
    background-size: auto auto;
    background-size: 100% 100%;
    overflow: visible;
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(65, 65, 65, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  }
}
</style>
