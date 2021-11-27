<script>
export default {
    name: 'TeacherCard',

    props: {
        teacher: {
            type: Object,
            default: () =>{}
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
        <img class=" w-30 h-30 rounded-full" :src="teacher.img" alt="teacher name">
        <h2 class="my-5 text-xl">{{ teacher.firstNames }} {{ teacher.lastNames }}</h2>
        <p>{{ teacher.studentSatisfactionScore }}</p>
    </div>
</template>

<style scoped>
</style>