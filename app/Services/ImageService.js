import { api } from "../Services/AxiosService.js";
import { ProxyState } from "../AppState.js"
import Image from "../models/Image.js"


//TODO create methods to retrieve data and save to the State

class ImageService {
    constructor() {
    }
    async getImage() {
        let res = await api.get('images');
        ProxyState.image = new Image(res.data)
        console.log(ProxyState.image);
    }
}

const imageService = new ImageService();
export default imageService;