import { ProxyState } from "../AppState.js";
import quoteService from "../Services/QuoteService.js"

function _drawQuote() {
    if (ProxyState.quotes) {
        document.getElementById('quotes').innerHTML = ProxyState.quotes.template
    } else {
        document.getElementById('quotes').innerHTML = ''
    }
}
export default class QuoteController {
    constructor() {
        ProxyState.on('quotes', _drawQuote)
        this.getQuote()
    }
    getQuote() {
        try {
            quoteService.getQuotes()
        } catch (error) {
            console.error(error)
        }
    }
}