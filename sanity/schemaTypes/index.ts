import { type SchemaTypeDefinition } from 'sanity'
import post from './post'
import { topic } from './topic'
import { comment } from './comment'

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [post, topic, comment],
}
