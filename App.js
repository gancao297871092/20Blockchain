import React, { useEffect, useRef } from 'react'
import { View, Text, Image } from 'react-native'

import QRCode from 'react-native-qrcode-svg'
import { i18n } from './i18n'
import { WebView } from 'react-native-webview'
import SplashScreen from 'react-native-splash-screen'
import CameraRoll from "@react-native-community/cameraroll"
import { getStatusBarHeight } from './react-native-iphone-x-helper'

const postImg = require('./img/haibao.png')

const Index = () => {

    const web = useRef()

    useEffect(() => {
        setTimeout(() => {
            web?.current?.postMessage(JSON.stringify({
                headTop: getStatusBarHeight(true)
            }))
            SplashScreen.hide()
        }, 1000)
    }, [web])

    return <View style={{ flex: 1, overflow: 'hidden' }}>

        <WebView ref={web} source={{ uri: 'https://www.20.show/front/app/' }} style={{ flex: 1 }} />

        <View style={{
            position: 'absolute', left: 0, right: 0,
            top: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,.5)',
            display: 'flex', alignItems: 'center',
            justifyContent: 'center'
        }}>
            <View style={{
                width: 300, paddingTop: 20, paddingBottom: 21,
                paddingLeft: 19, paddingRight: 19,
                backgroundColor: '#0C043b',
                borderRadius: 8, overflow: 'hidden'
            }}>
                <Image source={postImg} style={{ width: 300, height: '115%', position: 'absolute', zIndex: -1 }} />
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 44, height: 44, backgroundColor: 'red', borderRadius: 22 }} />
                    <Text style={{ marginLeft: 19, fontSize: 18, color: '#fff', fontWeight: 'bold' }}>Grayswap</Text>
                </View>
                <Text style={{
                    marginTop: 20, color: '#fff',
                    fontSize: 16, fontStyle: 'italic'
                }}>Grayscale made great efforts</Text>
                <Text style={{
                    marginTop: 20, color: '#fff', fontSize: 20, lineHeight: 30, maxWidth: 261
                }}>The annual interest rate is up to 40%, earn high yields.</Text>
                <Text style={{
                    marginTop: 10, color: '#fff', fontSize: 20, maxWidth: 261
                }}>Let the profits run with me.</Text>
                <View style={{
                    width: '100%', display: 'flex',
                    alignItems: 'center', marginTop: 6,
                    flexDirection: 'column'
                }}>
                    <View style={{
                        backgroundColor: '#fff', padding: 3,
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <QRCode value={'www.4399.com'} size={55} />
                    </View>
                    <Text style={{ fontSize: 12, marginTop: 10, color: '#2EA889' }}>
                        邀请码：115px1
                    </Text>
                    <Text style={{
                        marginTop: 10, color: 'rgba(255, 255, 255, 0.8)', fontSize: 12
                    }}>Scan the QR code to open the website</Text>
                </View>
                <View style={{
                    display: 'flex', alignItems: 'center',
                    flexDirection: 'row', justifyContent: 'center'
                }}>
                    <View style={{
                        paddingLeft: 7, paddingRight: 7,
                        height: 26, borderRadius: 4,
                        backgroundColor: 'rgba(208, 223, 255, 0.3)',
                        flexDirection: 'row', display: 'flex',
                        alignItems: 'center', marginTop: 20
                    }}>
                        <Image style={{ width: 16, height: 16, backgroundColor: 'red' }} />
                        <Text style={{
                            color: 'rgba(255, 255, 255, 0.8)', fontSize: 14, marginLeft: 5
                        }}>Download</Text>
                    </View>
                    <View />
                </View>

            </View>
        </View>

    </View>
}

export default Index
