import {IncomingMessage, request, ServerResponse} from "http"
import {serviceListEpisodes} from "../services/list-episodes-service";
import { serviceFilterEpisodes } from "../services/filter-episodes-service";
import { ContentType } from "../utils/content-type";
import { FilterPodCastModel } from "../models/filter-podcast-model";



export const getListEpisodes = async (request: IncomingMessage, response: ServerResponse) => {

    const content = await serviceListEpisodes();

    response.writeHead(content.statusCode,{"content-type": ContentType.JSON});
    response.write(JSON.stringify(content.body))
    response.end();
};


export const getFilterEpisodes = async(request: IncomingMessage, response: ServerResponse) => {



    const content: FilterPodCastModel = await serviceFilterEpisodes(request.url);

    response.writeHead(content.statusCode, {"content-type": ContentType.JSON});
    response.write(JSON.stringify(content.body))
    response.end();

}