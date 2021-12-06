<script>
import VueApexCharts from 'vue3-apexcharts'

export default {

    name: 'SubjectDetail',

    props: { subject: {
            type: Object,
            default: () =>{}
        }
    },

    components: { apexchart: VueApexCharts },

    data (){
        return{
            emojis: ['angry', 'sad', 'meh', 'happy', 'rad'],
            resources: [],
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
        this.getResources(id)
    },

    methods: {
        getResources (id){
            //TODO: call getTeacher service
            //TODO: call getAllReviews by teacher
            this.teacher = { id, firstNames: 'Juan', lastNames: 'García', studentSatisfactionScore: 3.88, img: 'src/assets/user.png',
                studentSatisfactionScores: [
                    { id: 22, points: 3.0, studentSatisfactionParameter: { id: 1, name: 'Experiencia demostrada en los temas' } },
                    { id: 23, points: 3.666, studentSatisfactionParameter: { id: 2, name: 'Claridad en las explicaciones de clase' } },
                    { id: 24, points: 5.0, studentSatisfactionParameter: { id: 3, name: 'Voluntad de ayudar' } }
                ]
            }
            this.setChartValues()
            this.reviews = [
                { id: 1, description: 'Ut tempus sem et eros interdum, eu lobortis arcu fringilla. Nullam facilisis odio at risus aliquam, nec ultricies nisi consequat. Sed placerat, metus in imperdiet vehicula, sem turpis dictum massa, consectetur lobortis nunc leo mollis risus. Sed aliquam pellentesque magna in volutpat.',
                    studentSatisfactionGrade: 4.0,
                    studentSatisfactionGrades: [
                        { id: 13, points: 3.0, studentSatisfactionParameter: { id: 1, name: 'Experiencia demostrada en los temas' } },
                        { id: 14, points: 4.0, studentSatisfactionParameter: { id: 2, name: 'Claridad en las explicaciones de clase' } },
                        { id: 15, points: 5.0, studentSatisfactionParameter: { id: 3, name: 'Voluntad de ayudar' } }
                    ],
                    professorCharacteristics: [
                    { id: 1, description: 'Muestra interés por la materia' },
                    { id: 2, description: 'Requiere inglés para algunas tareas' },
                    { id: 5, description: 'Proporciona recursos útiles para el curso' }
                    ]
                },
                    { id: 2, description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur gravida vitae ipsum sit amet ornare. Nunc sit amet massa quam. Donec iaculis convallis vehicula. Donec ac consectetur sapien. Integer volutpat ex ex, ac rhoncus massa sodales viverra. Integer placerat dictum velit luctus pellentesque. Curabitur suscipit mollis arcu sit amet ultricies. Vestibulum scelerisque ornare eros, id tempor sapien cursus in. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    studentSatisfactionGrade: 3.333,
                    studentSatisfactionGrades: [
                        { id: 19, points: 2.0, studentSatisfactionParameter: { id: 1, name: 'Experiencia demostrada en los temas' } },
                        { id: 20, points: 3.0, studentSatisfactionParameter: { id: 2, name: 'Claridad en las explicaciones de clase' } },
                        { id: 21, points: 5.0, studentSatisfactionParameter: { id: 3, name: 'Voluntad de ayudar' } }
                    ],
                    professorCharacteristics: [
                    { id: 2, description: 'Requiere inglés para algunas tareas' },
                    { id: 3, description: 'Calcula de forma transparente las calificaciones' },
                    { id: 4, description: 'No se salta las clases' }
                    ]
                }
            ]
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
        <h1>Subject</h1>
        <div class="flex mx-3 px-5 flex-col items-center justify-center w-1/5 bg-white shadow-xl rounded-lg">
            <img class=" w-30 h-30 rounded-full" :src="teacher.img" alt="teacher name">
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