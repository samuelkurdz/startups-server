export interface StartUp {
  id?: number;
  name: string;
  email: string;
  overview: string;
  lastRound: string;
  lastAmountRaised: number;
  totalAmountRaised: number;
  founded: string;
  founders: string[];
  industry: string;
  updatedOn: Date,
  createdOn: Date,
}

export interface NewStartUpInterface {
  addStartUp: (startupData: StartUp) => StartUp;
}

export interface EditStartUpInterface {
  editStartUp: (startupId: string, startup: StartUp) => StartUp;
}

export interface DeleteStartUpInterface {
  deleteStartUp: (startupId: string) => any;
}