import { useState, useEffect, useCallback } from "react";
import { useAuthContext } from "../contexts/AuthContainer";
import { handleErrors } from "../helpers/api";

const useMutation = () => {
  const auth = useAuthContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const mutate = useCallback(async (url, options = {}) => {
    setIsLoading(true);

    const headers = {
      accept: "application/json",
      "content-type": "application/json",
    };

    if (auth && auth.user) {
      headers.Authorization = auth.user.id;
    }

    try {
      const result = await fetch(url, {
        method: options.method ?? "POST",
        headers: headers,
        body: JSON.stringify(options.data ?? {}),
      });

      const data = await handleErrors(result);

      if (options.onSuccess) {
        options.onSuccess(data);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      if (options.onError) {
        options.onError(error);
      } else {
        setIsLoading(false);
        setError(String(error));
      }
    }
  }, [auth]);



  return {
    isLoading,
    error,
    mutate,
  };
};

export default useMutation;
