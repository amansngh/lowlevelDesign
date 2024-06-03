class UserDirectory{
    _users : User[];
    static _instance : UserDirectory;

    private constructor()
    {
        this._users = new Array<User>();
    }

    getUser(email : string) : User | string
    {
        this._users.forEach(user => {
            if(user._email == email)
                {
                    return user;
                }              
        });

        return "user not found";
    }

    static instance() : UserDirectory{
        if(!this._instance)
            {
                this._instance = new UserDirectory();
            }

        return this._instance;
    }
}