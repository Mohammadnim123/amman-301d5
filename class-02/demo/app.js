'use strict';

$('button').click(function () {
    console.log('you clicked me');
    $('ul').toggleClass('on');
});

// $('ul').on('click',function(){
//     console.log($(this).html());
// });

// $('ul').on('click','li',function(){
//     console.log($(this).text());
// });

const ajaxSettings = {
    method:'get',
    datatype: 'json'
}

$.ajax('./people.json',ajaxSettings)
    .then(data => {
        //    console.log(data); 
        data.forEach((val,idx)=>{
            // console.log(val);
            let person = new Person(val.name);
            person.render();
        })
    })

function Person (data) {
    this.pName = data;
}

Person.prototype.render = function () {
    // console.log(this.pName);
    // let liE = `<li>${this.pName}</li>`;
    // $('ul').append(liE);

    let personClone = $('.person-template').clone();
    personClone.removeClass('person-template');
    // console.log(personClone);
    personClone.text(this.pName);
    // personClone.find('span'.text(this.pName));
    $('ul').append(personClone);

}



