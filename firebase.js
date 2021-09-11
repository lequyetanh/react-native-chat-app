import firebase from 'firebase';

class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyB0QA-eYIBcoKva6IgPA8SdLzjPQDWYJZE",
        authDomain: "chatapp-79f0e.firebaseapp.com",
        databaseURL: "https://chatapp-79f0e-default-rtdb.firebaseio.com",
        projectId: "chatapp-79f0e",
        storageBucket: "chatapp-79f0e.appspot.com",
        messagingSenderId: "1061389762242",
        appId: "1:1061389762242:web:68456efa3b29e10f0f455b",
        measurementId: "G-4CC7HSQ1JN"
      })
    }
  }

  checkAuth = () => {
    firebase
      .auth()
      .onAuthStateChanged(user => {
        if (!user) {
          firebase
            .auth()
            .signInAnonymously();
        }
      })
  }

  send = (messages) => {
      console.log(messages)
    messages.forEach(item => {
        item.user._id = item._id;
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user
      }
      this
        .db
        .push(message)
    })
  }

  parse = (message) => {
    const {user, text, timestamp} = message.val();
    const {key: _id} = message;
    const createdAt = new Date(timestamp);

    return {_id, createdAt, text, user}
  }

  get = callback => {
    this
      .db
      .on('child_added', snapshot => {
        callback(this.parse(snapshot));
      })
  }

  off() {
    this
      .db
      .off();
  }

  get db() {
      console.log(firebase
        .database()
        .ref("messages"))
    return firebase
      .database()
      .ref("messages");
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}

export default new Fire();