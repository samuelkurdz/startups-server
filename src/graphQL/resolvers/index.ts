type DatabaseModel = {
  id: number;
  name: string;
  overview?: string;
  lastRound?: string;
  lastAmountRaised?: number;
  totalAmountRaised?: number;
  founded?: string;
  founders?: string[];
  industry?: string;
};

interface CompanyDetails {
  name: string;
  overview?: string;
  lastRound?: string;
  lastAmountRaised?: number;
  totalAmountRaised?: number;
  founded?: string;
  founders?: string[];
  industry?: string;
}

const fakeDataBase: DatabaseModel[] = [
  {
    id: 0,
    name: 'Jumia',
    overview: 'Jumia Group is an e-commerce ecosystem that provides innovative, convenient, and affordable online goods and services to consumers.',
    totalAmountRaised: 805345200,
    lastRound: 'Corporate',
    founded: '2012',
    industry: 'E-Commerce',
  },
  {
    id: 1,
    name: 'Andela',
    overview: 'Andela is an engineering-as-a-service business that helps companies build remote teams quickly and cost-effectively.',
    lastRound: 'Series E',
    totalAmountRaised: 381000000,
    founded: '2014',
    industry: 'engineering-as-a-service'
  },
  {
    id: 2,
    name: 'Flutterwave',
    overview: ''
  }
];

interface UpdateStartupProps {
  id: number,
  data: CompanyDetails
}

const resolvers = {
  startups: (): DatabaseModel[] => {
    return fakeDataBase;
  },
  startup: ({id}: DatabaseModel): DatabaseModel => {
    const startUp = fakeDataBase.find(startup => startup.id === id);
    if (!startUp) throw new Error('no startup exists with id ' + id);
    return startUp;
  },

  createStartup: ({name}: DatabaseModel): DatabaseModel => {
    const startup: DatabaseModel = {
      id: fakeDataBase.length + 1,
      name,
    };
    fakeDataBase.push(startup);
    return startup;
  },
  updateStartup: ({id, data}: UpdateStartupProps): DatabaseModel => {
    const startUpIndex = fakeDataBase.findIndex(startup => startup.id === id);
    if (startUpIndex === -1) throw new Error('no startup exists with id ' + id);
    fakeDataBase[id] = {...fakeDataBase[id],...data};
    return fakeDataBase[id];
  }
};

export default resolvers;