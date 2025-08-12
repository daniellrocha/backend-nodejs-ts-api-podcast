import * as http from "http";
import{getFilterEpisodes, getListEpisodes} from "./controllers/podcasts_controller"
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";


export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    const baseUrl = request.url?.split("?")[0];

    if (request.method === HttpMethod.GET && baseUrl === Routes.LISTA) {
        await getListEpisodes(request, response);
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODES){
        await getFilterEpisodes(request, response);
    }
};