import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"

let handler  = async (m, { conn }) => {

 let thumbnya = 'https://telegra.ph/file/e52eb5f3c4f2f983600d8.jpg'

let msg = await generateWAMessageFromContent(m.chat, { locationMessage: {
  degreesLatitude: 0,
  degreesLongitude: 0,
  name: '𝗖𝗟𝗜𝗖𝗞 𝗛𝗘𝗥𝗘',
  address: 'Click Text berwarna Biru\n\nNge tensnenwkdn',
  url: `https://saweria.co/jbyannstore`,
  isLive: true,
  accuracyInMeters: 0,
  speedInMps: 0,
  degreesClockwiseFromMagneticNorth: 2,
  comment: '',
  jpegThumbnail: await( await fetch(thumbnya)).buffer()
}}, { quoted: m })

return conn.relayMessage(m.chat, msg.message, {})
}

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^(donasi)$/i

export default handler