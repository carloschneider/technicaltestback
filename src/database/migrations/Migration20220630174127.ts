import { Migration } from '@mikro-orm/migrations';

export class Migration20220630174127 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table `user` (`id` integer not null primary key autoincrement, `created_at` datetime not null, `updated_at` datetime not null, `login` text not null, `password` text not null, `email` text not null);');
    this.addSql('create unique index `user_login_unique` on `user` (`login`);');
    this.addSql('create unique index `user_email_unique` on `user` (`email`);');
  }

}
