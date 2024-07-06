import { ActionModel } from "./action.model";
import { Metadata } from "./metadata.model";
import Joi from 'joi';

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
    occurred_at: string;
    metadata: Metadata;
}


// Define a schema for your event object
export const ActivityModelSchemaValidator = Joi.object({
  id: Joi.string().required(),
  object: Joi.string().required(),
  actor_id: Joi.string().required(),
  actor_name: Joi.string().required(),
  group: Joi.string().required(),
  action: Joi.object({
    id: Joi.string().required(),
    object: Joi.string().required(),
    name: Joi.string().required()
  }).required(),
  target_id: Joi.string().required(),
  target_name: Joi.string().required(),
  location: Joi.string().required(),
  occurred_at: Joi.string().isoDate().required(),
  metadata: Joi.object({
    redirect: Joi.string().required(),
    description: Joi.string().required(),
    x_request_id: Joi.string().required()
  }).required()
});