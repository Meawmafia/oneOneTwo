
const Discord = require("discord.js")
const { prefix, token } = require('./config.json')
const client = new Discord.Client()

client.once('ready', () => {
  console.log('Ready!');
  console.log(prefix.length);

});
client.once('ready', () => {
  console.log('Ready!');
 });
 client.once('reconnecting', () => {
  console.log('Reconnecting!');
 });
 client.once('disconnect', () => {
  console.log('Disconnect!');
 });

// client.on('message', message => {
//   if (!message.guild) return;
  // if (message.content.startsWith(`${prefix}test`)) {
  //   message.channel.send('we love O10.');
  // }
//   if (message.content.startsWith('?kodnam')) {
//     const user = message.mentions.users.first();

//     if (user) {
//       const member = message.guild.member(user);
//       if (message.content.startsWith('')) {
//         if (member) {

//           for (i = 0; i < number; i++) {

//             member.voice.setChannel('694411779291217962')
//             member.voice.setChannel('574248112038608927')
//             member.voice.setChannel('694411779291217962')

//           }

//         } else {
//           message.reply("You didn't mention the user to kick!");
//         }
//       }
//     }
//   }
// });
//EDITNEWS
client.on('message', message => {
  // if(!message.content.startsWith(prefix) || message.autor.bot) return;

  const NewsEmbed = new Discord.MessageEmbed()
  .setColor('#ffff00')
  .setTitle('ข่าวในพระราชสำนักประจำวันที่ 14/9/2020')
  .setURL('https://medium.com/zenjournalist/%E0%B8%84%E0%B8%A7%E0%B8%B2%E0%B8%A1%E0%B8%A5%E0%B8%B1%E0%B8%9A%E0%B8%AD%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%B8%E0%B8%94%E0%B9%80%E0%B8%A8%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%97%E0%B8%A8%E0%B9%84%E0%B8%97%E0%B8%A2-478631d0d4e4')
  .setDescription('ขณะนี้เซิฟเวอร์พระราชทานได้ถูกคนร้ายนามว่า KB ทำการดูหมิ่นเซิฟโดยการขุดบ่อน้ำจำนวนมากและส่งคลิปอนาจารล่อเเหลมในช่องเเชทที่มิควร โดยทางเซิฟเวอร์ขอใช้มาตรา 112 ในการจัดการเเละปลดยศเป็นเวลา 24 ชม.นับตั้งเเต่ตอนนี้')
  .setImage('https://media.discordapp.net/attachments/676116582346522670/754792436580221039/2.JPG?width=816&height=702')
  .setFooter('จึงเรียนมาเพื่อทราบ - จาก เจ้าของเซิฟและพยานผู้เห็ฯเหตุการได้เเก่คุณเบิ้ดคุณเอสและคุณแบ้ง&เรืองริทที่เล่นเกมอยู่ !');
  const args = message.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();
  // console.log(args);
  // console.log(command);

  //test
  if (message.content.startsWith(`${prefix}test`)) {
    message.channel.send('We love O10.');
    
  }
//getid
// if (message.content.startsWith(`${prefix}gg`)) {
// let id = client.channels.get("the channel id")
// message.channel.send(id)
// }

  //HBDKB
  if (message.content.startsWith(`${prefix}KBGOD`)) {
    message.channel.send('HBD ครับ KB มีความสุขมากๆรวยๆ ทำเพลงก็มีเเต่คนชอบคนฟังเป็นล้านไม่มีไปรีมิ้กลง tiktok จุ้บๆ');
  }
  //NEWS
  if (message.content.startsWith(`${prefix}News`)) {
    message.channel.send(NewsEmbed);
  }
  if (message.content.startsWith(`${prefix}file`)) {
    const exampleEmbed = new Discord.MessageEmbed()
	.setTitle('Some title')
	.attachFiles(['https://cdn.discordapp.com/attachments/609803869987536935/798146208894943242/New_Text_Document.txt'])
	.setImage('');
    message.channel.send(exampleEmbed);
  }

//brah
// else if(command === 'brah'){

//   const user = message.mentions.users.first();
  
//   message.channel.send(ChannelManager.resolveID);
// }

  //Kodnam
  else if (command === 'kodnam') {
    
    const user = message.mentions.users.first();
    if (!message.mentions.users.size) {
      return message.reply('มึงช่วยบอกกูด้วยนะว่าจะให้กูทำกับใคร ใส่ @ อ่ะให้กูรู้บ้าง');
    }
  
    if (user) {
            const member = message.guild.member(user);
              if (member) {
                const amount = parseInt(args[1]);
               
                if(Number.isInteger(amount)){
                  
                  if(amount<=10){
                  for (i = 0; i < amount; i++) {
                    
                    member.voice.setChannel('574248112038608927')
                    member.voice.setChannel('754785543245529268')
                    member.voice.setChannel('574248112038608927')
                  
                    // member.voice.setChannel('750746406972686598')
                    // member.voice.setChannel('750746905025183744')
                    // member.voice.setChannel('750746406972686598')
                    
                  }
                }else{
                  message.channel.send('อย่าใส่เกิน 10 เลยขอร้อง สงสารเพื่อนหรือสงสารกูบ้าง')
                }
              }
            
                
             
          }
        }
      }
      //lag
      else if (command === 'lag') {
    
        const user = message.mentions.users.first();
        if (!message.mentions.users.size) {
          return message.reply('มึงช่วยบอกกูด้วยนะว่าจะให้กูทำกับใคร ใส่ @ อ่ะให้กูรู้บ้าง');
        }
        
        if (user) {
                const member = message.guild.member(user);
                  if (member) {    
                      for (i = 0; i < 10; i++) {
          
                        member.voice.setDeaf(true)
                        member.voice.setMute(true)
                        member.voice.setDeaf(false)
                        member.voice.setMute(false)
            
                      }
                    }
                  
                
                    
                 
              
            }
            
            
          }
});
client.login(token);

