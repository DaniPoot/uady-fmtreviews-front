<script>
export default {
    name: 'SubjectCard',

    props: {
        subject: {
            type: Object,
            default: () =>{}
        }
    },

    methods: {
        goToDetails (){
            this.$router.push({ name: 'subjectDetail', params: { id: this.subject.id,  props: { subject: this.subject } } })
        }
    }
}
</script>

<template>
    <div @click="goToDetails" class="cursor:pointer flex py-10 px-5 flex-col items-center w-70 bg-white filter shadow-xl rounded-lg">
        <img class="h-30 rounded-full" :src="`src/assets/icon-${subject.type}.png`" alt="subject name">
        <h2 class="my-5 text-xl">{{ subject.name }}</h2>
    </div>
</template>

<style scoped>
</style>