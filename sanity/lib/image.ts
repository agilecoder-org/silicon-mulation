import createImageUrlBuilder from '@sanity/image-url'
import type { Image } from 'next-sanity/image'

import { dataset, projectId } from '../env'

const imageBuilder = createImageUrlBuilder({
    projectId: projectId || '',
    dataset: dataset || '',
})

export const urlFor = (source: Image) => {
    return imageBuilder.image(source)
}
