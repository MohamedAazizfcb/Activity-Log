import { ActivityModel } from "../models/activity.model";

export class ActivityService {
    
    getAllActivities(): ActivityModel[]{
        return[
            {
                id: "1",
                object: "string",
                actor_id: "string",
                actor_name: "actor_name_1",
                group: "string",
                action: {
                    id: "11",
                    object: "string",
                    name: "string"
                },
                target_id: "string",
                target_name: "string",
                location: "string",
                occured_at: "string",
                metadata: {
                    redirect: "string",
                    description: "string",
                    x_request_id: "string",
                }
            },
            {
                id: "2",
                object: "string",
                actor_id: "string",
                actor_name: "actor_name_2",
                group: "string",
                action: {
                    id: "22",
                    object: "string",
                    name: "string"
                },
                target_id: "string",
                target_name: "string",
                location: "string",
                occured_at: "string",
                metadata: {
                    redirect: "string",
                    description: "string",
                    x_request_id: "string",
                }
            },
            {
                id: "3",
                object: "string",
                actor_id: "string",
                actor_name: "actor_name_3",
                group: "string",
                action: {
                    id: "33",
                    object: "string",
                    name: "string"
                },
                target_id: "string",
                target_name: "string",
                location: "string",
                occured_at: "string",
                metadata: {
                    redirect: "string",
                    description: "string",
                    x_request_id: "string",
                }
            },
        ] ;
    }


    filterPosts(value: string) : ActivityModel[]{
        return this.getAllActivities().filter(activity=> activity.actor_name.includes(value))?? [];
    }

    exportCSV(){

    }

  }