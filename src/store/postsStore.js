import { action, makeObservable, observable } from "mobx"

class Posts{
    posts = [
        {
            name: 'Mila',
            text: 'Consectetur amet, sit sit'
        },
        {
            name: 'Pedro',
            text: 'Et. Non lorem elit. Venen'
        },
        {
            name: 'Helen',
            text: 'Nisi ultricies. Elit. Acc'
        },
        {
            name: 'Alex',
            text: 'Faucibus. Velit accumsan '
        },
        {
            name: 'Nick',
            text: 'Sit molestie risus nunc i'
        },
        {
            name: 'Kevin',
            text: 'Non id non adipiscing mat'
        },
        {
            name: 'Jack',
            text: 'Amet, elit. Mattis ipsum '
        },
        {
            name: 'Joe',
            text: 'Vitae tortor, ultricies. '
        },
        {
            name: 'Ann',
            text: 'Sapien interdum velit ele'
        },
        {
            name: 'Alex',
            text: 'Quis, malesuada quam, in '
        },
        {
            name: 'Helen',
            text: 'Hac leo, dictum. Eleifend'
        },
        {
            name: 'Joe',
            text: 'Vestibulum habitasse soda'
        },
        {
            name: 'Alex',
            text: 'Augue nec cursus et moles'
        },
        {
            name: 'Nick',
            text: 'Pellentesque cras in lect'
        },
        {
            name: 'Ann',
            text: 'Urna habitasse sit nec ar'
        },
        {
            name: 'Helen',
            text: 'Sit mollis velit pulvinar'
        },
        {
            name: 'Joe',
            text: 'Justo amet, dictum. Plate'
        },
        {
            name: 'Alice',
            text: 'Dolor tempus sodales habi'
        },
        {
            name: 'Dolores',
            text: 'Habitasse non ut. Sit in '
        },
        {
            name: 'Ann',
            text: 'Cursus dapibus ex. Venena'
        },
        {
            name: 'Helen',
            text: 'Cursus nulla nunc justo s'
        },
        {
            name: 'Joe',
            text: 'Sapien amet, pellentesque'
        },
        {
            name: 'Ann',
            text: 'Pulvinar tortor, sit hac '
        },
        {
            name: 'Alice',
            text: 'Platea ornare et. Odio. C'
        },
        {
            name: 'Joe',
            text: 'Cursus vitae vitae morbi '
        },
        {
            name: 'Nick',
            text: 'Sit odio. Dictum. Vel et.'
        },
    ]
    constructor(){
        this.handleSubmit = this.handleSubmit.bind(this)
        makeObservable(this, {
            posts: observable,
            handleSubmit: action
        })
    }
    handleSubmit(id, text){
        this.posts[id]['text'] = text
    }
}

const posts = new Posts()
export default posts