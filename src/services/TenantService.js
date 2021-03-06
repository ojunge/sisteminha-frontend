import axios from 'axios'
import Cookies from 'universal-cookie'
import { API_ROOT } from './api-config'

const serverUrl = API_ROOT

const cookies = new Cookies()

export default class TenantService {
  get = (callback, tenant) => {
    var credentials = cookies.get('credentials')
    axios({
      method: 'get',
      url: serverUrl + '/tenant/' + tenant.id,
      headers: {
        'Content-Type': 'application/json'
      },
      auth: {
        username: credentials.username,
        password: credentials.password
      }
    })
      .then(response => {
        callback(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  listAll = callback => {
    var credentials = cookies.get('credentials')

    axios({
      method: 'get',
      url: serverUrl + '/tenant',
      headers: {
        'Content-Type': 'application/json'
      },
      auth: {
        username: credentials.username,
        password: credentials.password
      }
    })
      .then(response => {
        callback(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  remove = (callback, tenant) => {
    var credentials = cookies.get('credentials')
    console.log(callback)
    console.log(tenant)
    axios({
      method: 'delete',
      url: serverUrl + '/tenant/' + tenant.id,
      headers: {
        'Content-Type': 'application/json'
      },
      auth: {
        username: credentials.username,
        password: credentials.password
      }
    })
      .then(response => {
        callback(response)
      })
      .catch(error => {
        console.log(error)
      })
  }

  save = (callback, tenant) => {
    var credentials = cookies.get('credentials')
    axios({
      method: 'post',
      url: serverUrl + '/tenant',
      headers: {
        'Content-Type': 'application/json'
      },
      auth: {
        username: credentials.username,
        password: credentials.password
      },
      data: tenant
    })
      .then(response => {
        callback(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
