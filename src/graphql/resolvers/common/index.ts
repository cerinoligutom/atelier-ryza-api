import { NodeInterface } from './node.interface';
import { nodeResolver } from './node.query';
import { FileUpload as GraphQLFileUpload } from 'graphql-upload';

// Only used as a mapper for GraphQL Code Generator (codegen.yml)
export type FileUpload = Promise<GraphQLFileUpload>;

export default {
  Node: NodeInterface,
  Query: {
    node: nodeResolver,
  },
};
