import { request } from './request'

export function getDetail(iid) {
	return request({
		url: '/detail',
		params: {
			iid
		}
	})
}


// 现在的请求方式默认是get
// 如果要换成post等 这加上method: 'POST', 
// 而且不然传入params而是要传入data
// data:{key:'aa'}
// 如：

// export function getLogin(data) {
// 	return request({
// 		method: 'POST',
// 		url: '/Login',
// 		data
// 	})
// }
