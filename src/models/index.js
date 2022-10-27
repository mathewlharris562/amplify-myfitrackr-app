// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { MyfitrakrDBM } = initSchema(schema);

export {
  MyfitrakrDBM
};