// SPDX-FileCopyrightText: 2023 Friedrich-Alexander-Universitat Erlangen-Nurnberg
//
// SPDX-License-Identifier: AGPL-3.0-only

import * as R from '@jvalue/execution';
import {
  BlockExecutor,
  BlockExecutorClass,
  ExecutionContext,
  TextFile,
  implementsStatic,
} from '@jvalue/execution';
import { IOType } from '@jvalue/language-server';

@implementsStatic<BlockExecutorClass>()
export class TextRangeSelectorExecutor
  implements BlockExecutor<IOType.TEXT_FILE, IOType.TEXT_FILE>
{
  public static readonly type = 'TextRangeSelector';
  public readonly inputType = IOType.TEXT_FILE;
  public readonly outputType = IOType.TEXT_FILE;

  // eslint-disable-next-line @typescript-eslint/require-await
  async execute(
    file: TextFile,
    context: ExecutionContext,
  ): Promise<R.Result<TextFile>> {
    const lineFrom = context.getNumericPropertyValue('lineFrom');
    const lineTo = context.getNumericPropertyValue('lineTo');

    const numberOfLines = file.content.length;

    context.logger.logDebug(
      `Selecting lines from ${lineFrom} to ${
        lineTo === Number.POSITIVE_INFINITY || lineTo >= numberOfLines
          ? 'the end'
          : `${lineTo}`
      }`,
    );
    const selectedLines = file.content.slice(lineFrom - 1, lineTo);

    return R.ok(
      new TextFile(file.name, file.extension, file.mimeType, selectedLines),
    );
  }
}