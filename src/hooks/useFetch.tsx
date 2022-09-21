import { useRef, useEffect, useReducer } from 'react';

interface State<T> {
  data?: T;
  error?: Error;
}

type Action<T> =
  | {
      type: 'LOADING';
    }
  | {
      type: 'FETCHED';
      payload: T;
    }
  | {
      type: 'ERROR';
      payload: Error;
    };

export default function useFetch<T = unknown>(
  url?: string,
  options?: RequestInit
): State<T> {
  const cancel = useRef<boolean>(false);
  const initialState: State<T> = {
    data: undefined,
    error: undefined,
  };

  const fetchReducer = (initialState: State<T>, action: Action<T>) => {
    switch (action.type) {
      case 'LOADING':
        return { ...initialState };
      case 'FETCHED':
        return { ...initialState, data: action.payload };
      case 'ERROR':
        return { ...initialState, error: action.payload };
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) return;
    cancel.current = false;

    const fetchData = async () => {
      dispatch({ type: 'LOADING' });
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error(response.statusText);

        const data = (await response.json()) as T;

        if (cancel.current) return;
        dispatch({ type: 'FETCHED', payload: data });
      } catch (error) {
        if (cancel.current) return;
        dispatch({ type: 'ERROR', payload: error as Error });
      }
    };

    fetchData();

    return () => {
      cancel.current = true;
    };
  }, [url, options]);

  return state;
}
