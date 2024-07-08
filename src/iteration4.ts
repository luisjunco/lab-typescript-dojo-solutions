//
// Iteration 4 | Type aliases
//


type Book = {
    title: string;
    year: number;
    genres: string[];
    rating?: number;
    author: string;
    numberOfPages?: number;
}


type Movie = {
    title: string;
    year: number;
    genres: string[];
    rating?: number;
    director: string;
    durationInMinutes?: number;
}


type MusicAlbum = {
    title: string;
    year: number;
    genres: string[];
    rating?: number;
    artist: string;
    numberOfTracks?: number;
    durationInMinutes?: number;
    albumType: 'Studio Album' | 'Live Album' | 'Soundtrack' | 'Other';
}


function getYearsSinceRelease(mediaItem: Book | Movie | MusicAlbum): number {
    const currentYear = new Date().getFullYear();
    const difference = currentYear - mediaItem.year;
    return difference;
}





// 
// testing...
// 

const bookOne: Book = {
    title: "Harry Potter and the Goblet of Fire",
    year: 2000,
    genres: ["Fantasy", "Adventure"],
    rating: 9.4,
    author: "J.K. Rowling",
    numberOfPages: 636,
};

const movieOne: Movie = {
    title: "The Matrix",
    year: 1999,
    genres: ["Action", "Sci-Fi"],
    rating: 8.7,
    director: "The Wachowskis",
    durationInMinutes: 136
};


const ageBookOne = getYearsSinceRelease(bookOne);
const ageMovieOne = getYearsSinceRelease(movieOne);

console.log(ageBookOne);
console.log(ageMovieOne);



