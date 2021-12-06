<template>
<div class="w-screen h-full absolute z-10 top-0 left-0 bg-gray-300 bg-opacity-80 flex justify-center items-center">
  <div class="container bg-white w-full sm:w-3/6 2xl:w-1/3 h-3/6 p-7 flex flex-col shadow">
    <div class="flex-1" v-if="step === 0">
      <p class="pb-2 text-xl">Review de {{professor.firstNames}} {{professor.lastNames}}</p>
      <div class="mb-5">
        <p class="font-bold text-left">Experiencia demeostrada en los temas</p>
        <div class="ml-5 text-left text-sm flex justify-around">
          <div class="mb-2" v-for="emoji in emojis" :key="emoji.label">
            <input class="hidden peer" v-model="review.studentSatisfactionGrades[0].points" type="radio" name="radio-1" :id="emoji.label" :value="emoji.value">
            <label :for="emoji.label" class="transform peer-checked:scale-125">
              <img  :src="`/src/assets/${emoji.label}.png`" class="w-5 h-5 mr-2" :alt="emoji.label">
            </label>
          </div>
        </div>
      </div>
      <div class="mb-5 text-left">
        <p class="font-bold">Claridad en las explicaciones de las clases</p>
        <div class="ml-5 text-left text-sm flex justify-around">
          <div class="mb-2" v-for="emoji in emojis" :key="emoji.label">
            <input class="hidden" v-model="review.studentSatisfactionGrades[1].points" type="radio" name="radio-2" :id="emoji.label + 2" :value="emoji.value">
            <label :for="emoji.label + 2">
              <img  :src="`/src/assets/${emoji.label}.png`" class="w-5 h-5 mr-2" :alt="emoji.label">
            </label>
          </div>
        </div>
      </div>
      <div class="mb-5 text-left">
        <p class="font-bold">Voluntad de ayudar</p>
        <div class="ml-5 text-left text-sm flex justify-around">
          <div class="mb-2" v-for="emoji in emojis" :key="emoji.label + 3">
            <input class="hidden" v-model="review.studentSatisfactionGrades[2].points" type="radio" name="radio-3" :id="emoji.label + 3" :value="emoji.value">
            <label :for="emoji.label + 3">
              <img  :src="`/src/assets/${emoji.label}.png`" class="w-5 h-5 mr-2" :alt="emoji.label">
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1" v-if="step === 1">
      <div>
        <div class="flex">
          <button class="outline-none transform hover:scale-125 transition" @click="step--">
            <font-awesome-icon icon="arrow-left" />
          </button>
          <p class="mx-auto pb-2 text-xl">Review de {{professor.firstNames}} {{professor.lastNames}}</p>
        </div>
        <div>
          <p class="font-bold">Selecciona hasta 3 caracter&iacute;sticas del profesor</p>
          <div class="flex flex-wrap sm:gap-2 xl:gap-5 justify-center mt-3 sm:mt-5 mt-10">
            <div v-for="characteristic of professorCharacteristics" :key="characteristic.id">
              <button :class="characteristicIsOnList(characteristic.id) ? ['bg-blue-400', 'border-blue-200', 'ring-1']: ''" class="text-xs p-2 rounded-full bg-blue-200 mb-1 transform hover:scale-125 transition focus:outline-none" @click="addCharacteristic(characteristic)">{{ characteristic.description }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex-1" v-if="step === 2">
      <div class="flex">
        <button class="outline-none transform hover:scale-125 transition" @click="step--">
            <font-awesome-icon icon="arrow-left" />
        </button>
        <p class="mx-auto pb-2 text-xl">Review de {{professor.firstNames}} {{professor.lastNames}}</p>
      </div>
      <div class="mt-3 sm:mt-5 mt-10">
        <p class="font-bold">Comentarios adicionales</p>
        <textarea v-model="review.description" placeholder="Agreagar tu reseña o comentarios adicionales aqui" cols="20" class="resize-none border rounded-md w-9/12 h-50 mt-2"></textarea>
      </div>
    </div>
    <div class="mt-auto">
      <button @click="$emit('cancell')" class="text-green-300 underline py-2 px-4 mr-4">Cancelar</button>
      <button @click="nextStep()" class="bg-green-300 py-2 px-4 rounded-md">{{ buttonLabel }}</button>
    </div>
  </div>

</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'ProfesorReview',
  props: {
    professor: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      emojis: [
        {
          label: 'angry',
          value: 1
        },{
          label: 'sad',
          value: 2
        },{
          label: 'meh',
          value: 3
        },{
          label: 'happy',
          value: 4
        },{
          label: 'rad',
          value: 5
        }
      ],
      review: {
        description: undefined,
        studentSatisfactionGrades: [
          {
            points: undefined,
            studentSatisfactionParameter: {
              id: 1,
              name: 'Experiencia demostrada en los temas'
            }
          },
          {
            points: undefined,
            studentSatisfactionParameter: {
              id: 2,
              name: 'Claridad en las explicaciones de clase'
            }
          },
          {
            points: undefined,
            studentSatisfactionParameter: {
              id: 3,
              name: 'Voluntad de ayudar'
            }
          }
        ],
        professorCharacteristics: []
      },
      step: 0
    }
  },
  async mounted () {
    await this.getCharacteristics()
  },
  computed: {
    ...mapState('professors', ['professorCharacteristics']),
    buttonLabel () {
      return this.step == 2 ? 'Guardar' : 'Siguiente'
    },
    studentSatisfactionGrade () {
      const values = this.review.studentSatisfactionGrades.map(e => e.points)
      return values.reduce((previousValue, currentValue) => previousValue + currentValue) / 3
    }
  },
  methods: {
    ...mapActions('professors', ['getProfessorsCharacteristics']),
    nextStep () {
      this.step = this.step + 1
      if(this.step == 3) {
        this.review.studentSatisfactionGrade = this.studentSatisfactionGrade
        this.$emit('cancell', this.review)
      }
    },
    async getCharacteristics () {
      await this.getProfessorsCharacteristics()
    },
    addCharacteristic (characteristic) {
      let isOnList = false
      this.review.professorCharacteristics = this.review.professorCharacteristics.filter(c => {
        isOnList = c.id === characteristic.id
        return c.id !== characteristic.id
      })
      if (isOnList) return
      this.review.professorCharacteristics.push(characteristic)
    },
    characteristicIsOnList (id) {
      return this.review.professorCharacteristics.find(c => c.id === id) || false
    }
  }
}
</script>

<style scoped>
input[type="radio"]:checked ~ label > img {
  opacity: .5;
}

</style>