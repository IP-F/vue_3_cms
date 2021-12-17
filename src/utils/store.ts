class Store {
  setItem(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  getItem(key: string) {
    window.localStorage.getItem(key)
  }
  deleteItem(key: string) {
    window.localStorage.removeItem(key)
  }
  clear() {
    window.localStorage.clear()
  }
}
export default new Store()
