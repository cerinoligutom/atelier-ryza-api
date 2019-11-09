import { qbFieldMixMap } from '@app/data';
import { OrderByDirection } from '@app/core/enums';
import * as _ from 'lodash';
import { orderBy } from 'natural-orderby';

function findByName(name: string) {
  const DEFAULT_ORDER_BY_DIRECTION = OrderByDirection.DESC;

  const primaryItemResults = qbFieldMixMap
    .like('primaryItemName', name)
    .orderBy('level', DEFAULT_ORDER_BY_DIRECTION)
    .exec();

  const secondaryItemResults = qbFieldMixMap
    .like('secondaryItemName', name)
    .orderBy('level', DEFAULT_ORDER_BY_DIRECTION)
    .exec();

  let results = [...primaryItemResults, ...secondaryItemResults];
  results = _.uniqBy(results, 'password');
  results = orderBy(results, v => v.level, DEFAULT_ORDER_BY_DIRECTION);

  return results;
}

export const itemDropsService = { findByName };
