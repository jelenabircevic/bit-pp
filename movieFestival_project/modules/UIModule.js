let UIModule = (() => {

    let UISelectors = {
        error: ['#error1', '#error2', '#error3'],
        movieBtn: '#add',
        programBtn: '#addprogram',
        addBtn: '#addmtop',
        selectM: '#movies',
        selectP: '#programs',
        ulM: 'ul',
        ulP: '#movieProgram',
        title: '#title',
        duration: '#length',
        genre: '#genre', 
        date: '#date'       
    }
    
    const movieTitle = $(UISelectors.title)[0];
    const movieDuration = $(UISelectors.duration)[0];
    const movieGenre = $(UISelectors.genre)[0];
    const programDate = $(UISelectors.date)[0];
    const movie = $(UISelectors.selectM)[0];
    const program = $(UISelectors.selectP)[0];
    const optionM = $(UISelectors.selectM)[0];
    const optionP = $(UISelectors.selectP)[0];

let status = {
    OK: 'OK',
    ALREADY_EXISTS: 'Already exists!',
    MOVIE_TITLE: 'Title is required!',
    MOVIE_LENGTH: 'Check the movie length!',
    MOVIE_GENRE: 'Choose genre of the movie!',
    PROGRAM_DATE: 'Please enter date',
    EMPTY_SELECT: 'Choose movie and/or program!'    
}

let getMovieData = () => {
    return { movieTitle: movieTitle.value,
             movieDuration: movieDuration.value, 
             movieGenre: movieGenre.value  
            }
    }

let getProgramData = () => {
    return {
        programDate: programDate.value
    }
}

let getAddingData = () => {
    return {
        movie : optionM.value,
        program : optionP.value
    }
}

let reset = (...args) => args.forEach(e => e.value = '');

// IDEA is to create ONE function for adding and updating lists on page (one for movie list and movie dropDown, and one for program list and program dropDown)


let addMovie = (obj) => {
    movieList.push(obj);
    updateList();
}

let addProgram = (obj) => {
    programList.push(obj);
    updateProgramList();
}

let addMovieTorogram = (movie, program, pIndex) => {
    program.moveList.push(movie);
    updateProgramSelect(program, pIndex);
}

let updateProgramSelect = (program, pIndex) => {
    
}



    return {
        UISelectors : UISelectors,
        getMovieData: getMovieData,
        reset: reset,
    }
})