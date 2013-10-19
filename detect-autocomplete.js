/**
 *
 * [Detect AutoComplete]
 *
 * version 1.0.0
 *
 * Ken Wheeler
 *
 */

var detectAutoComplete = (function(){

  function detectAutoComplete(){
    getElements();
    setTimer();
  }

  var getElements = function(){
    this.inputs = document.getElementsByTagName('input');
    this.selects = document.getElementsByTagName('select');
    this.formElements = [];
    for(var i=0; i < this.inputs.length; i++){
      this.formElements.push({element: this.inputs.item(i), value: this.inputs.item(i).value})
    }
    for(var i=0; i < this.selects.length; i++){
      this.formElements.push({element: this.selects.item(i), value: this.selects.item(i).value})
    }
  }

  var setTimer = function(){
    window.setInterval(function(){
      checkElements();
    },1000);
  }

  var checkElements = function(){
    for(el in this.formElements){
      if(this.formElements[el].element.value != this.formElements[el].value){
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent('change',true,true);
        this.formElements[el].element.dispatchEvent(evt);
        getElements();
      }
    }
  }

  return detectAutoComplete;

})()