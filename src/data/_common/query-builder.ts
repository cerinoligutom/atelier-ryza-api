import * as _ from 'lodash';
import { orderBy } from 'natural-orderby';

interface IRepositoryItem {
  index: number;
}
type RepositoryItem<T> = T & IRepositoryItem;
type RepositoryItems<T> = Array<RepositoryItem<T>>;
type OrderByDirection = 'asc' | 'desc';
type Pipeline<T> = (data: T[]) => T[];

export class RepositoryQB<T> {
  private _data: RepositoryItems<T> = [];
  private _pipeline: Array<Pipeline<RepositoryItem<T>>> = [];

  constructor(data: T[]) {
    this._data = data.map((item, index) => ({ ...item, index }));
  }

  where(field: keyof RepositoryItem<T>, value: string | number) {
    const pipe = (data: RepositoryItems<T>) => data.filter(x => x[field] === value);
    this._pipeline.push(pipe);
    return this;
  }

  greaterThan(field: keyof RepositoryItem<T>, value: string | number) {
    const pipe = (data: RepositoryItems<T>) => data.filter(x => x[field] > value);
    this._pipeline.push(pipe);
    return this;
  }

  lessThan(field: keyof RepositoryItem<T>, value: string | number) {
    const pipe = (data: RepositoryItems<T>) => data.filter(x => x[field] < value);
    this._pipeline.push(pipe);
    return this;
  }

  orderBy(field: keyof RepositoryItem<T>, direction: OrderByDirection = 'asc') {
    const pipe = (data: RepositoryItems<T>) => orderBy(data, x => x[field], direction);
    this._pipeline.push(pipe);
    return this;
  }

  like(field: keyof RepositoryItem<T>, substring: string) {
    const pipe = (data: RepositoryItems<T>) =>
      data.filter(x => {
        try {
          // Note:
          // Currently this is a dumb search by substring. This can be
          // improved by implementing a fuzzy search algorithm.
          const value = (x[field] as string | number).toString().toLocaleLowerCase();
          return value.includes(substring.toLocaleLowerCase());
        } catch (err) {
          console.error(`Failed to convert to string: ${JSON.stringify(x[field])}`);
          console.error(err);
          return false;
        }
      });

    this._pipeline.push(pipe);
    return this;
  }

  first() {
    const [firstItem] = this.executePipeline();
    return firstItem;
  }

  last() {
    const lastItem = this.executePipeline().pop();
    return lastItem;
  }

  exec() {
    return this.executePipeline();
  }

  private executePipeline() {
    const data = _.cloneDeep(this._data);
    const results = this._pipeline.reduce((pv, fn) => fn(pv), data);
    this.resetPipeline();

    return results;
  }

  private resetPipeline() {
    this._pipeline = [];
  }
}
