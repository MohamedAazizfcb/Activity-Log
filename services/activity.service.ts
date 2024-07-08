"use client"
import React, { useState } from 'react';

import { ActivityModel } from "../models/activity.model";

export class ActivityService {
    activityList: ActivityModel[] = [];

    getAllActivities(): ActivityModel[]{
        this.activityList = [
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
                occured_at: "22/3/2024",
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
                occured_at: "2/6/2025",
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
                occured_at: "30/12/2026",
                metadata: {
                    redirect: "string",
                    description: "string",
                    x_request_id: "string",
                }
            },
        ];
        return this.activityList;
    }


    filterPosts(value: string) : ActivityModel[]{
        this.activityList = this.getAllActivities().filter(activity=> activity.actor_name.includes(value))?? [];
        return this.activityList;
    }

    exportCSV(){

    }

}