export default class BeloteWebsocket {

    constructor() {

        this.WS_ROOT_URL  = 'ws://127.0.0.1:8080';
        this.socketConnection  = null;
    }
    
    connect(url){
      let self = this;
        url = url.startsWith(this.WS_ROOT_URL)? url : this.WS_ROOT_URL+url;
        return new Promise( 
          function (resolve, reject) {
            try {
              const ws= new WebSocket(url);
              ws.onopen = function() {
                  // apres connection reussit 
                  console.log("belote socket connected ")
                  self.socketConnection  = ws;
                   resolve("ok CC")
              }
            }catch (e) {
              reject(e)
            }
          })
      }

      register(topics){
        let self = this;
        return new Promise( 
                function (resolve, reject) {

                  if(self.socketConnection===null){
                      reject("belote socket not connected")
                  }
                    try {
                      let dataToSend =self.buildSendData("register",topics);
                      self.socketConnection.send(JSON.stringify(dataToSend));
                      self.socketConnection.onmessage = function name(socketResponseData) {
                        console.log("REGISTER OK ", socketResponseData)
                        resolve(socketResponseData)
                      }
                    }catch (e) {
                        reject(e)
                    }
                })
    }

    buildSendData(type,topics){
      return {
          type:type,
          topics:topics,
      }
  }

}