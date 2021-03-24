export type Subject = {
  source: string;
  id: string;
  payload: {
    [key: string]: string | number | boolean | [];
  }
};
