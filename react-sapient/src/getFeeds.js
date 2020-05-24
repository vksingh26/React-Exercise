export default function getFeeds() {
    return fetch('http://hn.algolia.com/api/v1/search?tags=front_page')
    .then(res => res.json());
}