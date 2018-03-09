let dataModule = (() => {

    class Movie {

        constructor(title, duration, genre) {
            this.title = title;
            this.duration = Number(duration);
            this.genre = (() => {
                let [first, ...rest, last] = genre.split('');
                return (first + last).toUpperCase();
            })()
        }

        getInfo() {
            return `${this.title}, ${this.duration}min, ${this.genre}`
        }
    }

    class Program {

        constructor(date) {
            this.movieList = [];
            this.date = new Date(date);
        }

        getData() {
            let s = `${this.date.toDateString()}, `;
            if (!this.movieList.length) {
                return `${s}TBA`;
            }
            let totalDuration = this.movieList.map(e => e.duration).reduce((a, e) => a + e, 0);
            return `${s}${this.movieList.length} movies, duration: ${totalDuration}`;
        }

        addMovie(movie) {
            this.movieList.push(movie);
        }
    }

    Array.prototype.hasElement = function(obj) {
        return this.forEach(item => JSON.stringify(item) == JSON.stringify(obj))
    }

    let createMovie = (title, duration, genre) => new Movie(title, duration, genre);
    let createProgram = (date) => new Program(date);

    return {
        createMovie: createMovie,
        createProgram: createProgram
    }
})()