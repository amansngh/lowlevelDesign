export default class User {
    private users: string[];

    constructor()
    {
        this.users = [];
    }

    addUser(user : string) {
        this.users.push(user);
    }

    removeUser(user : string) {
        this.users.filter(obj => obj !== user);
    }

    getUsers() : string[]
    {
        return this.users;
    }

}