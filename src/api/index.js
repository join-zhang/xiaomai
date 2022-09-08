import requests from './ajax'

export const getDetailData = (filmId) =>
  requests({
    url: `gateway?filmId=${filmId}&k=9403003`,
    headers: { 'X-Host': 'mall.film-ticket.film.info' }
  })

// 正在热搜的数据
export const getHotPlayingData = (current,cityId) =>
  requests({
    url: `/gateway?cityId=${cityId}&pageNum=${current}&pageSize=10&type=1&k=6268334`,
    headers: { 'X-Host': 'mall.film-ticket.film.list' }
  })

//电影院的数据
export const getCinemaData = (id) =>
  requests({
    url: `/gateway?cityId=${id}&ticketFlag=1&k=367413`,
    headers: { 'X-Host': 'mall.film-ticket.cinema.list' }
  })

// 获取定位的数据
export const getCinemaAddressData = () =>
  requests({
    url: `/gateway?k=5333797`,
    headers: { 'X-Host': 'mall.film-ticket.city.list' }
  })
