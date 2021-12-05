import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations('general', ['setErrorMsg', 'setSuccessMsg', 'setIsLoading']),
    showSuccessMsg (message) {
      this.setSuccessMsg(message)
    },
    showErrorMsg (message) {
      this.setErrorMsg(message)
    },
    showIsLoading (state) {
      this.setIsLoading(state)
    }
  }
}