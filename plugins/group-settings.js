let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let text = `*${htki} GROUP ${htka}*


              📮ᴍᴀᴜ ᴍᴏᴅᴇ ᴀᴘᴀ?
`
const templateButtons = [
    {index: 3, urlButton: {displayText: '💬 ᴏᴡɴᴇʀ', url: 'https://wa.me/6282252285143'}},
    {index: 4, quickReplyButton: {displayText: 'Open', id: '.g open'}},
    {index: 5, quickReplyButton: {displayText: 'Close', id: '.g close'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: {url: fla + 'Donasi'}
}
conn.sendMessage(m.chat, tm, m)
}
handler.help = ['group']
handler.tags = ['group']
handler.command = /^group$/i
handler.owner = false
handler.admin = true
handler.botAdmin = true
handler.group = true 

export default handler