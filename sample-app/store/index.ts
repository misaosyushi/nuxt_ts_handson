export const state = () => ({
  storeMessage: ''
})

export const mutations = {
  changeValue (state: any, newValue: any) {
    state.storeMessage = this.$combinedInjectedFunction(newValue)
  }
}
