import { PaymentIntent } from '@stripe/stripe-js'

type FetcherParams = {
  url: string
  body: string
  token: string
}

const fetcher = async ({ url, body, token }: FetcherParams) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${url}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body
  })

  return await response.json()
}

type PaymentIntentParams = {
  token: string
}

export const createPaymentIntent = async ({ token }: PaymentIntentParams) => {
  return fetcher({
    url: '/orders/create-payment-intent',
    body: JSON.stringify({ cart: 'item' }),
    token
  })
}

type CreatePaymentParams = {
  paymentIntent?: PaymentIntent
  token: string
}

export const createPayment = ({
  paymentIntent,
  token
}: CreatePaymentParams) => {
  return fetcher({
    url: '/orders',
    body: JSON.stringify({
      paymentIntentId: paymentIntent?.id,
      paymentMethod: paymentIntent?.payment_method
    }),
    token
  })
}
