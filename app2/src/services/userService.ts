/**
 * Created by Julius Alvarado on 11/16/2016.
 */

///<reference path="../_all.ts"/>

module ContactManagerApp {

    export interface IUserService {
        loadAllUsers(): ng.IPromise<User[]>;
        selectedUser: User;
    }

    export class UserService implements IUserService {
        static $inject = ['$q'];
        constructor(private $q: ng.IQService){}

        selectedUser: User = null;

        /*
        //This service is simply to simulate loading users from a server.*/
        loadAllUsers(): ng.IPromise<User[]> {
            return this.$q.when(this.users);
        }

        private users: User[] = [
            {
                name: 'AngularJS',
                avatar: 'svg-1',
                bio: 'Model View Controller Framework by Google.',
                notes: [
                    { title: "Data Binding", date: new Date("2016-01-12")},
                    { title: "Frontend Routing", date: new Date("2016-01-19")}
                ]
            },
            {
                name: 'CSS3',
                avatar: 'svg-2',
                bio: 'This is what makes the website very pretty to look at.',
                notes: [
                    { title: "Animations and transitions", date: new Date("2016-01-12")},
                    { title: "UI Coding Technology.", date: new Date("2016-01-19")}
                ]
            },
            {
                name: 'JavaScript',
                avatar: 'svg-3',
                bio: 'An industry standard programming language used everywhere that everyone knows.',
                notes: [
                    { title: "Web page coding", date: new Date("2016-01-12")},
                    { title: "Server coding", date: new Date("2016-01-19")},
                    { title: "Database querying", date: new Date("2016-01-19")}

                ]
            },
            {
                name: 'Node',
                avatar: 'svg-4',
                bio: 'JavaScript on the server.',
                notes: []
            }
        ];
    }
}


//\\