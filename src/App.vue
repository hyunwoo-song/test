<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" fixed app> <!--app을 사용하면 화면 크기에 따라 다르게-->
      <v-toolbar flat color="transparent">
        <v-tool-bar-title>Account</v-tool-bar-title>
      </v-toolbar>

      <!--구분선-->
      <!-- <v-divider></v-divider> -->

      <v-list>
         <v-list-group
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.icon"
            no-action
          >

           <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>

           <v-list-tile
              v-for="subItem in item.subItems"
              :key="subItem.title"
              :to="subItem.to"
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>{{ subItem.icon }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>

        </v-list-group>
        <!-- <v-list-tile two-line v-for="item in items" :key="item.title" :to="item.to">
          <v-list-tile-avatar>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>{{item.title}}</v-list-tile-title> -->
            <!-- <v-list-tile-sub-title>bbbbb</v-list-tile-sub-title> -->
          <!-- </v-list-tile-content>

          <v-list-tile-action>
            <v-btn icon ripple>
              <v-icon color="grey lighten-1">mdi-alert-box</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile> -->
      </v-list>
    </v-navigation-drawer>

    <v-toolbar color="lime">
      <!--이벤트 핸들링-->
      <v-toolbar-side-icon @click="test"></v-toolbar-side-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer> <!-- 공간을 채워줌 -->
      <v-toolbar-items class="hidden-sm-and-down"> <!-- 특정 영역 내에서 숨김 -->
        <v-btn flat>Link One</v-btn> <!--flat은 버튼 테두리 X-->
        <v-btn flat>Link Two</v-btn>
        <v-btn flat>Link Three</v-btn>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-alert',
          title: 'Home',
          to: '/',
          active: true,
          subItems: [
            {
              title: 'dashboard',
              to: '/'
            },
            {
              title: 'about',
              to: '/about'
            }
          ]
        },
        {
          icon: 'mdi-alert-box',
          title: 'Lectures',
          to: '/about',
          active: false,
          subItems: [
            {
              title: 'card',
              to: '/lectures/card'
            },
            {
              title: 'layout',
              to: '/lectures/layout'
            }
          ]
        }
      ]
    }
  },
  methods: {
    test () {
      this.drawer = !this.drawer
      console.log('here')
    }
  }
}
</script>
