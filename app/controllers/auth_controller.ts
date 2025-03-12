import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'
// import Hash from '@adonisjs/hash'
import { Hash } from '@adonisjs/hash'
import { jwt } from '@adonisjs/auth'

export default class AuthController {
  // Register a new user
  public async register({ request, response }: HttpContext) {
    try {
      const { fullName, email, password } = request.only(['fullName', 'email', 'password'])

      const userExists = await User.findBy('email', email)
      if (userExists) {
        return response.badRequest({ message: 'User already exists' })
      }

      const user = await User.create({ fullName, email, password })
      return response.created({ message: 'User registered successfully', user })
    } catch (error) {
      return response.internalServerError({ message: 'Registration failed', error: error.message })
    }
  }

  // Login user & generate JWT token
  public async login({ request, response }: HttpContext) {
    try {
      const { email, password } = request.only(['email', 'password'])

      const user = await User.findBy('email', email)
      if (!user) {
        return response.unauthorized({ message: 'Invalid credentials' })
      }

      const isPasswordValid = await Hash.verify(user.password, password)
      if (!isPasswordValid) {
        return response.unauthorized({ message: 'Invalid credentials' })
      }

      const token = await jwt.sign({ id: user.id, email: user.email }, { expiresIn: '1d' })

      return response.ok({ message: 'Login successful', token })
    } catch (error) {
      return response.internalServerError({ message: 'Login failed', error: error.message })
    }
  }
}
