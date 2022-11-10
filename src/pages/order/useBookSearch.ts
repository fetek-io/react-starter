import { useEffect, useState } from 'react';
import axios, { Canceler } from 'axios';

export default function useBookSearch(query: string, pageNumber: number) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [books, setBooks] = useState<string[]>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setBooks([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    setError(false);
    let cancel: Canceler;
    axios({
      method: 'GET',
      url: 'http://openlibrary.org/search.json',
      params: { q: query ? query : null, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        setBooks((prevBooks: string[]) => {
          return [
            ...new Set([...prevBooks, ...res.data.docs.map((b: { title: string }) => b.title)]),
          ];
        });
        setHasMore(res.data.docs.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, books, hasMore };
}
