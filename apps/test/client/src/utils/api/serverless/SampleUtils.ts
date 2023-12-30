import db, { eq, table1 } from '@test/database';
export default class SampleUtils {
  static isMaintenance = async (): Promise<boolean> => {
    const table1RowWrong = await db.query.table1.findFirst();
    const table1RowCorrect = await db.query.table1.findFirst({ where: eq(table1.id, 'asdf') });

    return true;
  };
}
