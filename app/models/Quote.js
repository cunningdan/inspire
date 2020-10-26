export default class Quote {
    constructor(data) {
        this.body = data.body
        this.id = data.id
        this.author = data.author
        this.url = data.url
    }
    get template() {
        return /*html*/ ` 
        <div>${this.body}</div>
        `
    }
}