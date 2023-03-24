// SPDX-FileCopyrightText: 2023 Friedrich-Alexander-Universitat Erlangen-Nurnberg
//
// SPDX-License-Identifier: AGPL-3.0-only

import { PropertyValuetype } from '../ast/model-util';
import { ConstraintMetaInformation } from '../meta-information/constraint-meta-inf';

export class LengthConstraintMetaInformation extends ConstraintMetaInformation {
  constructor() {
    super(
      'LengthConstraint',
      {
        minLength: {
          type: PropertyValuetype.INTEGER,
          defaultValue: 0,
        },
        maxLength: {
          type: PropertyValuetype.INTEGER,
          defaultValue: Number.POSITIVE_INFINITY,
        },
      },
      ['text'],
    );
  }
}