var APP_ID = '7oYliRshJfzl3XcwPaGA7IEg-gzGzoHsz';
var APP_KEY = 'o8YzH9s3HiUeEwIcSEacTjju';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});


// var TestObject = AV.Object.extend('TestObject');
// var testObject = new TestObject();
// testObject.save({
//   words: 'Hello World!'
// }).then(function(object) {
//   alert('LeanCloud Rocks!');
// })

let myForm = document.querySelector('#postmessage')

myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    var MessageObject = AV.Object.extend('message');
    var messageObject = new MessageObject();
    messageObject.save({
        content: content
    }).then(function (object) {
        alert('留言成功');
        window.location.reload()
        // document.querySelector('#messagelist').empty()
        // selectmessage()
    })
    myForm.querySelector('input[name=content]').value = ''
})


function selectmessage() {
    var query = new AV.Query('message');
    let messagelist = document.querySelector('#messagelist')
    query.find().then(function (messages) {
        console.log(messages)
        messages.forEach(function (message) {
            console.log(message.attributes.content)
            let li = document.createElement('li')
            li.innerText = message.attributes.content
            messagelist.append(li)
        });
    }, function (error) {})
}

selectmessage()