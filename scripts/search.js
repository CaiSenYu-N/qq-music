class Search {
    constructor(el) {
        this.$el = el
        this.$input = this.$el.querySelector('#search')
        this.$input.addEventListener('keyup', this.onKeyUp.bind(this))
        this.$songs = this.$el.querySelector('.song-list')
        this.keyword = ''
        this.page = 1
        this.songs = []
        this.nomore = false
        this.perpage = 20
        this.fetching = false
        this.onscroll = this.onScroll.bind(this)
        window.addEventListener('scroll', this.onscroll)
    }

    onKeyUp(event) {
        let keyword = event.target.value.trim()
        if (!keyword) return this.reset()
        if (event.key !== 'Enter') return
        this.search(keyword)
    }

    onScroll(event) {
        if (this.nomore) return
        if (document.documentElement.clientHeight + pageYOffset > document.body.scrollHeight - 50) {
            this.search(this.keyword, this.page + 1)
        }
        
    }

    reset() {
        this.page = 1
        this.keyword = ''
        this.songs = []
        this.$songs.innerHTML = ''
    }

    search(keyword, page) {
        // if (this.fetching) return
        // this.keyword = keyword
        // this.fetching = true
        // // fetch(`http://localhost:4000/search?keyword=${this.keyword}&page=${page || this.page}`)
        // .then(res => res.json())
        // .then(json => {
        //     this.page = json.data.song.curpage
        //     this.nomore = (json.message === 'no results')
        //     this.songs.push(...json.data.song.list)
        //     return json.data.song.list
        // })
        // .then(songs => this.append(songs))
        // .then(() => this.fetching = false)
        // .catch(() => this.fetching = false)
    }

    // append(songs) {
    //     `#player?artist=李荣浩&songid=203763079&songname=如果有一天 (live)&albummid=003W1FEC3IGkgz$duration=284`
    //     let html = songs.map(song => `
    //     <li class="song-item">
    //         <i class="icon icon-music"></i>
    //         <div class="song-name ellipsis">${song.songname}</div>
    //         <div class="song-artist ellipsis">${song.singer.map(s => s.name).join(' ')}</div>
    //     </li>`).join('')
    //     this.$songs.insertAdjacentHTML('beforeend', html)
    // }




    // append(songs) {
    //     `#player?artist=李荣浩&songid=203763079&songname=如果有一天 (live)&albummid=003W1FEC3IGkgz$duration=284`
    //     let html = songs.map(song => {
    //         let artist = song.singer.map(s => s.name).join(' ')
    //         return `
    //         <a class="song-item"
    //            href="#player?artist=${artist}&songid=${song.songid}&songname=${song.songname}&albummid=${song.albummid}&duration=${song.interval}">
    //           <i class="icon icon-music"></i>
    //           <div class="song-name ellipsis">${song.songname}</div>
    //           <div class="song-artist ellipsis">${artist}</div>
    //         </a>`}).join('')
    //     this.$songs.insertAdjacentHTML('beforeend', html)
    // }

    loading() {
        this.fetching = true
        this.$el.querySelector('.search-loading').classList.add('show')
    }

    done() {
        this.fetching = false
        if (this.nomore) {
            this.$el.querySelector('.loading-icon').style.display = 'none'
            this.$el.querySelector('.loading-text').style.display = 'none'
            this.$el.querySelector('.loading-done').style.display = 'block'
            this.$el.querySelector('.search-loading').classList.add('show')
        } else {
            this.$el.querySelector('.search-loading').classList.remove('show')
        }
    }
}