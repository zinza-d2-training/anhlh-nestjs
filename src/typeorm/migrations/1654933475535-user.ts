import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class users1654846311193 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'fullname',
            type: 'varchar',
            length: '45',
          },
          {
            name: 'email',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'password',
            type: 'varchar',
            length: '45',
          },
          {
            name: 'ward',
            type: 'varchar',
            length: '45',
          },
          {
            name: 'district',
            type: 'varchar',
            length: '45',
          },
          {
            name: 'province',
            type: 'varchar',
            length: '45',
          },
          {
            name: 'identity_card_number',
            type: 'integer',
            length: '45',
          },
          {
            name: 'gender',
            type: 'varchar',
            length: '10',
          },
          {
            name: 'role',
            type: 'varchar',
            length: '45',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            isNullable: true,
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            isNullable: true,
            default: 'now()',
          },
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
