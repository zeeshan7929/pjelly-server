
const express = require('express')
const axios = require('axios').default
const app = express()
const port = process.env.PORT;

// const APP_ID = "381241436510504"

// const User_AccesToken = "EAAFavLBlmSgBAFtW79IEeOla5NXmiEOiV9evXT80BJTZBH4pg12RTtfMe4ZCfBc6vit7jkjTJUAXvbYQx3fS0ktexiUIGnH03Wg8UZC72K2zM2IAvNtjyT08ew4i74LnGLRP2Yr4BwoZAIbYjIiFZBzDlZBuxWIx6TYEbTZBqv9pFbOmVicuPhRKYzDbrVwCWaaYjNBrxk5cQZDZD"

// let PostId = "104227291599206_104870938201508"
// let CommentID = "104870938201508_104878051534130"
// let UserID = "3728930857165510"
// let pageAccessToken = "EAAFavLBlmSgBALrBMQXgX8XgtTrQC2Sobhgfbz9ZBmzCGDpS4Wl9M9QYLxUZC9ntBU4XCNCAbeZBW37uS1l9FiISrT8MEdfYOC3qJkgd7TDjjnMb2BILbMZAHJ3Wf35FPaqUufu8RpQQJMl02X3zhiQH1VvoOrzZBDpTScn38lQ1NZAZAt22mTt2rDcICtfMxDy7qnY1oTx9QZDZD"
// let PageId = "104227291599206"
// let url = "https://graph.facebook.com/"+CommentID+"/comments?message=hello+world&access_token="+pageAccessToken

// function ReplyComment(comment_id,message,page_access_token){
//     let url = "https://graph.facebook.com/"+comment_id+"/comments?message="+message+"&access_token="+page_access_token
//     axios.post(url).then((resp)=>{
//         ID = resp.data.id
//         console.log(ID)
//     })
// }
app.use(express.static('public'))
app.get('/hook',(req,res)=>{
    if (req.query['hub.challenge'] != undefined){
        return res.send(req.query['hub.challenge'])
    }else{
        console.log(req.query)
    }
})
app.get('/index',(req,res)=>{
    console.log('hello')
})

app.listen(port)
