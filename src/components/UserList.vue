<template>   
        <div class="container">
            <div class="col-md-4">
                
                    <user-details
                    v-for="user in users" :key="user.id"
                    :user="user"
                    />
                
            </div>
        </div>
     
       
</template>


<script>
// import { component } from 'vue/types/umd'
import { mapState } from 'vuex'
import UserDetails from '../components/UserDetails.vue'
export default {
  components: { UserDetails },
    name: 'user-list',
    data() {
        return {
            
        }
    },
    computed: {
        ...mapState(['users'])
    }
}
</script>

<style>

</style>