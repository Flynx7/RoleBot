const Discord = require ("discord.js");
const client = new Discord.Client;
const receivedMessage = ('apply')
const guild = ('730255393816838234')
const roles = new Discord.Role 
const data = roles
new Discord.Role(client, data, guild)(data = roles);

client.on('ready', () => {
    console.log("Connected as "+client.user.tag);
    client.user.setActivity("with <roles", {type: "PLAYING"})
    console.log("Servers:")
    client.guilds.cache.forEach((guild) => {
        console.log(" - " + guild.name)

        guild.channels.cache.forEach((channel) => {
            console.log(` -- ${channel.name} (${channel.type}) - ${channel.id}`)
        })
    });
    "733931897931169802".send("Connected as "+client.user.tag)
});

let roleVerification = receivedMessage.guild.channels.cache.get('733992655469412362')

let moderatorRole = receivedMessage.guild.roles.cache.get('732244276557250621')
let designRole = receivedMessage.guild.roles.cache.get('733266450441043978');
let mentorRole = receivedMessage.guild.roles.cache.get('733268131442589807');
let developerRole = receivedMessage.guild.roles.cache.get('733266582985244743');
let betaRole = receivedMessage.guild.roles.cache.get('733267050469916704')
let pseudoRole = receivedMessage.guild.roles.cache.get('733267358696603752');
let eighteenRole = receivedMessage.guild.roles.cache.get('733347063013834772');
let teamRole = receivedMessage.guild.roles.cache.get('733287408526688308');
let staffRole = receivedMessage.guild.roles.cache.get('733346760000536638');
let scriptkiddieRole = receivedMessage.guild.roles.cache.get('733346967110942770');
let amateurRole = receivedMessage.guild.roles.cache.get('732245275820818462');

client.on('message', (receivedMessage) => {
    if (receivedMessage.author == client.user) {
        return
    }
    
    if (receivedMessage.content.startsWith("<")) {
		processCommand(receivedMessage)
	}
})

function processCommand(receivedMessage) {
    //if command = <apply @user Moderator
    let fullCommand = receivedMessage.content.substr(1)
    //fullCommand=apply @user Moderator
    let splitCommand = fullCommand.split(" ")
    //splitCommand={apply, @user, Moderator}
    let primaryCommand = splitCommand[0]
    //primaryCommand=apply
    let arguments = splitCommand.slice(1)
    //arguments={@user, Moderator}

    if (primaryCommand == "apply" || primaryCommand == "add" || primaryCommand == "add-role" || primaryCommand == "add-role") {
		applyCommand(arguments, receivedMessage)
    }
    //<apply <add <add-role <addrole
    if (primaryCommand == "help") {
		helpCommand(arguments, receivedMessage)
    }
    //<help
    if (primaryCommand == "remove" || primaryCommand == "rm" || primaryCommand == "del" || primaryCommand == "delete" || primaryCommand == "dl") {
		removeCommand(arguments, receivedMessage)
    }
    //<remove <rm <del <delete <dl
    if (primaryCommand == "rank" || primaryCommand == "rankroles"|| primaryCommand == "rankrole" || primaryCommand == "rank-role" || primaryCommand == "rank-roles"||primaryCommand == "list"||primaryCommand == "listrole"||primaryCommand == "listroles"|| primaryCommand == "list-roles" || primaryCommand == "list-role") {
		rankCommand(arguments, receivedMessage)
    }
    //<rank <rankroles <rankrole <rank-role <rank-roles <list <listrole <listroles <list-role <list-roles
}

function applyCommand(arguments, receivedMessage) {
receivedMessage.author.add.roleVerification
    if (arguments.length == 0) {
    receivedMessage.channel.send('What are you applying for?')
    } else if(arguments == designRole){
    receivedMessage.author.send('Please answer these questions meaningfully and honestly.')('./design.js')
    } else if(arguments == mentorRole){
    receivedMessage.author.send('Please answer these questions meaningfully and honestly.')('./mentor.js') 
    } else if(arguments == developerRole){
    receivedMessage.author.send('Please answer these questions meaningfully and honestly.')('./developer.js')
    } else if(arguments == betaRole){
    receivedMessage.author.send('Please answer these questions meaningfully and honestly.')('./beta.js')
    } else if(arguments == pseudoRole){
    receivedMessage.author.send('Please answer these questions meaningfully and honestly.')('./pseudo.js')
    } else if(arguments == eighteenRole){
    receivedMessage.author.send('Please answer these questions meaningfully and honestly.')('./eighteen.js')
    } else if(arguments == teamRole){
    receivedMessage.author.send('Please answer these questions meaningfully and honestly.')('./team.js')
    } else if(arguments == staffRole){
    receivedMessage.author.send('Please answer these questions meaningfully and honestly.')('./staff.js')
    } else if(arguments == scriptkiddieRole){
    receivedMessage.author.send('Please answer these questions meaningfully and honestly.')('./scriptkiddie.js')
    } else if(arguments == amateurRole){
    receivedMessage.author.send('Please answer these questions meaningfully and honestly.')('./amateur.js')
    }
}

