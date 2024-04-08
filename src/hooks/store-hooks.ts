import { useDispatch, useSelector } from 'react-redux'

import { RootDispatch, RootState } from 'store/store.ts'

export const useAppDispatch = useDispatch.withTypes<RootDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
