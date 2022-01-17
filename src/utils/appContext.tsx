import {
  Dispatch,
  SetStateAction,
  useState,
  useContext,
  createContext,
  ReactNode
} from 'react'

export interface IProviderProps {
  children?: ReactNode
}

type AppContextState = { domain: string }

type AppContextValue = {
  state: AppContextState
  setState: Dispatch<SetStateAction<AppContextState>>
}

export const AppContext = createContext<AppContextValue | undefined>(undefined)

export const AppProvider = (props: IProviderProps) => {
  const [state, setState] = useState({ domain: 'YourDomain.com' })

  return (
    <AppContext.Provider value={{ state, setState }}>
      {props.children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const ctxValue = useContext(AppContext)
  if (ctxValue === undefined)
    throw new Error(
      'Expected an AppProvider somewhere in the react tree to set context value'
    )
  return ctxValue // now has type AppContextValue
  // or even provide domain methods for better encapsulation
}
