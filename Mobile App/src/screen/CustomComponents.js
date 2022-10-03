import React from "react";
import { Text, StyleSheet, View } from "react-native";

const CustomComponents = () => {
    return (
        <View styles={styles.ChangeContainerView}>
            <View styles={styles.ChangeView}>
                <Text style={styles.TextStyle}>Hello World</Text>
            </View>
         </View>
    );
}

const styles = StyleSheet.create({
    TextStyle: {
        color: '#333',
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: 'yellow',
        textAlign:'center'
    },
    ChangeView: {
        backgroundColor: 'blue',
        border: '2px solid black',
        height: '100px',
        width: '100px'
    },
    ChangeContainerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
    
});
export default CustomComponents;