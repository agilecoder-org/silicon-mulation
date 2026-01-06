import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false, // Set to false so we fetch fresh data, fixing deployment visibility issues
})
