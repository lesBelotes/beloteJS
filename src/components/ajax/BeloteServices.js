import BeloteAjax from "@/components/ajax/BeloteAjax";

const BLT_CONNECT="/beloteArea/connecte";

export default class BeloteServices {

    constructor() {

        this.ajax = new BeloteAjax();

    }

    connect(callback){

        const deferred =  this.ajax.get(this._buildUrl(BLT_CONNECT))
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

              if(errorCallback)

                  errorCallback(error)

              else

                console.log(error)

          })

      }

    /**
     * private function
     * @param {*} url  String : /your_resource_path
     * @param {*} params Json Object {arg_key1:arg_value1, arg_key2:arg_value2 } => ?arg_key1=arg_value1&arg_key2=arg_value2
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



