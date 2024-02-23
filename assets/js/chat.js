var d, h, m, $messages = $(".chat-body"),
    i = 0;

function updateScrollbar() {
    document.querySelector("#scrollbottom .simplebar-content-wrapper").scrollTo({
        top: 1e5,
        behavior: "smooth"
    })
}

function insertMessage() {
    if (msg = $(".write-message").val(), "" == $.trim(msg)) return !1;
    $('<li><div class="admin-chat"><div class="chat-contain"><div class="media"><div class="media-body"><h6 class="admintitle"></h6><p>' + msg + "</p></div></div></div></div></li>").appendTo($(".chat-body ul.chat-list")), $(".write-message").val(null), updateScrollbar(), setTimeout(function() {
        fakeMessage()
    }, 1e3 + 2e3 * Math.random())
}
$(".send-message").click(function() {
    insertMessage()
}), $(window).on("keydown", function(a) {
    if (13 == a.which) return insertMessage(), !1
});
var Fake = ["Hi there, I'm Jesse and you?", "Nice to meet you", "How are you?", "Not too bad, thanks", "What do you do?", "That's awesome", "Codepen is a nice place to stay", "I think you're a nice person", "Why do you think that?", "Can you explain?", "Anyway I've gotta go now", "It was a pleasure chat with you", "Time to make a new codepen", "Bye", ":)"];

function fakeMessage() {
    if ("" != $(".write-message").val()) return !1;
    $('<li class="msg-loader"><div class="user-chat"><div class="chat-contain"><div class="media"><figure class="avatar"><img class="img-fluid" src="../assets/images/logo/icon-logo.webp" alt=""></figure><div class="media-body"><p class="typing-loader"><span class="typedot"></span><span class="typedot"></span><span class="typedot"></span></p></div></div></div></div></li>').appendTo($(".chat-body ul.chat-list")), updateScrollbar(), setTimeout(function() {
        $(".msg-loader").remove(), $('<li><div class="user-chat"><div class="chat-contain"><div class="media"><figure class="avatar"><img src="../assets/images/logo/icon-logo.webp"></figure><div class="media-body"><h6 class="admintitle">live chat</h6><p>' + Fake[i] + "</p></div></div></div></div></li>").appendTo($(".chat-body ul.chat-list")), updateScrollbar(), i++
    }, 850 + 2e3 * Math.random())
}