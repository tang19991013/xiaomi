//第三种： 本地集成mockjs实现数据mock
import Mock from 'mockjs'
Mock.mock('/api/user/login',{
    
        "status": 0,
        "data": {
          "id": 12,
          "username": "admin",
          "email": "admin@51purse.com",
          "phone": null,
          "role": 0,
          "createTime": 1479048325000,
          "updateTime": 1479048325000
        }
      
})