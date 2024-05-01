import { MikroORM } from "@mikro-orm/sqlite";
import config from "./mikro-orm.config.ts";
import { Thing } from "./entities/thing.entity.ts";

export default async function run() {
  const orm = await new MikroORM(config);
  const em = orm.em;
  const things = em.getRepository(Thing);

  await things.insert({ id: 1 });
  let c = await things.count();
  console.log(c);

  orm.close();
}
