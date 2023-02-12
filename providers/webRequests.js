// This variable will be filled with the callbacks once they register
const callbacks = [];

/**
 * This callback is displayed as part of the Requester class.
 * @callback XHR_Intercept_Callback
 * @param {XMLHttpRequest} xhr
 */

// This function will allow plugins to register callback that will be triggered when data changes

module.exports = {
    patch: function () {
        var XHR = XMLHttpRequest.prototype;

        var open = XHR.open;
        var send = XHR.send;
        var setRequestHeader = XHR.setRequestHeader;

        XHR.open = function (method, url) {
            this._method = method;
            this._url = url;
            this._requestHeaders = {};
            this._startTime = new Date().toISOString();

            return open.apply(this, arguments);
        };

        XHR.setRequestHeader = function (header, value) {
            this._requestHeaders[header] = value;
            return setRequestHeader.apply(this, arguments);
        };

        XHR.send = function (postData) {
            this.addEventListener("load", function () {
                if (this._url?.toLowerCase()) {
                    // here you get the RESPONSE HEADERS
                    var responseHeaders = this.getAllResponseHeaders();

                    if (this.responseType != "blob" && this.responseText) {
                        {
                            const original = {
                                status: this.status,
                                statusText: this.statusText,
                                responseHeaders: responseHeaders,
                                responseText: this.responseText,
                                responseType: this.responseType,
                                responseURL: this.responseURL,
                                response: this.response,
                            };

                            Object.defineProperties(
                                this,
                                [
                                    "status",
                                    "statusText",
                                    "responseHeaders",
                                    "responseText",
                                    "responseType",
                                    "responseURL",
                                    "response",
                                ].reduce((acc, key) => {
                                    acc[key] = {
                                        value: original[key],
                                        writable: true,
                                    };
                                    return acc;
                                }, {})
                            );
                        }

                        for (const cb of callbacks) {
                            try {
                                cb(this);
                            } catch {
                                console.log("Error in callback", cb);
                            }
                        }
                    }
                }
            });

            return send.apply(this, arguments);
        };
    },
    registerCallback: (/**@type {XHR_Intercept_Callback}*/ callback) => {
        callbacks.push(callback);
    },
};
