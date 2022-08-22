<template>
  <div class="header">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Users List</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
          <b-nav-item href="/about">About</b-nav-item>
          <b-nav-item href="/users">Users</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto"> </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "comp-header",
};
</script>

<style>
.header{
  position: relative;
  top: 0px;
  width: 100%;
  
}
</style>
