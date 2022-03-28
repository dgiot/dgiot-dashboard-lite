import { Dispatch, SetStateAction, useCallback, useEffect, useRef, useState } from 'react';

//解决Can't perform a React state update on an unmounted component.
/**
 * useUnmounted
 * @returns boolean
 * whether the component is unmounted
 */
export function useUnmounted() {
  const unmountedRef = useRef(false);
  useEffect(() => {
    return () => {
      unmountedRef.current = true;
    };
  }, []);
  return unmountedRef.current;
}
/**
 * @method useAsyncState
 * Prevent React state update on an unmounted component.
 */
export function useAsyncState<S>(initialState?: S | (() => S)): [S | undefined, Dispatch<SetStateAction<S>>] {
  const unmountedRef = useUnmounted();
  const [state, setState] = useState(initialState);
  const setAsyncState = useCallback((s) => {
    if (unmountedRef) return;
    setState(s);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [state, setAsyncState];
}