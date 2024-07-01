import pg from 'pg';

export const query = async (query: string, values: any[] = []): Promise<pg.QueryResult<any>> => {
  const {Client} = pg;
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  const res = await client.query(query, values);
  await client.end();
  return res;
}