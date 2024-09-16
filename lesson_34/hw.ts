type Faculty = {
    id: number,
    faculty: string,
    subjects: Array<string>,
    countStudents: number
};

type Movie = {
    id: number,
    title: string,
    year: number,
    released: string,
    runtime: string,
    genre: Array<string>,
    director: string,
    writer: string,
    actors: Array<string>,
    plot: string,
    country: string,
    poster: string,
    imdbRating: number,
    imdbVotes: number,
    type: string,
    boxOffice: string,
    production: string,
};

type Language = 'Dutch' | 'English' | string;

type Genre = 'Comedy' | 'Family' | 'Romance' | string;

type WeekDay = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';

type Rating = {
    average: number | null;
}

type Country = {
    name: string,
    code: string,
    timezone: string
}

type Network = {
    id: number,
    name: string,
    country: Country,
    officialSite: string | null;
}

type Schedule = {
    time: string,
    days: Array<WeekDay>;
}

type Externals = {
    tvrage: number | string | null,
    thetvdb: number,
    imdb: string
}

type Image = {
    medium: string,
    original: string
}

type HrefItem = {
    href: string
}

type Links = {
    self: HrefItem,
    previousepisode: HrefItem,
}

type ShowItem = {
    id: number,
    url: string,
    name: string,
    type: string,
    language: Language,
    genres: Array<Genre>,
    status: string,
    runtime: number,
    averageRuntime: number,
    premiered: string,
    ended: string,
    officialSite: null,
    schedule: Schedule,
    rating: Rating,
    weight: number,
    network: Network,
    webChannel: string,
    dvdCountry: string,
    externals: Externals,
    image: Image,
    summary: string,
    updated: number,
    _links: Links
}

type Show = {
    score: number,
    show: ShowItem;
}

const printFaculties = (faculties: Array<Faculty>) => console.log(faculties);

const printMovies = (movies: Array<Movie>) => console.log(movies);

const printShows = (shows: Array<Show>) => console.log(shows);