function redirect() {
    channelElement = null
    channelName = null
    setTimeout(() => {
        if (document.querySelector("ytd-channel-name#channel-name.style-scope.ytd-video-owner-renderer > div > div > yt-formatted-string > a.yt-simple-endpoint.style-scope.yt-formatted-string") != null) {
            let channelElement = document.querySelector("ytd-channel-name#channel-name.style-scope.ytd-video-owner-renderer > div > div > yt-formatted-string > a.yt-simple-endpoint.style-scope.yt-formatted-string")
            channelElement.style.backgroundColor = "red"
            let channelName = channelElement.innerText
            console.log(channelElement)
            channelName = channelName.toLowerCase();
            const bannedChannels = [
                "genzie",
                "mortalcio",
                "mortalcio plus",
                "ekipa",
                "qry",
                "fausti",
                "kartonii",
                "teenz",
                "genzie lyrics",
                "kamikos",
                "hi hania"
            ]
            console.log(channelName)
            if(bannedChannels.includes(channelName)) {
                window.stop()
                channelElement = null
                channelName = null
                window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
                console.log("lol")
            }
        } else {
            console.log("channel element is null")
        }
    }, 2000);
}

window.onload = redirect()
window.addEventListener('yt-navigate-start', redirect,   true)

// chrome.runtime.onMessage.addListener((message, sender) => {
//     console.log("lol2")
//     if(message.command == "redirect") {
//         redirect()
//     }
// });
