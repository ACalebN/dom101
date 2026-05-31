/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// add your functions here

function replaceText(elem, str) {
    elem.textContent = str
}

function addTextTo(elem, str) {
    elem.textContent = elem.textContent + str
}

function moreBears() {
    let bear = document.querySelector("#animals")
    bear.src = 'http://placebear.com/400/200'
    bear.alt = 'A bear.'
    bear.title = 'A BEAR!'
}

function setId(elem, str) {
    elem.id = str
    return elem
}

function setClass(elem, str) {
    elem.className  = str
    return elem
}

function addAClass(elem, str) {
    elem.classList.add(str)
    return elem
}

function removeAClass(elem, str) {
    elem.classList.remove(str)
    return elem
}

function newElement(name) {
    let elem = document.createElement(name)
    return elem
}

function findElementById(id) {
    let elem = document.getElementById(id)
    return elem
}

function findElementsByQuery(query) {
    let elem = document.querySelectorAll(query)
    return elem
}

function reverseList(query) {
    let list = document.querySelector(query);
    if (list) {
        let items = Array.from(list.children);
        items.reverse().forEach(item => list.appendChild(item));
    }
    return list;
}

function mover(moveThis, appendToThis) {
    let move = document.querySelector(moveThis)
    let toThis = document.querySelector(appendToThis)

    toThis.appendChild(move)
}

function filler(list, candidates) {
    candidates.forEach(elem => {
        const listItem = document.createElement('li')
        listItem.textContent = elem
        list.appendChild(listItem)
    })
}

function dupe(selector) {
    let elem = document.querySelector(selector)
    if (elem) {
        let elem2 = elem.cloneNode(true)
        elem.parentElement.appendChild(elem2)
    }
}

function removeAll(selector) {
    let elements = document.querySelectorAll(selector)
    elements.forEach(elem => {
        elem.remove()
    })
}

function getUserData() {
    let username = document.querySelector('#username').value;
    let speed = document.querySelector('#speed').value;
    let student = document.querySelector('#student').checked; // Assuming this is a checkbox
    
    const userdata = {
        name: username,
        speed: parseInt(speed),
        student: student
    };
    return userdata;
}