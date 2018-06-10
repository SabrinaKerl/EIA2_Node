/*  Aufgabe: Aufgabe 8: ClientServer - StudiVZ
    Name: Sabrina Kerl
    Matrikel: 257167
    Datum: 10.06.18
    
    Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.
    Dieser Code wurde zusammen mit Alena Hurst, Sofia Gschwend, Franziska Hei�, Anna Lotz und Tim Lieberherr erarbeitet*/
    
    
interface AssocStringString {
    [key: string]: string;
}

// Struktur des heterogenen assoziativen Arrays als Datensatz f�r eine studierende Person
interface Studi {
    firstname: string;
    name: string;
    matrikel: number;
    age: number;
    gender: boolean;
    studyPath: string;
}


/*// Struktur des homogenen assoziativen Arrays, bei dem ein Datensatz der Matrikelnummer zugeordnet ist
interface Studis {
    [matrikel: string]: Studi;
}
// Homogenes assoziatives Array zur Speicherung einer Person unter der Matrikelnummer
let studiHomoAssoc: Studis = {}; */ 