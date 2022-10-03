function refreshCache() {
    if ('serviceWorker' in window.navigator && navigator.serviceWorker.controller) {
        if (confirm('是否确定刷新博文缓存')) navigator.serviceWorker.controller.postMessage("refresh")
    } else if (GLOBAL_CONFIG.Snackbar) {
        btf.snackbarShow('ServiceWorker未激活')
    } else {
        alert('ServiceWorker未激活')
    }
}

navigator.serviceWorker.addEventListener('message', event => {
    if (event.data === 'success') location.reload(true)
})
