import { Text } from 'react-native';
import { Notifications } from 'expo'
import * as Permissions from 'expo-permissions';

export default sendNotification = async ({ body, title }) => {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let finalStatus = status;

    // wasn't granted permission before, ask for it
    if (status !== 'granted') {
        const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        finalStatus = status;
    }

    if (finalStatus !== 'granted') return;

    try {
        // let token = await Notifications.getExpoPushTokenAsync();
        // await fetch('https://expo.host/--/api/v2/push/send', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         to: token,
        //         sound: 'default',
        //         title,
        //         body
        //     })
        // })
        Notifications.dismissAllNotificationsAsync()
        Notifications.presentLocalNotificationAsync({
            body,
            title,
            android:{
                sticky:true
            }
        })
    } catch (e) {
        console.log('push notification error : ', e)
    }
}
