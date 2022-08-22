
export  function getAccessToken() {
    return localStorage.getItem('access-token')
}

export  function getRefreshToken() {
    return localStorage.getItem('refresh-token')
}

export  function setToken(token: string) {
    localStorage.setItem('access-token', token)
}