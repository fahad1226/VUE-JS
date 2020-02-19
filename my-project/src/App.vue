<template>
  <div id="app" >

<!--     <router-link :to="{path: '/'}">Home</router-link>
    <router-link :to="{ path: '/dummy/1' }">Test 1</router-link>
    <router-link :to="{ path: '/dummy/2' }">Test 2</router-link>
    <router-link :to="{ path: '/dummy/3' }">Test 3</router-link>
    <router-link :to="{ path: '/dummy/4' }">Test 4</router-link>
   <router-view></router-view>
 -->
  <navbar @search="search" ></navbar>
<!--   <vuetest></vuetest> -->

    <!-- <myself @NewNameadded="addName" :myinfo="myinfo"></myself>
    <hr>
    <simple @removedPeople="removedPeople" @NewPeopleAdded="addPeople" :people="people"></simple>
    <test @newItemAdded="addName" :items="items"></test>  -->
    <router-view></router-view>
  </div>



</template>

<script>

import Navbar from './components/Navbar'
import Cart from './components/views/Cart'
import Myself from './components/Myself'
import Test from './components/views/Test'
import data from './data.js'
import Simple from './components/views/Simple'
import Vuetest from './components/views/Vuetest'
import Practice from './components/views/Practice'
import Api from './components/views/Api'



export default {
  components: {
    Navbar,
    Cart,
    Myself,
    Test,
    Simple,
    Vuetest,
    Practice,
    Api
  },

  data() {
    return {
      items: [],
      myinfo: [{
        name: 'Fahad Bin Munir',
        aboout: 'Programming Languages',
        language_1 : 'Python',
        language_2 : 'PHP',
        language_3 : 'Javascript',
        university: 'Premier University',
        profession: 'Programmer',
        passion: 'Programming'
      }],
      people: [{
        id: 1,
        name: 'Fahad',
        email: 'fahadbinmnr@gmail.com',
        university: 'Premier University'
      }]
    }
  },

  mounted() {
    this.items = data
    console.log(data);
  },

  methods: {
     search(keyword) {
      this.items = data.filter(name => {
        return name.first_name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      })
    },
    addName(test) {
      this.myinfo.push(test)
    },

    addPeople(people) {

      this.people.push(people)
    },
    removedPeople(index) {

      this.people.splice(index, 1)
    },

   
  }
}
</script>

<style>

</style>
