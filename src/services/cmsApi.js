import * as qs from 'qs';
import { config } from '../config/config';

const HOME_PAGE_PROPERTIES = ['heroTitle', 'heroDescription']

const query = qs.stringify({
  fields: HOME_PAGE_PROPERTIES,
  populate: {
    heroImage: true,
    project: {
      populate: {
        image1: true,
        image2: true,
      },
    },
  },
}, { encodeValuesOnly: true, arrayFormat: 'indices' })

export async function fetchHomePage(signal) {
  const url = `${config.CMS_API_URL}/api/home-page?${query}`

  const res = await fetch(url, { signal })
  if (!res.ok) {
    const text = await res.text().catch(() => null)
    const err = new Error(`CMS fetch failed (${res.status})`)
    err.status = res.status
    err.body = text
    throw err
  }

  const data = await res.json()
  console.log('Data from CMS:', data)
  return data
}



