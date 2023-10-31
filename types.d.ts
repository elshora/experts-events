type EVENT = {
  _id: string;
  internalId: string;
  title: string;
  description: string;
  link: string;
  organizer: string;
  location: string;
  date: number;
  externalLinks: string[];
  sessions: Types.ObjectId[];
  tags: string[];
};

type SESSION = {
  internalId: string;
  title: string;
  description: string;
  event: Types.ObjectId;
  experts: Types.ObjectId[];
};

type EXPERT = {
  _id: string;
  internalId: string;
  firstName: string;
  lastName: string;
  title: string;
  organization: string;
  bio: string;
  imgLink: string;
  sessions: Types.ObjectId[];
  events: Types.ObjectId[];
  gender: "male" | "female";
  nationality: string;
  age: number;
  email: string;
  externalLinks: string[];
  tags: string[];
};
