import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';

export default function Splash(){
    return(<View style={styles.container}>
                <View style={styles.logoArea}>
                    <Image
                    source={require('../assets/Logo-white.png')}
                    style={styles.logo}
                    resizeMode="contain"
                    />
                </View>
            </View>)
}


const styles = StyleSheet.create({
    container: {
        //앱의 배경 색
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#1AC6EC',
    },
    logoArea: {
    alignItems: 'center',
    marginBottom: 30,
    },
    logo: {
    width: 200,
    height: 60,
    },

})