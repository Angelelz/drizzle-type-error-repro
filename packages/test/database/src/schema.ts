import { sql } from 'drizzle-orm';
import { boolean, pgTable, text } from 'drizzle-orm/pg-core';

// eslint-disable-next-line import/prefer-default-export
export const table1 = pgTable('Table1', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => sql`gen_random_uuid()::text`)
    .notNull(),
  maintenance: boolean('maintenance').default(false).notNull()
});
