import { ActivityModel } from "@/models/activity.model";
import { database } from "./firebase";
import { getDatabase, ref, query, orderByKey, startAt, limitToFirst, get, DataSnapshot, push, set } from "firebase/database";



export async function createActivity(newActivity : ActivityModel) {
    // Reference to a specific node
    const activitiesRef = ref(database, 'activity');
    const newActivityRef = push(activitiesRef);
    set(newActivityRef, newActivity)
    .then(() => {
      console.log("Data added successfully!");
      return newActivityRef.key;
    })
    .catch((error) => {
      console.error("Error adding data: ", error);
      return '';
    });
}

export async function fetchPaginatedActivities(pageSize: number, startAtKey?: string | null): Promise<ActivityModel[]> {
  try {
    let activitiesRef = ref(database, 'activity'); // Adjust 'activities' to your actual database path

    // Construct the query
    let q = query(activitiesRef, orderByKey());

    // Apply pagination
    if (startAtKey) {
      q = query(q, startAt(startAtKey));
    }
    q = query(q, limitToFirst(pageSize));

    // Fetch data
    const snapshot: DataSnapshot = await get(q);

    // Process snapshot into Activity objects
    const activities: ActivityModel[] = [];
    snapshot.forEach((childSnapshot) => {
      activities.push({
        id: childSnapshot.key as string,
        ...childSnapshot.val()
      });
    });

    return activities;
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw error;
  }
}