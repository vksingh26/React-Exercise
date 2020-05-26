export default function getFeeds(pageCount) {
    const page = pageCount
    return fetch('http://hn.algolia.com/api/v1/search?query=bar&restrictSearchableAttributes=url&page='+pageCount)
    .then(res => res.json());
}