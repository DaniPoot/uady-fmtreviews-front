<script>
import { defineAsyncComponent } from 'vue'

export default {
  components: {
    TeacherCard: defineAsyncComponent(() => import('@/components/TeacherCard.vue'))
  },
  name: 'ListTeacher',

  data (){
    return {
      teachers: {}
    }
  },

  created (){
    this.getTeachers()
  },

  methods: {
    getTeachers (){
      //TODO: call getTeachers service
      this.teachers = [
        { id: 1, firstNames: 'Juan', lastNames: 'García', studentSatisfactionScore: 3.8, img: 'src/assets/user.png' },
        { id: 2, firstNames: 'María', lastNames: 'Ayala', studentSatisfactionScore: 2.6, img: 'src/assets/user.png' }
      ]
    }
  }

}
</script>

<template>
  <section class="flex flex-wrap justify-center">
    <TeacherCard v-for="teacher in teachers" :key="teacher.id" :teacher="teacher" class="mx-2 my-4"/>
  </section>
</template>

<style></style>