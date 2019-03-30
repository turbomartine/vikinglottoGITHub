
// =============================================
// This is the normal coupon
// =============================================

const getRandom = () => Math.floor(Math.random() * 48) + 1
const boxForActualCoupon = document.querySelector('.boxForActualCoupon')

/**
 * @description creates a HTML element
 * 
 * @param { String } elementType i.e: div, span, li
 * @param { String } attributeName i.e: class, selected, href, src
 * @param { String } attributeValue url, classname, true or something...
 * @return { HTMLElement }
 */
const createEmptyElement = (elementType, attributeName, attributeValue) => {
    const temporary = document.createElement(elementType)
    temporary.setAttribute(attributeName, attributeValue)
    return temporary
}

const initializeRegularNumbers = () => {
    for (let i = 0; i < 10; i++) {
    
        const div = createEmptyElement('div', 'class', 'board-row')
        const pretext = createEmptyElement('span', 'class', 'row-indicator')

        // put preceding number inside
        pretext.textContent = `${i + 1}.`
    
        // put the pretext inside the div box
        div.appendChild(pretext)
    
        // put 7 list items inside the div just created ( explained again below )
        for (let j = 0; j < 6; j++) {
    
            const span = createEmptyElement('span', 'class', 'row-number')
            span.innerHTML = ""

            // add a random number inside the spanst item
            span.textContent = getRandom()
    
            // put the spanst item inside the div just created
            div.appendChild(span)
    
        }
    
        // now put all the shit just created inside the outer box
        // (the div with 7 random numbered divs inside)
        boxForActualCoupon.appendChild(div)
    }
}

// ================================================
// This is the viking Coupon
// ================================================

const initializeVikingNumbers = () => {
    const getRandomVikingNumber = () => Math.floor(Math.random() * 8) + 1
    const boxForActualCouponViking = document.querySelector('.boxForActualCouponViking')
    boxForActualCouponViking.innerHTML = ""
    
    for (let i = 0; i < 10; i++) {
        const divViking = createEmptyElement('div', 'class', 'board-row-viking')
        const spanViking = createEmptyElement('span', 'class', 'row-numberViking')
    
        spanViking.textContent = getRandomVikingNumber()
        divViking.appendChild(spanViking)
    
        boxForActualCouponViking.appendChild(divViking)
    }
}


const initializeCoupon = () => {
    initializeRegularNumbers()
    initializeVikingNumbers()
}

const reInitializeCoupon = () => {
    boxForActualCoupon.innerHTML = ""
    initializeCoupon()
}

initializeCoupon()


// ==================================================
// Trekk Nye Tall - på velg antall uker selv
// ==================================================

const newNumbers = document.querySelector('.newNumbers')

newNumbers.addEventListener('click', reInitializeCoupon)