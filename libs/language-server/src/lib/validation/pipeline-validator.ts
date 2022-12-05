import { ValidationAcceptor, ValidationChecks } from 'langium';

import { JayveeAstType, Pipeline } from '../ast/generated/ast';
import { collectStartingBlocks } from '../ast/model-util';

import { JayveeValidator } from './jayvee-validator';

export class PipelineValidator implements JayveeValidator {
  get checks(): ValidationChecks<JayveeAstType> {
    return {
      Pipeline: this.checkStartingBlocks,
    };
  }

  checkStartingBlocks(
    this: void,
    pipeline: Pipeline,
    accept: ValidationAcceptor,
  ): void {
    const startingBlocks = collectStartingBlocks(pipeline);
    if (startingBlocks.length === 0) {
      accept('error', `An extractor block is required for this pipeline`, {
        node: pipeline,
        property: 'name',
      });
    } else if (startingBlocks.length !== 1) {
      for (const startingBlock of startingBlocks) {
        accept(
          'error',
          `Currently, at most a single extractor block is supported for a pipeline`,
          {
            node: startingBlock,
            property: 'name',
          },
        );
      }
    }
  }
}