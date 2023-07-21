# 编辑消息

### 请求URL
`https://chat-go.jwzhd.com/open-apis/v1/bot/edit?token=xxxxxxxxxx`

### 请求示例
```
curl --location --request POST 'https://chat-go.jwzhd.com/open-apis/v1/bot/edit?token=xxxxxxxxxx' \
--header 'Content-Type: application/json' \
--data-raw '{
    "msgId": "xxxxxxx",
    "recvId": "7058262",
    "recvType": "user",
    "contentType": "text",
    "content": {
        "text": "这里是消息内容"
    }
}'
```

### 请求头
`Content-Type: "application/json; charset=utf-8"`

### 请求参数
| 字段 | 类型 | 是否必填 | 说明 |
| --- | --- | --- | --- |
| msgId | string | 是 | 消息ID |
| recvId | string | 是 | 接收消息对象ID，用户: userId 群: groupId <br /> 需与原消息保持一致 |
| recvType | string | 是 | 接收对象类型，用户: user 群: group <br /> 需与原消息保持一致|
| contentType | string | 是 | 消息类型，取值如下<br />text\\image\\file\\markdown |
| content | Content对象 | 是 | 消息对象, 具体值见发送消息 |

### 响应内容
| 字段 | 类型 | 说明 | 
| --- | --- | --- | 
| code | int | 响应代码 | 
| message | string | 响应信息，包括异常信息 | 
| data | Object | 返回数据 | 