class BasePage{
    constructor(page){
        this.page = page;

    }
    /**
    * Opens a sub page of the page
    * @url path path of the url (e.g. /path/to/page.html)
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
         open (url, path) {
            return this.page.goto(`${url}${path}`)
    
        }

}
module.exports = BasePage;