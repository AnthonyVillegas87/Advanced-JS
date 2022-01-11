"use strict"

function EasyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make HTTP GET REQUEST
EasyHTTP.prototype.get = function(url) {
    this.http.open('GET', url, true);

    let self = this;
    this.http.onload = function() {
        if(self.http.status === 200) {
            return self.http.responseText;
        }
    }

    this.http.send();
}

// Make HTTP POST REQUEST


// Make HTTP PUT REQUEST


// Make HTTP DELETE REQUEST

