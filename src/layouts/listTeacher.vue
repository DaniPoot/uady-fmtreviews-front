<script>
import { defineAsyncComponent } from 'vue'
import { mapActions } from 'vuex'

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
    ...mapActions('professors', ['getAllProfessors']),
    async getTeachers (){
      //TODO: call getTeachers service
      const { data } = await this.getAllProfessors()
      this.teachers = data
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