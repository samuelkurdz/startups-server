import { StartUp } from "@interfaces/startup.interface";

export class StartUpEntity {
  createStartup(
    {
      // name,
      // overview,
      // email,
      // lastRound,
      // lastAmountRaised,
      // totalAmountRaised,
      // founded,
      // founders,
      // industry,
      // updatedOn,
      createdOn = new Date(),
      ...remainingStartupData
    }: StartUp
  ) {

    return Object.freeze({
      ...remainingStartupData,
      createdOn
    });
  }
}