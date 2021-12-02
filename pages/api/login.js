import { withIronSessionApiRoute } from 'iron-session/next'
import bcrypt from 'bcryptjs'

export default withIronSessionApiRoute(
  async function loginRoute(req, res) {
    const { email, password } = JSON.parse(req.body)

    const hashedPassword = bcrypt.hashSync(password, 12)

    req.session.user = {
      id: 230,
      admin: true,
      email,
      password: hashedPassword,
      isAuthorized: true
    }

    await req.session.save()
    res.send({ ok: true })
  },
  {
    cookieName: 'MYSITECOOKIE',
    password: process.env.COOKIE_PASSWORD
  }
)
