export interface Birthday {
  name: string;
  age: string;
  occupation: string;
  link: string;
}

export default function (date?: Date): Promise<Birthday[]>;
