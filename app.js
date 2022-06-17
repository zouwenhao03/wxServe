const express = require('express'); //web服务框架模块
const app = new express();
const axios = require('axios');
var bodyParser = require('body-parser')
// // parse appication/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended:false})) 
 // // // parse application/json 
 app.use(bodyParser.json()) 
 // npm install supervisor -g 
// 1/2.配置路由 
 var WXBizDataCrypt=require('./until/WXBizDataCrypt') 
 app.get('/v1/getPhoneNumber', async function(req,res){ 
 console.log(req.query); 
 let {iv,encryptedData,appid,secret,code}=req.query;  // 获取sessionkey 
 // GET https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&jscode=JSCODE&grant type=authorization code 
 // var sessionKey=tiihtNczf5v6AKRyjwEUhQ-; 服务端要请求数据，获取的 
 let result=await axios({ 
 url:"https://api.weixin.qq.com/sns/jscode2session?appid="+appid+"&secret="+secret+"&js_code="+code+"&grant_type=authorization_code",
 method:"GET"
 }) 

 // console.log(result.data.session key) 
 var pc=new WXBizDataCrypt(appid,result.data.session_key) 

var data =pc.decryptData(encryptedData,iv)
 // console.log("解密后 data:" data 
 res.send({value:data}) 
 }); 

 //3.监听端口 
  app.listen(3002,'127.0.0.1',()=>{
    console.log('ready')
  });