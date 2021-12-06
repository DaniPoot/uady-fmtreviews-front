<script>
import VueApexCharts from 'vue3-apexcharts'
import { mapActions } from 'vuex'
import BaseImage from '@/assets/user.png'

export default {

    name: 'TeacherDetail',

    components: { apexchart: VueApexCharts },

    data (){
        return{
            BaseImage,
            emojis: ['angry', 'sad', 'meh', 'happy', 'rad'],
            teacher: {},
            reviews: [],
            series: [],
            chartOptions: {
                chart: { width: 350, type: 'polarArea' },
                labels: [],
                fill: { opacity: 1 },
                stroke: { width: 1, colors: undefined },
                yaxis: { show: false },
                legend: { position: 'bottom' },
                plotOptions: {
                    polarArea: {
                        rings: { strokeWidth: 0 },
                        spokes: { strokeWidth: 0 }
                    }
                },
                theme: {
                    monochrome: {
                        enabled: true,
                        color: '#FFA91B',
                        shadeTo: 'light',
                        shadeIntensity: 0.6
                    }
                }
            }
        }
    },

    created (){
        const id = this.$route.params.id
        this.getTeacher(id)
    },
    computed: {
      id () {
        return this.$route.params.id
      },
      url () {
        return new URL(`../assets/profile/${this.id}.png`, import.meta.url)
      }
    },
    methods: {
        ...mapActions('professors', ['getProfessorById', 'getProfessorReviews']),
        async getTeacher (id){
            let { data } = await this.getProfessorById(id)
            this.teacher = data
            this.setChartValues()
            let { data: reviews } = await this.getProfessorReviews(id)
            this.reviews = reviews
        },

        setChartValues (){
            let labels =['Satisfacción estudiantil']
            let values= [this.teacher.studentSatisfactionScore]

            this.teacher.studentSatisfactionScores.forEach( score =>{
                labels.push(score.studentSatisfactionParameter.name)
                values.push(score.points.toFixed(2))
            })

            this.chartOptions.labels = [...labels]
            this.series = [...values]
        }
    }
}

</script>

<template>
    <section class="flex flex-wrap justify-center mx-1 my-10">
        <div class="flex mx-3 px-5 flex-col items-center justify-center w-1/5 bg-white shadow-xl rounded-lg">
            <img v-if="url" class=" w-30 h-30 rounded-full" :src="url" alt="teacher name">
            <img v-else class=" w-30 h-30 rounded-full" :src="BaseImage" alt="teacher name">
            <h2 class="my-5 text-2xl">{{ teacher.firstNames }} {{ teacher.lastNames }}</h2>
            <!--font-awesome-icon icon="phone" /-->

        </div>
        <div id="chart" class="py-10 mx-3 px-5 w-3/5 bg-white shadow-xl rounded-lg" >
            <apexchart type="polarArea" height="350" :options="chartOptions" :series="series"></apexchart>
        </div>

        <div class="pt-10 pb-3 mx-3 my-2 px-5 w-2/5 bg-white shadow-xl rounded-lg" v-for="review in reviews" :key="review.id">
        <div id="satisfaction-parameters" class="flex">
            <div class="w-20 h-20 bg-green-400 rounded-full flex justify-center items-center">
                <span class="text-4xl font-bold text-white">{{(review.studentSatisfactionGrade*100/5).toFixed(0)}}</span>
            </div>
            <div class="ml-5 text-left text-sm">
                <div class="flex mb-2" v-for="grades in review.studentSatisfactionGrades" :key="grades.id">
                    <img  :src="`/src/assets/${this.emojis[Math.round(grades.points-1)]}.png`" class="w-5 h-5 mr-2" alt=""><p>{{grades.studentSatisfactionParameter.name}}</p>
                </div>
            </div>
        </div>
            <div id="characteristics" class="flex flex-wrap">
                <p class="bg-orange-400 text-white p-2 rounded-full font-bold text-xs m-1" v-for="characteristic in review.professorCharacteristics" :key="characteristic.id">{{characteristic.description }}</p>
            </div>
            <div id="details">
                <p class="m-2 text-left">{{review.description}}</p>
            </div>
        </div>
    </section>
    <button class="p-3 rounded-full w-15 h-15 text-2xl fixed text-white bg-green-400 bottom-10 right-25"><font-awesome-icon icon="plus" /></button>
</template>

<style scoped>
</style>