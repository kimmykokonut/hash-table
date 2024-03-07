export default class HashTable {
  constructor() {
    this.array = [];
  }
  hash(key) {
    return key.charAt(0).toLowerCase().charCodeAt(0) - 97;
  }
  
}