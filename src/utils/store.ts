class Store {
  setItem(key: string, value: any) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }
  getItem(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      JSON.parse(value)
    }
    return value ? JSON.parse(value) : value
  }
  deleteItem(key: string) {
    window.localStorage.removeItem(key)
  }
  clear() {
    window.localStorage.clear()
  }
}
export default new Store()
