<script>
import BaseImage from '@/assets/user.png'

export default {
    name: 'TeacherCard',
    props: {
        teacher: {
            type: Object,
            default: () =>{}
        }
    },
    data () {
      return {
        img: undefined,
        BaseImage
      }
    },
    computed: {
      id () {
        return this.teacher.id
      },
      url () {
        return new URL(`../assets/profile/${this.id}.png`, import.meta.url)
      }
    },
    methods: {
        goToDetails (){
            this.$router.push({ name: 'teacherDetail', params: { id: this.teacher.id } })
        }
    }
}
</script>

<template>
    <div @click="goToDetails" class="flex py-10 px-5 flex-col items-center w-70 bg-white filter shadow-xl rounded-lg hover:cursor-pointer">
        <img v-if="url" class=" w-30 h-30 rounded-full" :src="url" alt="teacher name">
        <img v-else class=" w-30 h-30 rounded-full" :src="BaseImage" alt="teacher name">
        <h2 class="my-5 text-xl">{{ teacher.firstNames }} {{ teacher.lastNames }}</h2>
        <p>{{ teacher.studentSatisfactionScore.toFixed(2) }}</p>
    </div>
</template>

<style scoped>
</style>