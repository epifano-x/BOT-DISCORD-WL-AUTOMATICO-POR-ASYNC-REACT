const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("./config.json"); 
const links = require('./links.json');
const { Client, RichEmbed } = require('discord.js');
const firebase = require('firebase');
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
var firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on("ready", () => {
  console.log('bot online')
  let status = [
    {name:`${client.users.size} pessoas!`, type: 'LISTENING'},
    {name:` SERVIDOR`, type: 'PLAYING'},
    {name:`SERVIDOR `, type: 'PLAYING'},
]
function setStatus(){ //Função para o BOT mudar de Status aleatoriamente
    let randomStatus = status[Math.floor(Math.random()*status.length)]
    client.user.setPresence({game: randomStatus})
}
setStatus();
setInterval(() => setStatus(),4000)
})

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////// ESTRUTURA DAS MENSAGEM COM ADIÇAO DAS REACT EM CADA ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var perg1 = ('Roleplay Significa?  \n\n 1⃣ Mata-Mata  \n\n 2⃣ Role com os Amigos \n\n 3⃣  Simular a vida real \n\n 4⃣ Simular a Fantasia')
var perg2 = ('O que é RDM? \n\n 1⃣ RDM é usada para quem abusou de bug. \n\n 2⃣ RDM é atropelar alguém sem motivos. \n\n 3⃣ RDM é matar alguém sem motivos. \n\n 4⃣ RDM é sacar uma arma e ameaçar alguém. ')
var perg3 = ('O que é considerado anti RP? \n\n 1⃣ Parar o carro sobre outro player \n\n 2⃣ É você quebrar as regras do servidor. \n\n 3⃣ E você cometer infrações de trânsito. \n\n 4⃣ É você fazer rp de bandido. ')
var perg4 = ('O que é AMOR A VIDA? \n\n 1⃣ Reagir a um assalto. \n\n 2⃣ É valorizar a sua vida como ela fosse única. \n\n 3⃣ É ter amor próprio. \n\n 4⃣ E pular de uma ponte para evitar não ser pego. ')
var perg5 = ('O que é PowerGaming? \n\n 1⃣ É você ter super forças no jogo. \n\n 2⃣ E você usar informação fora do jogo. \n\n 3⃣ É abusar da mecânica do jogo \n\n 4⃣ E você fazer um rp forçando com os players.')
var perg6 = ('O que é MetaGaming? \n\n 1⃣ É você usar algo do Discord dentro do Jogo. \n\n 2⃣ É você fazer RP baseado em metas de missões. \n\n 3⃣ É você pedir alguém em Casamento \n\n 4⃣ É você jogar usando Discord ')
var perg7 = ('O que é COMBAT LOGGING? \n\n 1⃣ É entrar em combate na ação. \n\n 2⃣ É chamar alguém para lutar. \n\n 3⃣ É deslogar do servidor para fugir de abordagem, prisão, roubo. \n\n 4⃣ É tentar fugir ao ser abordado. ')
var perg8 = ('Quais são as safe zones? \n\n 1⃣ Zonas Safes: Pier, Delegacia, Hospital, Concessionária \n\n 2⃣ Pier, Delegacia, Hospital, Concessionária, Areas de Farm Legal \n\n 3⃣ Aeroporto, Praça, Garagem, Areas de Farm Legal \n\n 4⃣ Pier, Praça, Areas de Farm Legal, Hospital, Delegacia. ')
var perg9 = ('O que é VDM? \n\n 1⃣ É usar um Veiculo para matar alguém \n\n 2⃣ É matar alguém sem motivo. \n\n 3⃣ É ato de abusar da mecânica do jogo \n\n 4⃣ VDM é subir uma montanha com carro de drift. ')
var perg10 = ('Ao entrar no servidor você concorda com todas as regras nele impostas? \n\n 1⃣ Discordo \n\n 2⃣ Que regras? \n\n 3⃣ Nulo \n\n 4⃣ Concordo   ')
var inst = (' Leia com atenção todas as questões e reaja com o emoji corespondente a alternativa correta! ')
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
client.on('raw', async dados => {
  if(dados.t === "MESSAGE_REACTION_ADD" && dados.t === "MESSAGE_REACTION_REMOVE")
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    global.xp = '';
if(dados.t === "MESSAGE_REACTION_ADD"){
    if(dados.d.user_id === `664527446896541729`)return
    let servidor = client.guilds.get("640691876894212107")
    let membro = servidor.members.get(dados.d.user_id)
    let canal1 = servidor.channels.get('640704094192926729')
        if(dados.d.emoji.id === "672801464355258421"){
            if(dados.d.message_id != "672801724511289346") return 
                let ide = dados.d.user_id     
                database.ref(`Servidores/levels/${dados.d.user_id}`)
                .once('value').then(async function(snap){
                    if(snap.val() == null){
                        database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .set({
                                xp: 0,
                                ip: ide,
                                cont: 0,
                                canal: 0
                            });
                    } else {
                        database.ref(`Servidores/levels/${dados.d.user_id}`)
                        .update({
                            xp: 0,
                            ip: ide,
                            cont: 0,
                            canal: 0
                        });
                    }; 
                });
                let embed = new Discord.RichEmbed() 
                .setColor("RED")//COR DA CAIXA DE DIALOGO
                .setTitle(`SERVIDOR WL\n`)
                .addField("Instruções: ", `${inst}`)
                .setTimestamp(new Date())
                .setFooter(` Reaja com ✅ para iniciar a Wl automatica! `)
                membro.send(embed).then(msg => {
                msg.react('✅')
                },
            )
        };
        if(dados.d.emoji.name === "✅"){
            let opa1 = dados.d.channel_id
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().cont === 0){
                    if(dados.d.guild_id === undefined){
                        //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                        database.ref(`Servidores/levels/${dados.d.user_id}`)
                        .update({
                            xp: 0,
                            cont: 1,
                            canal: opa1
                        })
                        let pg1 = new Discord.RichEmbed()
                        .setColor("RED")//COR DA CAIXA DE DIALOGO
                        .setTitle(`Pergunta: ** 1**\n`)
                        .addField("Pergunta: ", `${perg1}`)
                        .setTimestamp(new Date())
                        .setFooter(` Leia com atenção!  `)
                        membro.send(pg1).then(msg => {
                            msg.react('1⃣').then(() => {
                                msg.react('2⃣').then(() => {
                                    msg.react("3⃣").then(() => {
                                        msg.react("4⃣").then(() => {
                                        })
                                    })
                                })
                            })
                        }) 
                    }
                }    
            }            
            })
        };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 1 INCORETA  ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (dados.d.emoji.name === "1⃣" || dados.d.emoji.name === "2⃣" || dados.d.emoji.name === "4⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 1){
                        if(dados.d.guild_id === undefined){
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 2
                            })
                            let pg2 = new Discord.RichEmbed()
                            .setColor("RED")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#2**\n`)
                            .addField("Pergunta: ", `${perg2}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! `)
                            membro.send(pg2).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 2 INCORETA  ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (dados.d.emoji.name === "2⃣" || dados.d.emoji.name === "1⃣" || dados.d.emoji.name === "4⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 2){
                        if(dados.d.guild_id === undefined){
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 3
                            })                        
                            let pg3 = new Discord.RichEmbed()
                            .setColor("RED")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#3**\n`)
                            .addField("Pergunta: ", `${perg3}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! `)
                            membro.send(pg3).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 3 INCORETA  ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (dados.d.emoji.name === "1⃣" || dados.d.emoji.name === "3⃣" || dados.d.emoji.name === "4⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 3){
                        if(dados.d.guild_id === undefined){
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 4
                            })                        
                            let pg4 = new Discord.RichEmbed()
                            .setColor("RED")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#4**\n`)
                            .addField("Pergunta: ", `${perg4}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! `)
                            membro.send(pg4).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 4 INCORETA  ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (dados.d.emoji.name === "1⃣" || dados.d.emoji.name === "3⃣" || dados.d.emoji.name === "4⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 4){
                        if(dados.d.guild_id === undefined){
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 5
                            })                        
                            let pg5 = new Discord.RichEmbed()
                            .setColor("RED")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#5**\n`)
                            .addField("Pergunta: ", `${perg5}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! `)
                            membro.send(pg5).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 5 INCORETA  ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (dados.d.emoji.name === "2⃣" || dados.d.emoji.name === "1⃣" || dados.d.emoji.name === "4⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 5){
                        if(dados.d.guild_id === undefined){
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 6
                            })                        
                            let pg6 = new Discord.RichEmbed()
                            .setColor("RED")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#6**\n`)
                            .addField("Pergunta: ", `${perg6}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! `)
                            membro.send(pg6).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 6 INCORETA  ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (dados.d.emoji.name === "3⃣" || dados.d.emoji.name === "2⃣" || dados.d.emoji.name === "4⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 6){
                        if(dados.d.guild_id === undefined){
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 7
                            })                        
                            let pg7 = new Discord.RichEmbed()
                            .setColor("RED")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#7**\n`)
                            .addField("Pergunta: ", `${perg7}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! `)
                            membro.send(pg7).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 7 INCORETA  ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (dados.d.emoji.name === "1⃣" || dados.d.emoji.name === "2⃣" || dados.d.emoji.name === "4⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 7){
                        if(dados.d.guild_id === undefined){
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 8
                            })                        
                            let pg8 = new Discord.RichEmbed()
                            .setColor("RED")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#8**\n`)
                            .addField("Pergunta: ", `${perg8}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! `)
                            membro.send(pg8).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 8 INCORETA  ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (dados.d.emoji.name === "1⃣" || dados.d.emoji.name === "3⃣" || dados.d.emoji.name === "4⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 8){
                        if(dados.d.guild_id === undefined){
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 9
                            })                        
                            let pg9 = new Discord.RichEmbed()
                            .setColor("RED")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#9**\n`)
                            .addField("Pergunta: ", `${perg9}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! `)
                            membro.send(pg9).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 9 INCORETA  ////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (dados.d.emoji.name === "2⃣" || dados.d.emoji.name === "3⃣" || dados.d.emoji.name === "4⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 9){
                        if(dados.d.guild_id === undefined){
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 10
                            })                        
                            let pg10 = new Discord.RichEmbed()
                            .setColor("RED")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#10**\n`)
                            .addField("Pergunta: ", `${perg10}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! `)
                            membro.send(pg10).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////// PERGUNTA 10 INCORETA  ///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (dados.d.emoji.name === "2⃣" || dados.d.emoji.name === "3⃣" || dados.d.emoji.name === "1⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 10){
                        if(dados.d.guild_id === undefined){
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 11
                            })                        
                            let fim3 = new Discord.RichEmbed()
                            .setColor("RED")//COR DA CAIXA DE DIALOGO
                            .setTitle(`ALL STAR WL`)
                            .addField("Termos: ", 'Se você concorda com as regras e termos do servidor clique em 👾 e saiba se foi aprovado ou não!')
                            .setTimestamp(new Date())
                            .setFooter(` Reaja com 👾 para saber seu resultado! `)
                            membro.send(fim3).then(msg => {
                                msg.react('👾').then(() => {
                                })
                            })
                        }
                    }
                }
            }
            })
        };
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// RESPOSTA CORRETAS //////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////// resposta 1
        if (dados.d.emoji.name === "3⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 1){
                        if(dados.d.guild_id === undefined){
                            xp1 = xp1 + 1
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 2,
                                xp: xp1
                            })                        
                            let pg2 = new Discord.RichEmbed()
                            .setColor("RED")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#2**\n`)
                            .addField("Pergunta: ", `${perg2}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! `)
                            membro.send(pg2).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
