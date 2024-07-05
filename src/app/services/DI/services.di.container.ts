import { ActivityService } from './activity.service';

class Container {
  private services: { [key: string]: any } = {};

  constructor() {
    this.services = {
        activityService: new ActivityService(),
    };
  }

  get<T>(serviceName: string): T {
    return this.services[serviceName];
  }
}

const container = new Container();
export default container;