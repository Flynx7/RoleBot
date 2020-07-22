module.exports = {
	name: 'help',
	description: 'Commands!',
	execute(message, args) {
        message.channel.send('These are the list of commands:');
            ('<apply - Command to apply for a role.')
            ('<remove - Command to remove an existing role from a member.')
            ('<rank - Command to list the roles in the server acccording to rank.')
            ('Duplicated commands - ')
	},
};