"use strict";
const Http = require("http");
const Url = require("url");
var Server;
(function (Server) {
    // Simples Array zum Speichern der Studi-Datens�tze -> wird jetzt ersetzt durch SERVER!!!!!!!!!!!!!
    // export let studiSimpleArray: Studi[] = [];
    // Homogenes assoziatives Array zur Speicherung einer Person unter der Matrikelnummer -> wird jetzt ersetzt durch SERVER!!!!!!!!!!!!!
    // export let studiHomoAssoc: Studis = {};
    let port = process.env.PORT; // Environment f�r Port erstellen
    if (port == undefined)
        port = 8100; // setze ihn auf port 8100 -> �berschreibe Aufg4_Code1
    let server = Http.createServer();
    server.addListener("listening", handleListen);
    server.addListener("request", handleRequest);
    server.listen(port);
    function handleListen() {
        console.log("Ich höre?");
    }
    function handleRequest(_request, _response) {
        console.log("Ich höre Stimmen!"); // Kontrolle ob Server reagiert
        let query = Url.parse(_request.url, true).query; // Url.parse() Metohde -> wenn false dann Ergebnis "NaN"
        //let a: number = parseInt(query["a"]); das ist Aufg4_Code1
        //let b: number = parseInt(query["b"]);
        // Switch Abfrage um richtige function starten zu k�nnen
        console.log(query["cmd"]); //cmd = short for command
        if (query["cmd"]) {
            switch (query["cmd"]) {
                case "insert":
                    insert();
                    break;
                case "refreh":
                    refresh();
                    break;
                case "search":
                    search();
                    break;
                default:
                    flaw();
            }
        }
        // case functions Aufrufe
        // case insert
        function insert() {
            let obj = JSON.parse(query["data"]);
            let _name = obj.name;
            let _firstname = obj.firstname;
            let matrikel = obj.matrikel.toString();
            let _age = obj.age;
            let _gender = obj.gender;
            let _studiengang = obj.studiengang;
            let studi;
            studi = {
                name: _name,
                firstname: _firstname,
                matrikel: parseInt(matrikel),
                age: _age,
                gender: _gender,
                studiengang: _studiengang
            };
            studiHomoAssoc[matrikel] = studi;
            _response.setHeader("Access-Control-Allow-Origin", "*");
            _response.write("Daten empfangen");
            _response.end();
        }
        // Datensatz im assoziativen Array unter der Matrikelnummer speichern
        studiHomoAssoc[matrikel] = studi;
        function refresh() {
            console.log(studiHomoAssoc);
            for (let matrikel in studiHomoAssoc) {
                let studi = studiHomoAssoc[matrikel];
                let line = matrikel + ": ";
                line += studi.studiengang + ", " + studi.name + ", " + studi.firstname + ", " + studi.age + " Jahre ";
                line += studi.gender ? "(M)" : "(F)";
                console.log(line);
                let data = JSON.stringify(line);
                _response.setHeader("Access-Control-Allow-Origin", "*");
                _response.write(data);
                _response.end();
            }
        }
        function error() {
            alert("Error");
        }
    }
})(Server || (Server = {}));
//# sourceMappingURL=Server.js.map