let state = {

    DialogPage: { 
        dialogs: [
            {id: 1, name: 'Sasha'},
            {id: 2, name: 'Masha'},
            {id: 3, name: 'Natasha'}
          ],
        messages: [
            {id: 1, message: 'Привет'},
            {id: 2, message: 'Второе сообщение'},
            {id: 3, message: 'Как твои дела'},
            {id: 4, message: 'Новое сообщение'}
          ]
    },
    ProfilePage: {
        posts: [
            {id: 1, message: 'Привет, как твои дела?', countLikes: 14},
            {id: 2, message: 'Всем привет!', countLikes: 0}
          ]
    }
}

export default state;