///////////////// resposta 2
        if (dados.d.emoji.name === "3⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 2){
                        if(dados.d.guild_id === undefined){
                            xp1 = xp1 + 1
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 3,
                                xp: xp1
                            })                        
                            let pg3 = new Discord.RichEmbed()
                            .setColor("RED")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#3**\n`)
                            .addField("Pergunta: ", `${perg3}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! `) 
                            membro.send(pg3).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
///////////////// resposta 3
        if (dados.d.emoji.name === "2⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 3){
                        if(dados.d.guild_id === undefined){
                            xp1 = xp1 + 1
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 4,
                                xp: xp1
                            })                        
                            let pg4 = new Discord.RichEmbed()
                            .setColor("RED")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#4**\n`)
                            .addField("Pergunta: ", `${perg4}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! `)
                            membro.send(pg4).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
///////////////// resposta 4
        if (dados.d.emoji.name === "2⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 4){
                        if(dados.d.guild_id === undefined){
                            xp1 = xp1 + 1
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 5,
                                xp: xp1
                            })                         
                            let pg5 = new Discord.RichEmbed()
                            .setColor("RED")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#5**\n`)
                            .addField("Pergunta: ", `${perg5}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! `)
                            membro.send(pg5).then(msg => {
                              msg.react('1⃣').then(() => {
                                  msg.react('2⃣').then(() => {
                                      msg.react("3⃣").then(() => {
                                          msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
///////////////// resposta 5
        if (dados.d.emoji.name === "3⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 5){
                        if(dados.d.guild_id === undefined){
                            xp1 = xp1 + 1
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 6,
                                xp: xp1
                            })                        
                            let pg6 = new Discord.RichEmbed()
                            .setColor("RED")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#6**\n`)
                            .addField("Pergunta: ", `${perg6}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! `)
                            membro.send(pg6).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
///////////////// resposta 6
        if (dados.d.emoji.name === "1⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 6){
                        if(dados.d.guild_id === undefined){
                            xp1 = xp1 + 1
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 7,
                                xp: xp1
                            })                        
                            let pg7 = new Discord.RichEmbed()
                            .setColor("RED")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#7**\n`)
                            .addField("Pergunta: ", `${perg7}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! `)
                            membro.send(pg7).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
///////////////// resposta 7
        if (dados.d.emoji.name === "3⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 7){
                        if(dados.d.guild_id === undefined){
                            xp1 = xp1 + 1
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 8,
                                xp: xp1
                            })                        
                            let pg8 = new Discord.RichEmbed()
                            .setColor("RED")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#8**\n`)
                            .addField("Pergunta: ", `${perg8}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! `)
                            membro.send(pg8).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
///////////////// resposta 8
        if (dados.d.emoji.name === "2⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 8){
                        if(dados.d.guild_id === undefined){
                            xp1 = xp1 + 1
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 9,
                                xp: xp1
                            })                        
                            let pg9 = new Discord.RichEmbed()
                            .setColor("RED")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#9**\n`)
                            .addField("Pergunta: ", `${perg9}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! `)
                            membro.send(pg9).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
///////////////// resposta 9
        if (dados.d.emoji.name === "1⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 9){
                        if(dados.d.guild_id === undefined){
                            xp1 = xp1 + 1
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 10,
                                xp: xp1
                            })                        
                            let pg10 = new Discord.RichEmbed()
                            .setColor("RED")//COR DA CAIXA DE DIALOGO
                            .setTitle(`Pergunta: **#10**\n`)
                            .addField("Pergunta: ", `${perg10}`)
                            .setTimestamp(new Date())
                            .setFooter(` Leia com atenção! `)
                            membro.send(pg10).then(msg => {
                                msg.react('1⃣').then(() => {
                                    msg.react('2⃣').then(() => {
                                        msg.react("3⃣").then(() => {
                                            msg.react("4⃣").then(() => {
                                            })
                                        })
                                    })
                                })
                            })
                        }
                    }
                }
            }
            })
        };
///////////////// resposta 10
        if (dados.d.emoji.name === "4⃣" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 10){
                        if(dados.d.guild_id === undefined){
                            xp1 = xp1 + 1
                            //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
                            database.ref(`Servidores/levels/${dados.d.user_id}`)
                            .update({
                                cont: 11,
                                xp: xp1
                            })                        
                            let fim3 = new Discord.RichEmbed()
                            .setColor("RED")//COR DA CAIXA DE DIALOGO
                            .setTitle(`SERVIDOR WL`)
                            .addField("Termos: ", 'Se você concorda com as regras e termos do servidor clique em 👾 e saiba se foi aprovado ou não!')
                            .setTimestamp(new Date())
                            .setFooter(` Reaja com 👾 para saber seu resultado! `)
                            membro.send(fim3).then(msg => {
                                msg.react('👾').then(() => {
                                })
                            })
                        }
                    }
                }
            }
            })
        };
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////coletor e verfificador  /////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (dados.d.emoji.name === "👾" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 11){
                        if(dados.d.guild_id === undefined){
                            if(snap3.val().xp != 10){
                                database.ref(`Servidores/levels/${dados.d.user_id}`)
                                .update({
                                    cont: 12
                                }) 
                                let fim2 = new Discord.RichEmbed()
                                .setColor("RED")//COR DA CAIXA DE DIALOGO
                                .setTitle(`VOCÊ FOI REPROVADO!`)
                                .addField("Você nao atingiu pontuação: ", '10/10.')
                                .setTimestamp(new Date())
                                .setFooter(` Reaja com 🔁 para refazer a wl! `)
                                membro.send(fim2).then(msg => {
                                    msg.react('🔁').then(() => {
                                    })
                                })
                            }
                        }
                    }
                }
            }
            })
        };
