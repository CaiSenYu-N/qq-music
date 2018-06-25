class MusicPlayer {
    constructor(el) {
        this.$el = el
        this.$el.addEventListener('click', this)
        this.createAudio()
        this.lyrics = new LyricsPlayer(this.$el.querySelector('.player-lyrics'))
        this.progress = new ProgressBar(this.$el.querySelector('.progress'),280,true)
    }

    createAudio() {
        this.$audio = document.createElement('audio')
        this.$audio.loop = true
        this.$audio.id = `player-${Math.floor(Math.random() * 100)}-${+new Date()}`
        document.body.appendChild(this.$audio)
    }

    handleEvent(event) {
        let target = event.target
        switch(true) {
            case target.matches('.icon-play'):
                this.onPlay(event)
                break
            case target.matches('.icon-pause'):
                this.onPause(event)
                break
            case target.matches('.icon-list'):
                this.hide()
                break

        }
    }

    onPlay(event) {
        event.target.classList.add('icon-pause')
        event.target.classList.remove('icon-play')
    }

    onPause(event) {
        event.target.classList.add('icon-play')
        event.target.classList.remove('icon-pause')
    }

    play() {
        
    }

    show() {
        this.$el.classList.add('show')
    }

    hide() {
        this.$el.classList.remove('show')
    }
}