import fetchJsonp from 'fetch-jsonp';

let loadedOnce, file_append;

const fetchgist = async (url) => {
    const response = await fetchJsonp(url);
    const json = await response.json();
    return json
    
}   

const stylesheet_manager = (css_url) => {
    if (loadedOnce) return
    const head = document.getElementsByTagName('head')[0]
    const link = document.createElement('link')
    link.rel = "stylesheet"
    link.type = 'text/css';
    link.href = css_url;
    link.media = "all";
    head.appendChild(link);
    loadedOnce = true
}

async function gistLoader() {

    const gist_array = document.querySelectorAll('[data-gist]');

    if (gist_array) {
        for (const div of gist_array) {
            if (div.dataset.file) {
                file_append = `?file=${div.dataset.file}`
            } else {file_append = '';}
            const gist_url = div.dataset.gist + ".json" + file_append;
            const gist_obj = await fetchgist(gist_url);
            const content = await gist_obj.div;
            
            div.innerHTML = content
            div.classList = "gist_embed"
            
            const stylesheet_url = await gist_obj.stylesheet;

            stylesheet_manager(stylesheet_url);

            }
    }

};

/**
 * gistLoader is a simple function which loads Github gists 
 * in async manner after the document DOM was already rendered/changed
 * 
 * To render the gist content, the script expects the folliwing
 * markup: `<div data-gist="https://gist.github.com/someuser/34261e6026oi4c303c40c6ece9961182" data-file="part_one.sh">`
 * Attr:
 * [data-gist] - the url of your Gist from the embed code *required
 * [data-file] - name of the file in a gist if you'd like to render only a part of it *optional
 * Id doesn't require any arguments, but expected to be run
 * on the client-side, when DOM API is available.
 */
export default gistLoader;