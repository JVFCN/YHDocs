# 代码示例

## Python

```python
import requests
import json

url = "https://chat-go.jwzhd.com/open-apis/v1/bot/send?token=xxxx"

payload = json.dumps({
    "recvId": "7058262",
    "recvType": "user",
    "contentType": "text",
    "content": {
        "text": "这里是消息内容"
    }
})
headers = {
    'Content-Type': 'application/json'
}

response = requests.request("POST", url, headers=headers, data=payload)

print(response.text)
```

## PHP

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://chat-go.jwzhd.com/open-apis/v1/bot/send?token=xxxx',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
    "recvId": "7058262",
    "recvType": "user",
    "contentType": "text",
    "content": {
        "text": "这里是消息内容"
    }
}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;
```

## Golang

```go
package main

import (
    "fmt"
    "strings"
    "net/http"
    "io/ioutil"
)

func main() {
    url := "https://chat-go.jwzhd.com/open-apis/v1/bot/send?token=xxxx"
    method := "POST"
    
    payload := strings.NewReader(`{
        "recvId": "7058262",
        "recvType": "user",
        "contentType": "text",
        "content": {
          "text": "这里是消息内容"
        }
    }`)
    
    client := &http.Client {}
    req, err := http.NewRequest(method, url, payload)
    
    if err != nil {
        fmt.Println(err)
        return
    }
    req.Header.Add("Content-Type", "application/json")
    
    res, err := client.Do(req)
    if err != nil {
        fmt.Println(err)
        return
    }
    defer res.Body.Close()
    
    body, err := ioutil.ReadAll(res.Body)
    if err != nil {
        fmt.Println(err)
        return
    }
    fmt.Println(string(body))
}
```

## Java

```java
OkHttpClient client = new OkHttpClient().newBuilder().build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType,
    "{\"recvId\": \"7058262\",\"recvType\": \"user\",\"contentType\": \"text\",
    \"content\": {\"text\": \"这里是消息内容\"}}"
);
Request request = new Request.Builder()
    .url("https://chat-go.jwzhd.com/open-apis/v1/bot/send?token=xxxx")
    .method("POST", body)
    .addHeader("Content-Type", "application/json")
    .build();
Response response = client.newCall(request).execute();
```

## JavaScript

```javascript
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
    "recvId": "7058262",
    "recvType": "user",
    "contentType": "text",
    "content": {
        "text": "这里是消息内容"
    }
});

var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
};

fetch("https://chat-go.jwzhd.com/open-apis/v1/bot/send?token=xxxx", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
```

## cURL

```
curl --location --request POST 'https://chat-go.jwzhd.com/open-apis/v1/bot/send?token=xxxx' \
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

## NodeJs Axios

```javascript
var axios = require('axios');
var data = JSON.stringify({
    "recvId": "7058262",
    "recvType": "user",
    "contentType": "text",
    "content": {
        "text": "这里是消息内容"
    }
});

var config = {
    method: 'post',
    url: 'https://chat-go.jwzhd.com/open-apis/v1/bot/send?token=xxxx',
    headers: {
        'Content-Type': 'application/json'
    },
    data: data
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });
```