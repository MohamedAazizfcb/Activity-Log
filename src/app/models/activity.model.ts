import { ActionModel } from "./action.model";
import { Metadata } from "./metadata.model";

export class ActivityModel{
    id: string;
    object: string;
    actor_id: string;
    actor_name: string;
    group: string;
    action: ActionModel;
    target_id: string;
    target_name: string;
    location: string;
    occured_at: string;
    metadata: Metadata;
}