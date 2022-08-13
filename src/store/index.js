import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users : [
      {
        id: 1,
        fullname: 'John Doe',
        status: 'Active',
        gender: 'Male',
        dob: 'Born 23.05.1992',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        id: 2,
        fullname: 'Ka Ching',
        status: 'Active',
        gender: 'Female',
        dob: 'Born 09.05.1995',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        url: 'https://th.bing.com/th/id/OIP.NGdWtn4drV3_atUs9zWaiAAAAA?pid=ImgDet&rs=1'
      },
      {
        id: 3,
        fullname: 'Shroud Michael',
        status: 'Active',
        gender: 'Male',
        dob: 'Born 19.04.1994',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        id: 4,
        fullname: 'Dat kun',
        status: 'offline',
        gender: 'Male',
        dob: 'Born 31.07.1996',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        id: 5,
        fullname: 'Fischl Ku',
        status: 'Active',
        gender: 'Female',
        dob: 'Born 01.03.1990',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
      {
        id: 6,
        fullname: 'Your Mom',
        status: 'active',
        gender: 'Female',
        dob: 'Born 18.06.1990',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
    actEdit({commit}, data) {
      console.log('action edit', data)
  }
  },
  modules: {
  }
})
