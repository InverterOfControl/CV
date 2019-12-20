<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <v-card>
        <v-img
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
        </v-img> 
        <v-card-title class="headline">
          Sascha Laabs
        </v-card-title>
        <v-card-text>
          <p>
            <v-chip color="primary" label>
              Passionate developer
              <v-icon class="mx-2" >mdi-cellphone-link</v-icon>
            </v-chip>
          </p>
          <p><v-chip color="primary" label>
            Curious learner
            <v-icon class="mx-2">mdi-book</v-icon>
            </v-chip></p>
          <p><v-chip color="primary" label>
            Tech geek
            <v-icon class="mx-2" right>mdi-glasses</v-icon>
            </v-chip></p>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            class="mx-2"
            color="warning"
            fab
            href="https://www.xing.com/profile/Sascha_Laabs2"
            target="_blank"
          >
          <v-icon>mdi-xing</v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            color="primary"
            fab
            href="https://www.linkedin.com/in/sascha-laabs"
            target="_blank"
          >
            <v-icon>
              mdi-linkedin
            </v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            fab
            href="https://github.com/InverterOfControl"
            target="_blank"
          >
            <v-icon>
              mdi-github-circle
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