////////////// SE FOR PONT MAXIMA
        if (dados.d.emoji.name === "👾" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 11){
                        if(dados.d.guild_id === undefined){
                            if(snap3.val().xp === 10){
                                database.ref(`Servidores/levels/${dados.d.user_id}`)
                                .update({
                                    cont: 12
                                }) 
                                let fim1 = new Discord.RichEmbed()
                                .setColor("RED")//COR DA CAIXA DE DIALOGO
                                .setTitle(`VOCÊ FOI APROVADO!`)
                                .addField("Pontuação: ", '10/10.')
                                .setTimestamp(new Date())
                                .setFooter(` Parabéns você foi aprovado tenha um bom jogo! Reaja com 🔝 para receber o cargo!`)
                                membro.send(fim1).then(msg => {
                                    msg.react('🔝').then(() => {
                                    })
                                })
                            }
                        }
                    }
                }
            }
            })
        };
////////////// se nao atingir pontuaçao
        if (dados.d.emoji.name === "🔁" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 12){
                        if(dados.d.guild_id === undefined){
                            if(snap3.val().xp != 10){
                                database.ref(`Servidores/levels/${dados.d.user_id}`)
                                .update({
                                    cont: 0,
                                    xp: 0,
                                    canal: 0
                                }) 
                                let embed1 = new Discord.RichEmbed()
                                .setColor("RED")//COR DA CAIXA DE DIALOGO
                                .setTitle(`SERVIDOR WL\n`)
                                .addField("Instruções: ", `${inst}`)
                                .setTimestamp(new Date())
                                .setFooter(` Reaja com ✅ para iniciar a Wl automatica! `)
                                membro.send(embed1).then(msg => {
                                  msg.react('✅')
                                })
                            }
                        }
                    }
                }
            }
            })
        };
