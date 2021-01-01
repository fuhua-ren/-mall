import {request} from "./request"

export function getHomeInfo() {
	return request({
		url: '/home/multidata'
	})
}

export function getGoodsInfo(type, page) {
	return request({
		url: '/home/data',
		params: {
			type,
			page
		}
	})
}