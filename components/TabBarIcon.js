import React from 'react';
import { Image, Text } from 'react-native'

function TabBarIcon(props) {
  const { focused, name, label } = props
  const path = '../assets/images/icons/'
  const icons = {
    id: {
      default: require(path + 'id-1.png'),
      focus: require(path + 'id-2.png')
    },
    stopclock: {
      default: require(path + 'stopclock-1.png'),
      focus: require(path + 'stopclock-2.png')
    },
    settings: {
      default: require(path + 'settings-1.png'),
      focus: require(path + 'settings-2.png')
    },
  }

  const source = focused ? icons[name].focus : icons[name].default

  return (
    <React.Fragment>
      <Image
        source={source}
        style={{ marginBottom: -5, height: 25, width: 25, padding: 1 }}
      >
      </Image>
      <Text style={{
        fontSize: 12,
        marginTop: 7,
        fontWeight: focused? '500': 'normal',
        fontFamily: 'Avenir'
      }}>{label}</Text>
    </React.Fragment>

  )
}

export default TabBarIcon