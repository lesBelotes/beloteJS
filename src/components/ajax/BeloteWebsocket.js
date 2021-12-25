export default class BeloteWebsocket {

    constructor() {

        this.WS_ROOT_URL  = 'ws://127.0.0.1:8080';

    }
    
    connect(url){
        url = url.startsWith(this.WS_ROOT_URL)? url : this.WS_ROOT_URL+url;
        return new Promise( 
          function (resolve, reject) {
            try {
              const ws= new WebSocket(url);
              ws.onopen = function() {
                  // apres connection reussit 
                console.log("WSocket connected");
                resolve(ws)
              }
            }catch (e) {
              reject(e)
            }
          })
      }

}