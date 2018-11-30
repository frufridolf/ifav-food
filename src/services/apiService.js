export class apiService {

    escapeSpecialChars(jsonString) {

        return jsonString.replace(/\n/g, "\\n")
            .replace(/\r/g, "\\r")
            .replace(/\t/g, "\\t")
            .replace(/\f/g, "\\f");

    };

    search(term) {
        //let url = `http://säsongsmat.nu/w/api.php?action=opensearch&format=json&search= ${term} &namespace=550`;
        //url ="http://xn--ssongsmat-v2a.nu/w/api.php?action=opensearch&format=json&search=hallon";
        let url = "http://localhost:3000/recipes"
        fetch(url)
            .then(result => {
                //todo create errorhandler
                return result.json();
            }).then(data => {
                let recipies = data[0];
                return recipies;
            }).catch(exception => {
                //todo
                alert(exception);
            });
    }
}