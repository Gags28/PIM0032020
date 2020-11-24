const request = {}

request.url = "http://adspim-com-br.umbler.net/"

request.post = function(path, callback, params = {}) {

    fetch(request.url + path, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(params)
        })
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            if (!data.message) {
                callback(data)
            } else if (data.message) {
                callback(data)
                helper.alert.default(data.message)
            }
        })
        .catch(function(error) {
            helper.alert.error('Ocorreu um erro ao realizar a requisição.')
            console.log('Request failed', error);
        });
}


request.get = function(path, callback, params = {}) {
    fetch(request.url + path, {
            method: 'get',
        })
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            if (!data.message) {
                callback(data)
            } else if (data.message) {
                helper.alert.error(data.message)
            }
        })
        .catch(function(error) {
            helper.alert.error('Ocorreu um erro ao realizar a requisição.')
            console.log('Request failed', error);
        });
}

request.delete = function(path, callback, params = {}) {
    fetch(request.url + path, {
            method: 'delete',
        })
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            if (!data.message) {
                callback(data)
            } else if (data.message) {
                callback(data)
                helper.alert.error(data.message)
            }
        })
        .catch(function(error) {
            helper.alert.error('Ocorreu um erro ao realizar a requisição.')
            console.log('Request failed', error);
        });
}


request.put = function(path, callback, params = {}) {

    fetch(request.url + path, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            },
            body: JSON.stringify(params)
        })
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {
            if (!data.message) {
                callback(data)
            } else if (data.message) {
                callback(data)
                helper.alert.default(data.message)
            }
        })
        .catch(function(error) {
            helper.alert.error('Ocorreu um erro ao realizar a requisição.')
            console.log('Request failed', error);
        });
}