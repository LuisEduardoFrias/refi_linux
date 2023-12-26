import type { NextApiRequest, NextApiResponse } from 'next'
import daj, { Credentials }from "dajts";

type Data = {
  data: string
}

class settings extends DajB {
 volum: number;
 constructor() {
  super();
  this.volum = 0;
 }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.body)
  const st =  new settings();
  /*
  const {error, data} = daj.getSync(st);
  console.log(error)
  console.log(data)
  
  if(!error)
   //st.mapper(data):
   
  st.volum = req.body.volum;
  daj.postSync(st);*/
  res.status(200).json({ data: 'Success' })
}
