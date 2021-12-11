import { startupEntity } from "../entities";
import { NewStartUpInterface, StartUp } from "@interfaces/startup.interface";

class AddStartUp implements NewStartUpInterface {
  constructor() { }

  addStartUp(startupData: StartUp) {
    const newStartUp =  startupEntity.createStartup(startupData);

    if (!newStartUp.email || !newStartUp.name) {
      console.log('error for startup name or mail');
    }

    // check if startup name or email already exists

    //  create startup by DB service

    return {
      ...newStartUp
    };
  }
}