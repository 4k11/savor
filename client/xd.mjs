import { form } from './form.mjs'
import { home } from './home.mjs'
import { results } from './results.mjs'

const root = document.getElementById('root')

const loadHome = () => {
    root.innerHTML = home

    const heroButton = document.querySelector('#hero button')
    
    heroButton.addEventListener('click', () => loadForm())
}

const loadForm = () => {
    let query = { }

    root.innerHTML = form 

    const selects = document.querySelectorAll('.select button')

    for (const select of selects) {
        select.addEventListener('click', (e) => {
            e.target.parentNode.classList.toggle('active')
        })
    }

    const inputs = document.querySelectorAll('input')

    for (const input of inputs) {
        input.addEventListener('input', (e) => {
            query[e.target.name] = e.target.value
        })
    }
    
    const selectOptions = document.querySelectorAll('.select-list li')
    
    for (const selectOption of selectOptions) {
        selectOption.addEventListener('click', e => {
            for (const opt of e.target.parentNode.children) {
                opt.classList.remove('active')
                const radio = opt.querySelector('input')
                radio.checked = false
            }
    
            e.target.classList.add('active')
            const radio = e.target.querySelector('input')
            radio.checked = true

            query[e.target.parentNode.getAttribute('name')] = e.target.value
        })
    }

    const resetButton = document.querySelector('#reset')
    resetButton.addEventListener('click', () => {
        for (const select of selects) {
            select.parentNode.classList.remove('active')
        }

        for (const input of inputs) {
            input.value = ''
        }

        for (const opt of selectOptions) {
            opt.classList.remove('active')
            const radio = opt.querySelector('input')
            radio.checked = false
        }

        query = {}
    })

    const submitButton = document.querySelector('#submit')
    submitButton.addEventListener('click', () => {
        console.log(query)
        fetch('/predict?' + new URLSearchParams(query))
            .then(res => res.text())
            .then(value => loadResults(value))
    })
}

const loadResults = (value) => {
    root.innerHTML = results

    const valueNode = document.querySelector('#value')
    valueNode.innerHTML = value 

    const homeButton = document.querySelector('#home-button')

    homeButton.addEventListener('click', () => loadHome())
}

loadHome()