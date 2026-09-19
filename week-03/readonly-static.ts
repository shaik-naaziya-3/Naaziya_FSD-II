class MovieTicket {

    // 1. STATIC: Shared by all objects. Belongs to the Class.
    public static theatreName: string = "PVR Cinemas";

    // 2. READONLY: Can be set in the constructor but never changed later.
    public readonly ticketId: number;
    public movieName: string;

    constructor(ticketId: number, movieName: string) {
        this.ticketId = ticketId;
        this.movieName = movieName;
    }

    // STATIC METHOD: Can be called without creating a "new" object.
    public static showTheatre(): void {
        console.log("Theatre Name:", this.theatreName);
    }

    public showTicket(): void {
        console.log("Ticket ID:", this.ticketId);
        console.log("Movie Name:", this.movieName);
    }
}


// ----- Execution -----

// Accessing STATIC members (Use the Class name, not the object)
MovieTicket.showTheatre();


// Creating Movie Tickets
let ticket1 = new MovieTicket(101, "Inception");
let ticket2 = new MovieTicket(102, "Interstellar");


// Testing STATIC
MovieTicket.theatreName = "INOX Cinemas";

console.log("----------------");

MovieTicket.showTheatre();

console.log("----------------");


// Testing READONLY
ticket1.showTicket();

console.log("----------------");

ticket2.showTicket();


// Uncommenting the line below will give an error
// because readonly properties cannot be modified.

// ticket1.ticketId = 201;