// SPDX-FileCopyrightText: 2023 Friedrich-Alexander-Universitat Erlangen-Nurnberg
//
// SPDX-License-Identifier: AGPL-3.0-only

import { PrimitiveValuetypeKeyword } from '../ast/generated/ast';

// eslint-disable-next-line import/no-cycle
import { MetaInformation, PropertySpecification } from './meta-inf';

export abstract class ConstraintMetaInformation extends MetaInformation {
  protected constructor(
    constraintType: string,
    properties: Record<string, PropertySpecification>,
    public readonly compatiblePrimitiveValuetypes: PrimitiveValuetypeKeyword[],
  ) {
    super(constraintType, properties);
  }
}