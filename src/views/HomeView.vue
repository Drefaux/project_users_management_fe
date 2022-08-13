<template>
  <div class="home">
      <user-list />
  </div>
</template>

<script>
import UserList from '../components/UserList.vue'
export default {
  name: 'HomeView',
  components: {
      UserList
  }
}
</script>
