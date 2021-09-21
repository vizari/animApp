
import { StyleSheet } from 'react-native';

export const page = StyleSheet.create({
    body: {
        flex: 1,
        padding: 20,
        backgroundColor: '#000',
    }
});

export const text = StyleSheet.create({
    title: {
        fontSize: 21,
        color: '#333'
    },
    subTitle: {
        fontSize: 14,
        color: 'black',
        marginVertical: 5,
        fontWeight: '400',
        fontSize: 14,
    },
});

export const grid = StyleSheet.create({
    gridFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export const button = StyleSheet.create({
    btn: {
        width: '100%',
        padding: 10,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 5, 
    },
    btnTransparent: {
        backgroundColor: 'transparent',
        borderColor: "white"
        
    },
    btnTurquoise: {
        backgroundColor: '#09776d',
        borderColor: "#09776d"
        
    },
    btnBlue :{
        backgroundColor: '#6170af',
        borderColor: "#6170af"
    }
})


export const spinner = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center"
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10
    }
  });

export const inputText = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      width:250
    },
  });