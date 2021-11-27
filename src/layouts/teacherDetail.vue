<script>
import VueApexCharts from 'vue3-apexcharts'

export default {

    name: 'TeacherDetail',

    components: { apexchart: VueApexCharts },

    data (){
        return{
            teacher: {},
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

    methods: {
        getTeacher (id){
            //TODO: call getTeacher service
            this.teacher = { id, firstNames: 'Juan', lastNames: 'García', studentSatisfactionScore: 3.88, img: 'src/assets/user.png',
                studentSatisfactionScores: [
                    { id: 22, points: 3.0, studentSatisfactionParameter: { id: 1, name: 'Experiencia demostrada en los temas' } },
                    { id: 23, points: 3.666, studentSatisfactionParameter: { id: 2, name: 'Claridad en las explicaciones de clase' } },
                    { id: 24, points: 5.0, studentSatisfactionParameter: { id: 3, name: 'Voluntad de ayudar' } }
                ]
            }
            this.setChartValues()
        },

        setChartValues (){
            let labels =['Satisfacción estudiantil']
            let values= [this.teacher.studentSatisfactionScore]

            this.teacher.studentSatisfactionScores.forEach( score =>{
                labels.push(score.studentSatisfactionParameter.name)
                values.push(score.points)
            })

            this.chartOptions.labels = [...labels]
            this.series = [...values]
        }
    }
}

</script>

<template>
    <section class="flex flex-wrap justify-center mx-1 my-10">
        <div class="flex mx-3 py-10 px-5 flex-col items-center justify-center w-1/5 bg-white shadow-xl rounded-lg">
            <img class=" w-30 h-30 rounded-full" :src="teacher.img" alt="teacher name">
            <h2 class="my-5 text-2xl">{{ teacher.firstNames }} {{ teacher.lastNames }}</h2>
        </div>
        <div id="chart" class="py-10 mx-3 px-5 w-3/5 bg-white shadow-xl rounded-lg" >
            <apexchart type="polarArea" height="350" :options="chartOptions" :series="series"></apexchart>
        </div>
    </section>
</template>

<style scoped>
</style>