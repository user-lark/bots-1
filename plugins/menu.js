let handler = async (m, { conn }) => {
  try {
const quotes = ['The True Power Of Sigma Skibid', 'RIFFXD Never Die!', 'Merusak Lebih Menyenangkan', 'Hidup Itu Berat', 'Ngoding? Tidak Aku Hanya Copy Paste', 'Woy Ini Script Mahal', 'Hanya Yang Terbaik Yang Akan Menang', 'Bacot Bocah Bened Skillnya Itu Itu Aja', 'PUBG, ML, FF, HOK, PB, BS Edyan', 'Semakin Dewasa Semakin Gede Jir', 'Jika Punyamu Kecil Berarti Untuk Anak Kecil', 'Hey Bung Umur Hanyalah Angka', 'No Wife No Problem, Wifi Mati Banting Modem', 'Hargailah Waktu Orang Lain', 'Ideku Lebih Mahal Darimu', 'Mastah Tools!!!']

    const m2 = `┏❐ \`\`\`RIFFXDDOS\`\`\` ❐
\`\`\`- Bot Name: ${global.namebot}\`\`\`
\`\`\`- Version: 1.0\`\`\`
┗❐

\`Tracking Command\`
\`\`\`- .ipinfo\`\`\`
\`\`\`- .nik-sniff\`\`\`
\`\`\`- .subdo-finder\`\`\`

\`DDoS Command\`
\`\`\`- .botnet\`\`\`
\`\`\`- .ddos\`\`\`
\`\`\`- .gyat\`\`\`
\`\`\`- .kill_ssh\`\`\`

\`Botnet Control\`
\`\`\`- .botnet-list\`\`\`
\`\`\`- .botnet-test\`\`\`
\`\`\`- .botnet-add\`\`\`
\`\`\`- .botnet-del\`\`\`

\`WhatsApp Attack Command\`
\`\`\`- .sikat\`\`\`
\`\`\`- .flood-otp\`\`\`

\`Hacking Command\`
\`\`\`- .cctv-hijack\`\`\`
\`\`\`- .data-siswa\`\`\`

\`Preparation Command\`
\`\`\`- .check-host\`\`\`
\`\`\`- .methods\`\`\`
\`\`\`- .proxy\`\`\`
\`\`\`- .ua\`\`\`

\`Owner Command\`
\`\`\`- .addprem\`\`\`
\`\`\`- .delprem\`\`\`
\`\`\`- .listprem\`\`\`
\`\`\`- .self\`\`\`

\`Fun Command\`
\`\`\`- .cekkhodam\`\`\`
\`\`\`- .vccgen\`\`\`
\`\`\`- tiktok\`\`\`
\`\`\`- play\`\`\`

\`SEO Command\`
\`\`\`- .traffic-inject\`\`\`
\`\`\`- .serps\`\`\`
`;

conn.sendMessage(m.chat, { contextInfo: {
externalAdReply: {
showAdAttribution: true, 
title: global.title,
body: quotes[Math.floor(Math.random() * quotes.length)],
mediaType: 1,  
renderLargerThumbnail : true,
thumbnailUrl: global.banner,
sourceUrl: ``
}}, text: m2}, {quoted: m})
	  } catch (e) {
    conn.reply(m.chat, 'Menu Error Bejir', m);
    throw e;
  }
};

handler.help = ['misc'];
handler.tags = ['main'];
handler.command = /^(misc)$/i;
module.exports = handler
