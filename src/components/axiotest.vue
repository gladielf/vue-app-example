<template>
  <div>
    <h2>{{title}}</h2>
    <v-list two-line light>
      <template
        v-for="(user, i) in users"
      >
        <v-list-tile :key="i">
          <v-list-tile-avatar>
              <img :src="user.picture.medium">
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="user.name.title + ' ' + user.name.first + ' ' + user.name.last"></v-list-tile-title>
            <v-list-tile-sub-title v-text="user.email"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider v-if="i + 1 < users.length" :key="i"></v-divider>
      </template>
    </v-list>
  </div>
</template>

<script>
  import {HTTP} from '../http/http-config'
  
  export default {
    name: 'axiotest',
    data () {
      return {
        title: 'Ejemplo de una llamada a una API con Axios',
        users: [],
        errors: []
      }
    },
    created () {
      HTTP.get('', {
        params: {
          results: 5,
          gender: `female`
        }
      }).then(response => {
        console.log(response.data)
        this.users = response.data.results
      }).catch(e => {
        this.errors.push(e)
      })
    }
  }
</script>

<style scoped>

</style>