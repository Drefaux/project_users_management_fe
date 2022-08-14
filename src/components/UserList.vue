<template>
  <div class="container">
    <div class="form-group row">
      <user-details
        class="col-md-4"
        v-for="user in users"
        :key="user.id"
        :user="user"
      />
    </div>
  </div>
</template>


<script>
// import { component } from 'vue/types/umd'
import axios from 'axios';
// import { mapState } from "vuex";
import UserDetails from "../components/UserDetails.vue";
export default {
  components: { UserDetails },
  name: "user-list",
  data() {
    return {
        users: []
    };
  },
  computed: {
    // ...mapState(["users"]),
  },
  created() {
    axios.get(`http://localhost:3000/api/users`)
    .then(response => {
      this.users = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
};
</script>

<style>
</style>