import { Migration } from '@mikro-orm/migrations';

export class Migration20240430201808 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `thing` (`id` integer not null primary key autoincrement);');
  }

}
