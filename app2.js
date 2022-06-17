const express = require('express'); //web服务框架模块
const app = express();
const axios = require('axios'); // 请求api

const hostName = '127.0.0.1'; //ip或域名
const port = 3000; //端口

/**
 * [开启跨域便于接口访问]
 */
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //访问控制允许来源：所有
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //访问控制允许报头 X-Requested-With: xhr请求
    res.header('Access-Control-Allow-Metheds', 'PUT, POST, GET, DELETE, OPTIONS'); //访问控制允许方法
    res.header('X-Powered-By', 'nodejs'); //自定义头信息，表示服务端用nodejs
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});

/**
 * [设置验证微信接口配置参数]
 */
const config = {
    AppID: 'wxeeb645015f448448', //对应测试号信息里的appID
    AppSecret: '1ba1e111fb344a664df08798b27d8620', //对应测试号信息里的appsecret
};

// session标识
const authorization_code = 'demo';


// 通过微信小程序开发文档里面的加密解密下载获取
const WXBizDataCrypt = require('./until/WXBizDataCrypt');


// 返回sessionKey
app.get('/onLogin', (req, res) => {
    const query = req.query;
    const { code } = query;
    var fetchUrl = `https://api.weixin.qq.com/sns/jscode2session?appid=${config.AppID}&secret=${config.AppSecret}&js_code=${code}&grant_type=${authorization_code}`;

    axios
        .get(fetchUrl)
        .then((response) => {
            var ret = {
                status: 200,
                data: response.data,
                msg: '成功',
            };
            res.send(ret);
        })
        .catch((err) => {
            console.log('axios occurs ', err);
        });
});

// 返回个人信息
app.get('/wechat/decrypt_data', (req, res) => {
    const { sessionKey, encryptedData, iv } = req.query;
    const bizDataCrypt = new WXBizDataCrypt(config.AppID, sessionKey);
    // res.send({ sessionKey, encryptedData, iv });
    const data = bizDataCrypt.decryptData(encryptedData, iv);
    if (Object.keys(data).length > 0) {
        res.status(200);
        res.send({
            status: 200,
            data,
            msg: '获取手机号码成功',
        });
    } else {
        res.status(400);
        res.send({
            status: 400,
            msg: '获取失败,请重新授权',
        });
    }
});

app.listen(port, hostName, function () {
    console.log(`服务器运行在http://${hostName}:${port}`);
});

