<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    SubjectCard: defineAsyncComponent(() => import('@/components/SubjectCard.vue'))
  },
  name: 'ListSubject',

  data (){
    return {
      subjects: {}
    }
  },

  created (){
    this.getSubjects()
  },

  methods: {
    getSubjects (){
      //TODO: call getSubjects service
      this.subjects = [
        { id: 1, name: 'Inferencia Estadística', type: 'math' },
        { id: 2, name: 'Programación Orientada a Objetos', type: 'prog' }
      ]
    }
  }

}
</script>

<template>
  <section class="flex flex-wrap justify-center">
    <SubjectCard v-for="subject in subjects" :key="subject.id" :subject="subject" class="mx-2 my-4"/>
  </section>
</template>

<style></style>