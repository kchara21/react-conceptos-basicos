import { useState, useEffect } from "react";

export const useFetch = (url: string) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    const getData = async (url: string) => {
      try {
        let res: Response = await fetch(url);
        if (!res.ok) {
          // eslint-disable-next-line no-throw-literal

          let error: any = {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrio un error" : res.statusText,
          };

          throw error;
        }

        let data = await res.json();
        setIsPending(false);
        setData(data);
        setError({ err: false });
      } catch (e) {
        setIsPending(true);
        setError(e);
      }
    };
    getData(url);
  }, [url]);

  return { data, isPending, error };
};
