fetch('flowers.jpg').then(function (response) {//检测请求是否成功
    if (response.ok) {//成功fetch() promise 将会 response，ok属性字面量为true
        return response.blob();//返回对象
    }
    throw new Error('Network response was not ok.');//报错误信息
}).then(function (myBlob) {//请求失败会执行then
    var objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
}).catch(function (error) {//请求失败会执行catch
    console.log('There has been a problem with your fetch operation: ', error.message);
});