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
let messagelist = document.querySelector('#messagelist')

myForm.addEventListener('submit', function (e) {
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    let name = myForm.querySelector('input[name=name]').value
    var MessageObject = AV.Object.extend('message');
    var messageObject = new MessageObject();
    messageObject.save({
        'content': content,
        'name': name
    }).then(function (object) {
        alert('留言成功');
        // window.location.reload()
        // document.querySelector('#messagelist').empty()
        // selectmessage()
        let li = document.createElement('li')
        li.innerText = `${object.attributes.name}:  ${object.attributes.content}`
        messagelist.append(li)
    })
    myForm.querySelector('input[name=content]').value = ''
    myForm.querySelector('input[name=name]').value = ''
})


function selectmessage() {
    var query = new AV.Query('message');
    query.find().then(function (messages) {
        console.log(messages)
        messages.forEach(function (message) {
            console.log(message.attributes.content)
            let li = document.createElement('li')
            li.innerText = `${message.attributes.name}:  ${message.attributes.content}`
            messagelist.append(li)
        });
    }, function (error) {})
}

selectmessage()