////////////// TERMINOU WL PONT MAXIMA
        if (dados.d.emoji.name === "🔝" ){ 
            database.ref(`Servidores/levels/${dados.d.user_id}`)
            .once('value').then(async function(snap3){
                let xp1 = snap3.val().xp
                //console.log(snap3.val().ip); //SO PRA VEREFICAR NO LOG
            if(snap3.val().ip === dados.d.user_id){
                if(snap3.val().canal === dados.d.channel_id){
                    if(snap3.val().cont === 12){
                        if(dados.d.guild_id === undefined){
                            if(snap3.val().xp === 10){
                                database.ref(`Servidores/levels/${dados.d.user_id}`)
                                .update({
                                    cont: 0,
                                    xp: 0,
                                    canal: 0
                                }) 
                                let cargof = servidor.roles.get('672803069670588438')
                                membro.addRole(cargof)
                                let embed203 = new Discord.RichEmbed()
                                .setColor("BLUE")//COR DA CAIXA DE DIALOGO
                                .setTitle(`:man_detective: |\n`)
                                .addField("Mensagem: ", ` <@${dados.d.user_id}> FOI APROVADO NA WL`)
                                .setTimestamp(new Date())
                                let embed12 = new Discord.RichEmbed()
                                .setColor("RED")//COR DA CAIXA DE DIALOGO
                                .setTitle(`SERVIDOR WL\n`)
                                .addField(" Você passou na WL ", `<@${dados.d.user_id}>`)
                                .setTimestamp(new Date())
                                .setFooter(` Tenha um bom jogo! `)
                                membro.send(embed12),
                                canal1.send(embed203)
                            }
                        }
                    }
                }
            }
            })
        };





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



}})
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////// RESPOSTA CORRETAS //////////////////////////////////////////////////////////////////
  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//client.on('raw', console.log)



client.login(config.token); 