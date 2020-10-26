import { ProxyState } from "../AppState.js"
import { api } from "../Services/AxiosService.js";
import Quote from "../models/Quote.js"


class QuoteService {
    constructor() {
    }
    async getQuotes() {
        let res = await api.get('quotes');
        ProxyState.quotes = new Quote(res.data.quote);
    }
}

const quoteService = new QuoteService();
export default quoteService;