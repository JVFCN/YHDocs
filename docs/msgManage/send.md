# 机器人发送消息

## 请求URL

`https://chat-go.jwzhd.com/open-apis/v1/bot/send?token=xxxxxxxxxx`

## 请求示例

```
curl --location --request POST 'https://chat-go.jwzhd.com/open-apis/v1/bot/send?token=xxxxxxxxxx' \
--header 'Content-Type: application/json' \
--data-raw '{
    "recvId": "7058262",
    "recvType": "user",
    "contentType": "text",
    "content": {
        "text": "这里是消息内容"
    }
}'
```

## 请求头

`Content-Type: "application/json; charset=utf-8"`

### 请求参数

|     字段名     |    类型     | 是否必填 | 说明                                |
|:-----------:|:---------:|:----:|-----------------------------------|
|   recvId    |  string   |  是   | 接收消息对象ID，用户为userId，群组为groupId     |
|  recvType   |  string   |  是   | 接收对象类型，用户为user，群组为group           |
| contentType |  string   |  是   | 消息类型，取值包括text、image、file、markdown |
|   content   | Content对象 |  是   | 消息内容对象                            |

## Content对象

#### contentType为text

|   字段名   |     类型     | 是否必填 |     说明      |
|:-------:|:----------:|:----:|:-----------:|
|  text   |   string   |  是   |    消息正文     |
| buttons | Button对象列表 |  否   | 消息中包括button |

#### contentType为image

|   字段名    |     类型     | 是否必填 |     说明      |
|:--------:|:----------:|:----:|:-----------:|
| imageUrl |   string   |  是   |    图片URL    |
| buttons  | Button对象列表 |  否   | 消息中包括button |

#### contentType为markdown

|   字段名   |     类型     | 是否必填 |     说明      |
|:-------:|:----------:|:----:|:-----------:|
|  text   |   string   |  是   | markdown字符串 |
| buttons | Button对象列表 |  否   | 消息中包括button |

#### contentType为file

|   字段名    |     类型     | 是否必填 |     说明      |
|:--------:|:----------:|:----:|:-----------:|
| fileName |   string   |  是   |     文件名     |
| fileUrl  |   string   |  是   |    文件URL    |
| buttons  | Button对象列表 |  否   | 消息中包括button |

#### Button对象

|    字段名     |   类型   | 是否必填 |                           说明                            |
|:----------:|:------:|:----:|:-------------------------------------------------------:|
|    text    | string |  是   |                         按钮上的文字                          |
| actionType |  int   |  是   |             动作类型，取值为1、2、3，分别表示跳转URL、复制、点击汇报             |
|    url     | string |  否   |                当actionType为1时使用，表示跳转的URL                |
|   value    | string |  否   | 当actionType为2时使用，该值会被复制到剪贴板；当actionType为3时使用，该值会被发送给订阅端 |

#### 响应内容

|   字段名   |   类型   |     说明      |
|:-------:|:------:|:-----------:|
|  code   |  int   |    响应代码     |
| message | string | 响应信息，包括异常信息 |
|  data   | Object |    返回数据     |

### 完整示例
发送文本消息请求示例

```json
{
  "recvId": "7058262",
  "recvType": "user",
  "contentType": "text",
  "content": {
    "text": "这里是消息内容",
    "buttons": [
      [
        {
          "text": "复制",
          "actionType": 2,
          "value": "xxxx"
        },
        {
          "text": "点击跳转",
          "actionType": 1,
          "url": "http://www.baidu.com"
        }
      ]
    ]
  }
}
```