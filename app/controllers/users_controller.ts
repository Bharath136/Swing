import User from '#models/user'
import type { HttpContext } from '@adonisjs/core/http'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({ }: HttpContext) { }

  /**
   * Display form to create a new record
   */
  async create({ }: HttpContext) { }

  /**
   * Handle form submission for the create action
   */
  // async store({ request }: HttpContext) {}
  async store({ request, response }: HttpContext) {
    try {
      const user = new User()
      user.username = request.input('username')
      user.email = request.input('email')
      user.password = request.input('password')
      await user.save()

      return response.status(201).json({ data: user })
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

  /**
   * Show individual record
   */
  async show({ request, response }: HttpContext) {
    const employee = await User.find(request.param('id'))
    return response.status(201).json({ data: employee })
  }

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) { }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, response }: HttpContext) {
    try {
      const user = await User.findOrFail(params.id)
      user.username = request.input('username')
      user.email = request.input('email')
      user.password = request.input('password')
      await user.save()

      return response.status(201).json({ data: user })
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }

  /**
   * Delete record
   */
  async destroy({ request, response }: HttpContext) {
    try {
      const user = await User.findOrFail(request.param('id'))
      await user.delete()
      return response.status(204).json({ message: 'User deleted successfully', data: user })
    } catch (error) {
      return response.status(400).json({ message: error.message })
    }
  }
}