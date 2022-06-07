import { Injectable } from '@nestjs/common';
import { Command, CommandArguments, _cli } from '@squareboat/nest-console';
// import { Repository } from 'typeorm';
// import * as XLSX from 'xlsx';
@Injectable()
export class ExportUnitAdministrativeService {
  // run command: node cli export
  @Command('export', {
    desc: 'Export data from excel to mysql server',
    args: { name: { req: false } },
  })
  async runCli(args: CommandArguments) {
    console.log('ád');
    _cli.info(`Hello ${args.name || 'world'}!`);
  }
}
