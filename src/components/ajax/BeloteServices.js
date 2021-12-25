import BeloteAjax from "@/components/ajax/BeloteAjax";

import BeloteWebsocket from "@/components/ajax/BeloteWebsocket";

const BLT_CONNECT="/belote/player";
const BLT_CREAT="/belote/game";
//const BLT_PARTICIPE="/belote/game/player"
const BLT_WS_CONNECT="/beloteWebSocket";


export default class BeloteServices {

    constructor() {

        this.ajax = new BeloteAjax();

        this.ws = new BeloteWebsocket();

    }

    connect(callback,pseudo){

        const deferred =  this.ajax.post(this._buildUrl(BLT_CONNECT,null,[pseudo]))
        this._managePromiseResponse(deferred,callback)

    }

    wsConnect(){

        return this.ws.connect(BLT_WS_CONNECT)

    }

    create(callback){

       const deferred= this.ajax.post(this._buildUrl(BLT_CREAT))
       this._managePromiseResponse(deferred,callback)

    }

    /**



     * private function

     * @param {*} deferred 

     * @param {*} callback 

     * @param {*} errorCallback 

     */

    _managePromiseResponse(deferred,callback, errorCallback){

          deferred.then(function (result) {

              if(callback) {

                  callback(result);

              }

          }, function (error) {

              if(errorCallback){
                  errorCallback(error)
              }
              else{
                console.log(error)
              }

          })
      }



    /**

     * private function
       /player/param1/params2?reqParam1=val1&reqParam2=val2
     * @param {*} url  String : /your_resource_path  example :
     * @param {*} params Json Object 
     *                {arg_key1:arg_value1, arg_key2:arg_value2 } 
     *                => ?arg_key1=arg_value1&arg_key2=arg_value2
     * @param {*} pathArgs Arrays [arg1,arg2] => /arg1/arg2
     * @returns 
     */
    _buildUrl(url, params,pathArgs){

        if(pathArgs!=null && Array.isArray(pathArgs) && pathArgs.length>0) {
            pathArgs.forEach(function (arg) {
                url = url.concat("/").concat(arg);
            })
        }

        if(params!=null && Object.keys(params).length>0) {

            url = url.concat('?');
            Object.keys(params).forEach(function (key) {
                url = url.concat(key).concat("=").concat(params[key]).concat("&");
            })

        }

        return url

    }



}







