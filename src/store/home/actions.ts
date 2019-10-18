import { action } from 'typesafe-actions'
import { Constants, IAppMessage, MessageBarColors } from './types'

export function addItemToList(item: string) {
  return action(Constants.ADD_ITEM, {
    item,
  })
}

export function setLoading(loading: boolean) {
  return action(Constants.SET_LOADING, {
    loading,
  })
}

export function setDarkMode(isDark: boolean) {
  return action(Constants.SET_DARK_MODE, {
    isDark,
  })
}

export function setAppMessage(appMessage: IAppMessage) {
  return action(Constants.SET_APP_MESSAGE, {
    appMessage,
  })
}
