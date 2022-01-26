// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: URL): void => {
  window.gtag('config', `${process.env.NEXT_PUBLIC_GA_TRACKING}`, {
    page_path: url
  })
}

type EventParams = { [key: string]: string | number }

type GTagEvent = {
  event: string
  params: EventParams
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ event, params }: GTagEvent): void => {
  window.gtag('event', event, {
    ...params
  })
}
