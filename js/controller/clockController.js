class ClockController {  
    
    constructor() {
        this._hours = document.querySelector('#hours')
        this._minutes = document.querySelector('#minutes')
        this._seconds = document.querySelector('#seconds')   
        this._pauseBtn = document.querySelector('#pause')
        this._resumeBtn = document.querySelector('#resume')
        this._interval
        this.initialize()
        
    }

    initialize() {
        this.setClock()
        this.startClock()
        this.setEventPause()
        this.setEventResume()

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

    }

    pauseClickEvent() {
        clearInterval(this.interval)
        this.pauseBtn.disabled = true
        this.resumeBtn.disabled = false
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

