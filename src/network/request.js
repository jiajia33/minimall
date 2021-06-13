import axios from 'axios'

export function request(option) {
  const requestExample = axios.create({
    baseURL: 'http://123.207.32.32:8000'
  })
  requestExample.interceptors.request.use((config) => {
    return config
  }, (error) => {
    console.log(error);
  })
  requestExample.interceptors.response.use((res) => {
    return res.data
  }, (error) => {
    console.log(error);
  })
  return requestExample(option)
}


export function request152(option) {
  const requestExample = axios.create({
    baseURL: 'http://152.120.185.210:8000'
  })
  requestExample.interceptors.request.use((config) => {
    return config
  }, (error) => {
    console.log(error);
  })
  requestExample.interceptors.response.use((res) => {
    return res.data
  }, (error) => {
    console.log(error);
  })
  return requestExample(option)
}