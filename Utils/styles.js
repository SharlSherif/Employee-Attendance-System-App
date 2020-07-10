import { StyleSheet } from 'react-native'
let styles = StyleSheet.create({
    signButton: {
        borderRadius: 100,
        width: 200,
        height: 200,
        backgroundColor: '#4682B4'
    },
    bottomView: {
        width: '100%',
        height: 50,
        bottom: '5%',
        justifyContent: 'center',
        position: 'absolute',
        alignItems: 'center',
        // top: 100
    },
    signOut: {
        width: '50%',
        backgroundColor: '#f0134d',
        ...shadow
    },
    modalButton: {
        marginTop: 20,
    },
    timerContainer: {
        width: '80%',
        height: '50%',
        alignSelf: 'center',
        position: 'absolute',
    },
    timer: {
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#ffd428',
        color: '#242A37',
        textAlign: 'center',
        fontFamily: 'Avenir',
        fontSize: 50,
        top: '25%'
    },
    smallContainer: {
        justifyContent: 'space-between',
        marginLeft: '100%',
        marginRight: '100%',
        flexDirection: 'row'
    },
    smallText: {
        fontSize: 25,
        color: '#242A37',
        fontFamily: 'Oswald-VariableFont_wght',
    },
    text: {
        color: 'white',
        padding: 15,
        borderRadius: 20,
        backgroundColor: 'rgb(38, 34, 34)',
        fontSize: 40,
        alignItems: 'center',
        marginBottom: '50%'
    }
})

// helpers
let shadow = {
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
}


export { styles, shadow }