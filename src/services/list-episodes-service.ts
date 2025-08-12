import { FilterPodCastModel } from "../models/filter-podcast-model";
import { repoPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/http-status-code";

export const serviceListEpisodes = async (): Promise<FilterPodCastModel> => {

        let responseFormat: FilterPodCastModel = {
            statusCode: 0,
            body: [],
        }


    const data = await repoPodcast();

        responseFormat = {
            statusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
            body: data,
        }

     
    
    return responseFormat;
}