function helpCommand(arguments, receivedMessage) {
receivedMessage.channel.send('./commands.js')
}

function removeCommand(arguments, receivedMessage) {
    if (receivedMessage.author.hasRole(!moderatorRole)){
    receivedMessage.channel.send('You do not have the permission to do so!')
    } else if(receivedMessage.author.hasRole(moderatorRole)){
    receivedMessage.channel.send('Tag a user to remove the role!')
    } else if(receivedMessage.user.tag){
    receivedMessage.channel.send('Role succesfully removed from' + {$user,name})
    }
}

client.login('your_token_here')

/*
Servers:
 - G20 Developer Team
 -- announcements (text) - 733272410287112233 
 -- [>] Beethoven (voice) - 733275531767709727
 -- [-] Bob Dylan (voice) - 733275584809009158
 -- moderator-fun (text) - 733988146576097360 
 -- general (text) - 730255393816838237       
 -- Music (category) - 730255393816838236
 -- Beta-Test-Grounds (category) - 733736183653203988
 -- role-verification (text) - 733992655469412362
 -- project-management (text) - 733272302354956329
 -- staff-ping (text) - 733274317139476592
 -- CodeUps - Coding Summits (category) - 733274874705084436
 -- The CodeUp - Code Summits (voice) - 732243188013858826
 -- beta-test-grounds-3 (text) - 733931917795262495
 -- python (text) - 733271477910110250
 -- go (text) - 733271758274166866
 -- js-frameworks (text) - 733271842508374077
 -- other (text) - 733272029121216513
 -- beta-test-grounds-2 (text) - 733931897931169802
 -- Main (category) - 730255393816838235
 -- PROGRAMMING (category) - 733271363007283211
 -- psuedo-code-design (text) - 733344926632509561
 -- rules (text) - 733345629660643419
 -- flutter (text) - 733271898015924315
 -- challenges (text) - 733272152085757953
 -- codeups-and-announcements (text) - 733557557322448926
 -- welcome (text) - 733345586522095616
 -- py-frameworks (text) - 733271963472232539
 -- java (text) - 733271432070430770
 -- miss-you (text) - 733345658060275843
 -- javascript (text) - 733271406652948513
 -- ruby-on-rails (text) - 733271790335426590
 -- apply-for-role (text) - 733271165107306516
 -- music (text) - 732228369776640080
 -- share-resources (text) - 733271461598461992
 -- beta-test-grounds-1 (text) - 733736279992172649
 -- ruby (text) - 733271733150154754
 -- [=] Mozart (voice) - 730255393816838238

The role IDs:
Moderator - 732244276557250621
Design- 733266450441043978
Mentor- 733268131442589807
Developer- 733266582985244743
Beta- 733267050469916704
Pseudo- 733267358696603752
18+- 733347063013834772
Team- 733287408526688308
Staff- 733346760000536638
Script Kiddie- 733346967110942770
Amateurs- 733346896499966034
Bots - 732244952171413560
Muted - 732245275820818462
*/

/*

List of commands

<help
*Embed message of command lists

<listroles
*Embed message of role lists

It will be like tagging the role or mentioning the role.
Then the bot adds the author of the message to #role-verification.
Then the author of the message responds to the questions.
After the author answers, the bot responds "OK. We have received your response and shall reach out to you soon. Meanwhile, stay safe and Happy Coding!"
After that, the author/applicant is removed from the #role-verification channel.
Then we discuss and get back to the applicant by DMing him.

Commands:

<apply
"What are you applying for?"

<apply "Non existing role"
"There is no such role as "The role mentioned"."

<apply Role
"Please answer these questions honestly and meaningfully."
"Your role has been applied for."

<apply "Existing role"
"You already have that role"

<apply @user "Non existing role"
"There is no such role as "The role mentioned"."

<apply @user Role
"@user's role has been applied for"

<apply @user "Existing role"
"@user already has that role"

<remove Role
"Role successfully removed" 

<remove "Non existing role"
"You don't have that role."

<remove @user Role
"@user's role successfully removed"

<remove @user Role
"You're not a moderator or have permission to do that."

<remove @user "Non existing role"
"@user doesn't have that role"

<rank
*Embed message of the ranking of roles e.g. #1 Moderator, #2 Design and Management, so on.

<rank Role
"Rank of Role is #no."

<rank "Non existing Role"
"That role doesn't exist"

Lets start the command making! Pleeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeease.
Hello?????
Look my dad might come any moment and I gotta  help him.

Duplicated commands

<apply <add <add-role <addrole

<remove <rm <del <delete <dl

<rank <rankroles <rankrole <rank-role <rank-roles

THE END

*/
