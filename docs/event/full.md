<!--
 * @Date: 2023-03-29 21:43:48
 * @LastEditTime: 2023-04-08 11:46:40
 * 
 * Copyright (c) 2023 by 北京九万智达科技有限公司, All Rights Reserved. 
-->
# 事件订阅详述

事件订阅是系统可以将软件中的消息或其他事件（加入、退出群事件和关注、取关机器人事件）推送到你的服务器中，你的服务器可以根据对应的消息或者事件做出相应的反应。<br />推送是通过`HTTP`协议以`POST`请求的方式推送`JSON`格式的数据

**使用场景**

- 你希望能对用户输入的内容做出相应反应时，比如当用户输入1+1=,你可以在服务器端收到这条消息，然后计算出结果，再通过消息发送接口告诉用户计算结果

## **事件列表**
| 事件名称 | 介绍 | 取值 | 状态 |
|:---:|:---:|:---:|:---:|
| 普通消息事件 | 普通消息 | message.receive.normal | 可用 |
| 指令消息事件 | 指令消息 | message.receive.instruction | 可用 |
| 关注机器人事件 | 关注机器人事件 | bot.followed | 可用 |
| 取消关注机器人事件 | 取消关注机器人事件 | bot.unfollowed | 可用 |
| 加入群事件 | 用户加入群事件 | group.join | 可用 |
| 退出群事件 | 用户退出群事件 | group.leave |可用 |
| 按钮事件 | 消息中按钮点击事件 | button.report.inline |可用 |

## 消息事件
#### **数据内容**
| 字段 | 类型 | 说明 |
|:---:|:---:|:---:|
| version | string | 事件内容版本号 |
| header | Header对象 | 包括事件的基础信息 |
| event | Event对象 | 包括事件的内容。注意：Event对象的结构会在不同的eventType下发生变化 |

#### **Header对象**
| 字段 | 类型 | 说明 |
|:---:|:---:|:---:|
| eventId | string | 事件ID，全局唯一 |
| eventTime | int | 事件产生的时间，毫秒13位时间戳 |
| eventType | string |事件类型 |

#### **Event对象**
| 字段 | 类型 | 说明 |
|:---:|:---:|:---:|
| sender | Sender对象 | 发送者的信息 |
| message | Message对象 | 消息内容 |

#### **Sender对象**
| 字段 | 类型 | 说明 |
|:---:|:---:|:---:|
| senderId | string | 发送者ID，给用户回复消息需要该字段 |
| senderType | string | 发送者用户类型，取值：user |
| senderUserLevel | string | 发送者级别，取值：owner、administrator、member、unknown |
| senderNickname | string | 发送者昵称 |

#### **Chat对象**
| 字段 | 类型 | 说明 |
|:---:|:---:|:---:|
| chatId | string | 聊天对象ID |
| chatType | string | 聊天对象类型，取值: bot、group |

#### **Message对象**
| 字段 | 类型 | 说明 |
|:---:|:---:|:---:|
| msgId | string | 消息ID，全局唯一 |
| parentId | string | 引用消息时的父消息ID |
| sendTime | int | 消息发送时间，毫秒13位时间戳 |
| chatId | string | 当前聊天的对象ID<br />单聊消息，chatId即对方用户ID<br />群聊消息，chatId即群ID<br />机器人消息，chatId即机器人ID |
| chatType | string | 当前聊天的对象类型<br />group 群聊<br />bot 机器人 |
| contentType | string | 当前消息类型<br />text 文本消息<br />image 图片消息<br />markdown Markdown消息<br />file 文件消息 |
| content | string | 消息正文，注意为字符串类型 |
| ~~instructionId~~ | int | 废弃勿用 ~~指令ID，可用来区分用户发送的指令~~ |
| ~~instructionName~~ | string | 废弃勿用 ~~指令名称，可用来区分用户发送的指令~~ |
| commandId | int | 指令ID，可用来区分用户发送的指令 |
| commandName | string | 指令名称，可用来区分用户发送的指令 |

### **消息JSON结构体示例**
```json
{
  "version": "1.0",
  "header": {
    "eventId": "xxxxx",
    "eventTime": 1647735644000,
    "eventType": "xxxxxx"
  },
  "event": {
    "sender": {
      "senderId": "xxxxx",
      "senderType": "user",
      "senderUserLevel": "member",
      "senderNickname": "昵称"
    },
    "chat": {
      "chatId": "xxxxx",
      "chatType": "group"
    },
    "message": {
      "msgId": "xxxxxx",
      "parentId": "xxxx",
      "sendTime": 1647735644000,
      "chatId": "xxxxxxxx",
      "chatType": "group",
      "contentType": "text",
      "content": {
        "text": "早上好"
      },
      "commandId": 98,
      "commandName": "计算器"
    }
  }
}
```