import { getPokemonCards } from '../../api/getPokemonCards'

const ALLOWED_METHODS = ['GET', 'HEAD']

export default async function handler (req, res) {
  const requestMethod = req.method
  if (!ALLOWED_METHODS.includes(requestMethod)) res.status(405).json({ error: `Method ${requestMethod} Not Allowed` })

  const protocol = req.headers['x-forwarded-proto'] || req.headers.referer?.split('://')[0] || 'http'
  const host = req.headers.host
  const url = `${protocol}://${host}`

  const limit = req.query.limit
  const offset = req.query.offset

  const data = await getPokemonCards({ offset, limit, url })

  res.status(200).json(data)
}
