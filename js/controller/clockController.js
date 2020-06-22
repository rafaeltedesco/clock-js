class ClockController {  

    constructor() {
        this._locale = 'pt-BR'
        this._hours = document.querySelector('#hours')
        this._minutes = document.querySelector('#minutes')
        this._seconds = document.querySelector('#seconds')   
        this._pauseBtn = document.querySelector('#pause')
        this._resumeBtn = document.querySelector('#resume')
        this._currentDateSpan = document.querySelector('#current_date')
        this._message = document.querySelector('#message')
        this._interval
        this.initialize()
        
    }

    initialize() {
        this.setSpanCurrentDate()
        this.setClock()
        this.startClock()
        this.setEventPause()
        this.setEventResume()

    }

    get locale() {
        return this._locale
    }
    
    setClock() {
        this.hours = this.currentDate.getHours()
        this.minutes = this.currentDate.getMinutes()
        this.seconds = this.currentDate.getSeconds()
    }

    startClock() {
        this.interval = setInterval(()=> {
            this.setClock()
        }, 1000)
    }

    pauseClock() {
        clearInterval(this.interval)
    }

    set interval(value) {
        this._interval = value
    }

    get interval() {
        return this._interval
    }

    get message() {
        return this._message
    }

    setMessage(message) {
        this.message.innerHTML = message 
    }

    
    get currentDateSpan() {
        return this._currentDateSpan
    }

    setSpanCurrentDate() {
        this.currentDateSpan.innerHTML = this.currentDate.toLocaleDateString(this.locale, {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        })
    }

    get hours() {
        return this._hours.innerHTML
    }

    set hours(value) {
        this._hours.innerHTML = value
    }

    get minutes() {
        return this._minutes.innerHTML
    }

    set minutes(value) {
        this._minutes.innerHTML = value
    }

    get seconds() {
        return this._seconds.innerHTML
    }   

    set seconds(value) {
        this._seconds.innerHTML = value
    }

    get currentDate() {
        return new Date()
    }


    get pauseBtn() {
        return this._pauseBtn
    }

    get resumeBtn() {
        return this._resumeBtn
    }

    resumeClickEvent() {
        this.startClock()
        this.pauseBtn.disabled = false
        this.resumeBtn.disabled = true
        this.setMessage('Press Button Pause to Stop.')
        
    }

    pauseClickEvent() {
        clearInterval(this.interval)
        this.pauseBtn.disabled = true
        this.resumeBtn.disabled = false
        this.setMessage('Press Button Resume to Continue.')
        
        
    }

    setEventPause() {
        this.pauseBtn.addEventListener('click', ()=> {
            this.pauseClickEvent()
        })
    }

    setEventResume() {
        this.resumeBtn.addEventListener('click', () => {
            this.resumeClickEvent()
        })

    }



    
}

