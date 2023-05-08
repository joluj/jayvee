// SPDX-FileCopyrightText: 2023 Friedrich-Alexander-Universitat Erlangen-Nurnberg
//
// SPDX-License-Identifier: AGPL-3.0-only

// eslint-disable-next-line import/no-cycle
import { AbstractValuetype, ValuetypeVisitor } from '../valuetype';

export type PrimitiveType = string | number | boolean;

export abstract class PrimitiveValuetype extends AbstractValuetype {
  constructor() {
    super(undefined);
  }

  acceptVisitor<R>(visitor: ValuetypeVisitor<R>): R {
    return visitor.visitText(this);
  }
}