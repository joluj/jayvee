import { Command } from 'commander';

import { JayveeLanguageMetaData } from '../language-server/generated/module';

import { runAction } from './interpreter';

export default function (): void {
  const program = new Command();

  const fileExtensions = JayveeLanguageMetaData.fileExtensions.join(', ');
  program
    .command('run')
    .argument(
      '<file>',
      `source file (possible file extensions: ${fileExtensions})`,
    )
    .description('run the pipeline model in the source file')
    .action(runAction);

  program.parse(process.argv);
}
