import i18n from 'react-native-i18n'
import en from './en'
import zh from './zh'
import zhTw from './zhTw'

i18n.defaultLocale = 'en'
i18n.fallbacks = true
i18n.translations = {
    en,
    zh,
    zhTw
}

export { i18n }