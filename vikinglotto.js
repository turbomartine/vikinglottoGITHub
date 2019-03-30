    // This is were the JavaScript starts

    // ============================================
    // VIKINGLOTTO - VELG ANTALL UKER SELV
    // ============================================

            // ===========================================
            // WHERE IT HAPPENS
            // ===========================================
            // initial values
            const costPerCoupon = 60
            const costJoker = 20
            const random = [1, 2, 5, 10, 20]
            let randomIndex = 0
            let coupons = 1
            let weeks = 1

            // function to making the 'ransdom choices' easily visible or not 
            const toggleVisibility = (element, shouldBeVisible) => {
                if (shouldBeVisible) {
                    element.style.visibility = "visible"
                } else {
                    element.style.visibility = "hidden"
                }
            }
            // shows or hides the 'random choices' when '+ flere valg' is clicked
            const activateMoreChoices = () => {
                if (randomButton.style.visibility === 'hidden') {
                    toggleVisibility(randomButton, true)
                    toggleVisibility(randomButtonTitle, true)
                    toggleVisibility(moreChoices, false)
                    toggleVisibility(firstResult, false)
                    toggleVisibility(firstValue, false)
                }
            }

            // calculates the price of the coupons
            const getPrice = () => {
                let price = costPerCoupon * coupons * random[randomIndex] * weeks
                return price
            }

            const getSum = () => {
                if (jokerWednesdayCheck.checked) {
                    return getPrice() + costJoker
                }
                
                else return getPrice()
            }

            //update the UI with calculated numbers
            const updateValues = () => {
                couponAmount.textContent = coupons // sets amount of coupons
                randomAmount.textContent = random[randomIndex] // sets amount of random
                weeksAmount.textContent = weeks // sets amount of weeks
                amountInText.textContent = weeks
                amountCouponsInText.textContent = coupons

                // calculates prices based on number and random, number of coupons and cost per coupn
                value.textContent = getPrice()
                firstValue.textContent = getPrice()
                fullPrice.textContent = getSum()
            }

            // increments and decrements
            const incrementCoupon = () => {
                if (coupons < 30) coupons++
                updateValues()
            }

            const decrementCoupon = () => {
                if (coupons > 1) coupons--
                updateValues()
            }

            const incrementRandom = () => {
                if (randomIndex + 1 < random.length) randomIndex++
                else if (randomIndex + 1 === random.length) randomIndex = 0
                updateValues()
            }

            const decrementRandom = () => {
                if (randomIndex > 0) randomIndex--
                updateValues()
            }

            const incrementWeeks = () => {
                if (weeks < 26) weeks++
                updateValues()
            }

            const decrementWeeks = () => {
                if (weeks > 1 ) weeks--
                updateValues()
            }

            // for the 'Joker Onsdag' 
            const clickJokerWednesday = () => {
                if (jokerWednesdayCheck.checked) {
                    toggleVisibility(priceOfJokerWednesday, true)
                } else {
                    toggleVisibility(priceOfJokerWednesday, false)
                }
                updateValues()
            }

       

        
            

            // SETUP
            // ===========================================

            // makes it a bit faster to get an element
            const get = selector => document.querySelector(selector)

            // get all numbered elements
            const couponAmount = get('.coupons .amount')
            const randomAmount = get('.random .amount')
            const weeksAmount = get('.weeks .amount')
            const value = get('.result .value')
            const firstResult = get('.firstResult')
            const firstValue = get('.firstValue')
            const amountInText = get('.amount-in-text')
            const amountCouponsInText = get('.amount-coupons-in-text')
            
            // get the randombutton 
            const moreChoices = get('.moreChoices')
            const randomButton = get('.wrapper')
            randomButton.style.visibility = 'hidden'
            const randomButtonTitle = get('.counter-wrapperTitle')
            randomButtonTitle.style.visibility = 'hidden'
            
            // get the jokeronsdag button
            const priceOfJokerWednesday = get('.priceOfJokerWednesday')
            const jokerWednesdayCheck = get('.checkbox')
            const jokerWednesdayValue = get('.jokerWednesdayValue')
            priceOfJokerWednesday.style.visibility = 'hidden'


            // get the handInGame button
            const handInPlusPrice = get('.handInPlusPrice')
            let fullPrice = get('.fullPrice')

            //get all inc/dec buttons
            const couponMinus = get('.coupons .minus')
            const couponPlus = get('.coupons .plus')
            const randomMinus = get('.random .minus')
            const randomPlus = get('.random .plus')
            const weeksMinus = get('.weeks .minus')
            const weeksPlus = get('.weeks .plus')

            //setup click events on buttons
            couponMinus.addEventListener('click', decrementCoupon)
            couponPlus.addEventListener('click', incrementCoupon)
            randomMinus.addEventListener('click', decrementRandom)
            randomPlus.addEventListener('click', incrementRandom)
            weeksMinus.addEventListener('click', decrementWeeks)
            weeksPlus.addEventListener('click', incrementWeeks)
            moreChoices.addEventListener('click', activateMoreChoices)
            jokerWednesdayCheck.addEventListener('click', clickJokerWednesday)



            // initialise values
            updateValues()

    
    