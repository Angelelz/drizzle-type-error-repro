import { neon, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import ws from 'ws';

import * as schema from './schema';

neonConfig.fetchConnectionCache = true;
neonConfig.webSocketConstructor = ws;

const drizzleClient = () => drizzle(neon(process.env.DATABASE_URL!), { schema });

declare global {
  // eslint-disable-next-line vars-on-top, no-var
  var localDrizzle: ReturnType<typeof drizzleClient>;
}

const getDrizzleClient = (): ReturnType<typeof drizzleClient> => {
  if (process.env.NODE_ENV === 'production') {
    return drizzleClient();
  }

  if (!global.localDrizzle) {
    global.localDrizzle = drizzleClient();
  }
  return global.localDrizzle;
};

const db = getDrizzleClient();
export default db;

export * from './schema';
export * from 'drizzle-orm';
