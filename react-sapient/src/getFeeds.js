export default function getFeeds(pageCount) {
    const hitsPerPage=15; //this depend up on the req like how many data we want to show in a single call, this i am using to show the graph clearly
    return fetch('http://hn.algolia.com/api/v1/search?query=bar&restrictSearchableAttributes=url&page='+pageCount+'&hitsPerPage='+hitsPerPage)
    .then(res => res.json());
}